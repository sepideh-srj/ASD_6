import graphene
from graphql_relay.node.node import from_global_id

from utils.mutation import SafeClientIDMutation
from products.models import Product
from accounts.models import User, Message

from graphene import relay


class EditProfileMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        first_name = graphene.String()
        last_name = graphene.String()
        password = graphene.String()

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        for k, v in kwargs.items():
            if (k == "password" and v == ""):
                continue
            setattr(user, k, v)
        user.full_clean()
        user.save()
        return cls(user=user)


class AddBalanceMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        amount = graphene.Int()

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        setattr(user, 'balance', getattr(user, 'balance') + kwargs.get('amount'))
        user.full_clean()
        user.save()
        return cls(user=user)


class AddAddressMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        address = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = User.objects.get(phone=info.context.user.phone)
        user.add_address(kwargs.get('address'))
        user.full_clean()
        user.save()
        return cls(user=user)


class SendMessageMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        text = graphene.String(required=True)
        receiver = graphene.ID(required=True)

    message = graphene.Field('accounts.schema.MessageType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = User.objects.get(phone=info.context.user.phone)
        receiver = relay.Node.get_node_from_global_id(info, kwargs.get('receiver'))
        message = Message(text=kwargs.get('text'), sender=user, receiver=receiver)
        message.full_clean()
        message.save()
        return cls(message=message)


class BuyProductMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        product_id = graphene.String(required=True)

    user = graphene.Field('accounts.schema.UserType')
    product = graphene.Field('products.schema.ProductType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        product = Product.objects.get(pk=from_global_id(kwargs['product_id'])[1])
        user.buy(product)
        user.full_clean()
        user.save()
        return cls(user=user)
