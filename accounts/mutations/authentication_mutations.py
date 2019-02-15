import graphene
from django.contrib.auth import login, logout
from django.core.exceptions import ValidationError

from accounts.models import User
from utils.mutation import ClientIDMutationWithErrors, SafeClientIDMutation


class UserLogin(ClientIDMutationWithErrors):
    class Input:
        phone = graphene.String(required=True)
        password = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        try:
            user = User.objects.get(**kwargs)
        except User.DoesNotExist:
            return cls.error(['شماره تلفن یا رمز اشتباه است.'])
        login(info.context, user)
        return cls(user=user)


class ResendCodeMutation(SafeClientIDMutation):
    class Input:
        phone = graphene.String(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = User.objects.get(**kwargs)
        user.generate_code()
        user.send_code_by_sms()
        user.save()
        return cls()

class ResendPasswordMutation(SafeClientIDMutation):
    class Input:
        phone = graphene.String(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = User.objects.get(**kwargs)
        user.send_password_by_sms()
        return cls()

class ActivateAccountMutation(SafeClientIDMutation):
    class Input:
        code = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        if user.code == kwargs.get('code'):
            setattr(user, 'activated', True)
            user.save()
            return cls(user=user)
        return cls.error(['کد وارد شده اشتباه است!'])
        

class UserLogout(ClientIDMutationWithErrors):
    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        logout(info.context)
        return cls()


class UserSignUp(SafeClientIDMutation):
    class Input:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        phone = graphene.String(required=True)
        password = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        first_name = kwargs.get('first_name')
        last_name = kwargs.get('last_name')
        phone = kwargs.get('phone')
        password = kwargs.get('password')
        user = User(first_name=first_name, last_name=last_name, username=phone, phone=phone, password=password)
        user.generate_code()
        try:
            user.full_clean()
        except ValidationError as e:
            e.error_dict.pop('username', None)
            raise e
        user.send_code_by_sms()
        user.save()
        return cls(user=user)