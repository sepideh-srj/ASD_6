import graphene
from django.core.exceptions import ValidationError
from utils.validators import PhoneRegex
from accounts.models import Invitation, User
from utils.mutation import SafeClientIDMutation
from utils.fields import normalize_phone

class Invite(SafeClientIDMutation):
    login_required = True

    class Input:
        phone = graphene.String(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        phone = normalize_phone(kwargs.get('phone'))
        try:
            PhoneRegex(phone)
        except ValidationError:
            return cls.error(phone=['شماره نامعتبر است.'])
        if User.objects.filter(phone=phone).exists():
            return cls.error(phone=['کاربری با این شماره عضو پارما است.'])
        invitation = Invitation(user, phone)
        invitation.send_invitation()
        return cls()
