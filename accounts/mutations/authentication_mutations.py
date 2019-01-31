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


class UserLogout(ClientIDMutationWithErrors):
    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        logout(info.context)
        return cls()


class UserSignUp(SafeClientIDMutation):
    class Input:
        phone = graphene.String(required=True)
        password = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        phone = kwargs.get('phone')
        password = kwargs.get('password')
        user = User(username=phone, phone=phone, password=password)
        # print(password)
        user.generate_code()
        # user.set_password(password)
        try:
            user.full_clean()
        except ValidationError as e:
            e.error_dict.pop('username', None)
            raise e
        user.send_code_by_sms()
        user.save()
        return cls(user=user)