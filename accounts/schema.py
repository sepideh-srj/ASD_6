import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType

from accounts.models import User
from accounts.mutations.authentication_mutations import UserSignUp, UserLogin, UserLogout, \
    ResendCodeMutation
from accounts.mutations.profile_mutations import EditProfileMutation, AddBalanceMutation


class UserType(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (relay.Node,)
        only_fields = (
            'id', 'first_name', 'last_name',
            'balance', 'phone')


class AccountQuery(graphene.ObjectType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, args={'id': graphene.Argument(graphene.String, required=True)})
    me = graphene.Field(UserType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            return None
        return user

    def resolve_users(self, info):
        return User.objects.all()

    @staticmethod
    def resolve_user(root, info, **kwargs):
        return relay.Node.get_node_from_global_id(info, kwargs.get('id'), UserType)


class AccountMutation(graphene.ObjectType):
    user_login = UserLogin.Field()
    user_logout = UserLogout.Field()
    user_sign_up = UserSignUp.Field()
    edit_profile = EditProfileMutation.Field()
    add_balance = AddBalanceMutation.Field()
    resend_code = ResendCodeMutation.Field()
