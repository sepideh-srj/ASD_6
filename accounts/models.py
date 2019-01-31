from django.contrib.auth.models import AbstractUser, UserManager
from django.core.exceptions import ValidationError
from django.core.mail.message import EmailMultiAlternatives
from django.db import models
from django.db import transaction
from django.db.utils import OperationalError, ProgrammingError
from django.template.loader import render_to_string
from django.utils.crypto import get_random_string

from utils.fields import PhoneField, NullEmailField
from utils.validators import PhoneRegex

class User(AbstractUser):
    CODE_LENGTH = 8

    balance = models.PositiveIntegerField('اعتبار', default=0)
    phone = PhoneField('شماره تلفن', null=True, max_length=13, validators=[PhoneRegex], unique=True)
    code = models.CharField(max_length=CODE_LENGTH, null=True)
    password = models.CharField(max_length=30)
    activated = models.BooleanField(default=False)
    objects = UserManager()

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
        with transaction.atomic():
            self.change_balance(-product.price)
            product.seller.change_balance(product.price)
            product.buyer = self
            product.save()

class Image(models.Model):
    image = models.ImageField()
