import graphene
from graphql_relay.node.node import from_global_id

from utils.mutation import SafeClientIDMutation
from products.models import Product

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
            if(k == "password" and v == ""):
                continue
            setattr(user, k, v)
        user.full_clean()
        user.save()
        return cls(user=user)

class AddBalanceMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        pass

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        setattr(user, 'balance', getattr(user, 'balance') + 10)
        user.full_clean()
        user.save()
        return cls(user=user)

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