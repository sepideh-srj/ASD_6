from django.contrib.auth.models import AbstractUser, UserManager
from django.core.exceptions import ValidationError
from django.db import models
from django.db import transaction
from django.db.utils import OperationalError, ProgrammingError
from django.template.loader import render_to_string
from django.utils.crypto import get_random_string

from utils.fields import PhoneField
from utils.validators import PhoneRegex
from utils.urls import get_invitation_url

import json

def random_invitation_code():
    try:
        s = None
        while not s or User.objects.filter(invitation_code=s).exists():
            s = get_random_string(6, 'abcdefghijklmnopqrstuvwxyz0123456789')
        return s
    except (OperationalError, ProgrammingError):
        return ''

class User(AbstractUser):
    CODE_LENGTH = 8

    balance = models.PositiveIntegerField('اعتبار', default=0)
    phone = PhoneField('شماره تلفن', null=True, max_length=13, validators=[PhoneRegex], unique=True)
    code = models.CharField(max_length=CODE_LENGTH, null=True)
    invitation_code = models.CharField('کد دعوت', max_length=6, default=random_invitation_code, unique=True)
    password = models.CharField(max_length=30)
    activated = models.BooleanField(default=False)
    addresses = models.CharField(max_length=10000, default="[]")

    objects = UserManager()

    def add_address(self, address):
        addresses = self.get_addresses()
        addresses += [address]
        self.addresses = json.dumps(addresses)

    def get_addresses(self):
        return json.loads(self.addresses)

    def generate_code(self):
        self.code = get_random_string(self.CODE_LENGTH, 'abcdefghijklmnopqrstuvwxyz0123456789')
        self.code = "12345678"

    def send_code_by_sms(self):
        text = 'کد تایید حساب شما در سامانه وال {} است.'.format(self.code)
        from utils.sms import SMS
        SMS(self.phone, text).start()

    def send_password_by_sms(self):
        text = 'رمز عبور حساب شما در سامانه وال {} است.'.format(self.password)
        from utils.sms import SMS
        SMS(self.phone, text).start()

    def change_balance(self, amount):
        self.balance = self.balance + amount
        self.save()

    def buy(self, product):
        if self.balance < product.price:
            raise ValidationError('اعتبار ناکافی.')
        if product.seller.phone == self.phone:
            raise ValidationError('کالا برای خودتان است!')
        with transaction.atomic():
            self.change_balance(-product.price)
            product.seller.change_balance(product.price)
            product.buyer = self
            product.save()


class Invitation(object):
    REWARD_FOR_HOST = 1000
    REWARD_FOR_GUEST = 1000

    def __init__(self, host, guest_phone):
        self.host = host
        self.guest_phone = guest_phone

    def send_invitation(self):
        code = self.host.invitation_code
        url = get_invitation_url(code=self.host.invitation_code, phone=self.guest_phone)
        text1 = 'شما به سامانه وال دعوت شدید!\n'
        text2 = 'لینک دعوت: ' + url + '\n'
        text3 = 'کد دعوت: ' + code
        text = text1 + text3
        from utils.sms import SMS
        SMS(self.guest_phone, text).start()

    def reward(self, guest):
        guest.change_balance(self.REWARD_FOR_GUEST)
        self.host.change_balance(self.REWARD_FOR_HOST)


class Image(models.Model):
    image = models.ImageField()

class Message(models.Model):
    sender = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='output_message')
    receiver = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name='input_message')
    text = models.CharField('متن', max_length=1000)