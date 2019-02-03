import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType

from accounts.models import User, Message
from products.schema import ProductType
from products.models import Product
from accounts.mutations.authentication_mutations import UserSignUp, UserLogin, UserLogout, \
    ResendCodeMutation, ActivateAccountMutation, ResendPasswordMutation
from accounts.mutations.profile_mutations import EditProfileMutation, AddBalanceMutation, BuyProductMutation, AddAddressMutation, SendMessageMutation


class UserType(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (relay.Node,)
        only_fields = (
            'id', 'first_name', 'last_name', 'selling_products', 'bought_products',
            'balance', 'phone', 'activated', 'password', 'addresses')

    addresses = graphene.List(graphene.String)
    selling_products = graphene.List(ProductType)
    bought_products = graphene.List(ProductType)


    @staticmethod
    def resolve_addresses(root, info):
        return root.get_addresses()

    @staticmethod
    def resolve_bought_products(root, info):
        products = Product.objects.filter(buyer__id=root.id)
        return products

    @staticmethod
    def resolve_selling_products(root, info):
        products = Product.objects.filter(seller__id=root.id)
        return products

class MessageType(DjangoObjectType):
    class Meta:
        model = Message
        interfaces = (relay.Node,)
        only_fields = ('id', 'text', 'sender', 'receiver')


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
    resend_code = ResendCodeMutation.Field()
    resend_password = ResendPasswordMutation.Field()
    activate_account = ActivateAccountMutation.Field()
    add_balance = AddBalanceMutation.Field()
    buy_product = BuyProductMutation.Field()
    add_address = AddAddressMutation.Field()
    send_message = SendMessageMutation.Field()