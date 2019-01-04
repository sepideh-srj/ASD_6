import graphene
from django.core.exceptions import ValidationError
from graphene import relay

from accounts.models import Image
from products.models import Product
from utils.mutation import SafeClientIDMutation


class ProductCreate(SafeClientIDMutation):
    login_required = True

    class Input:
        title = graphene.String(required=True)
        city = graphene.String(required=True)
        description = graphene.String(required=True)
        pro_year = graphene.Int()
        category = graphene.Field('products.schema.CategoryType', required=True)
        image = graphene.String()

    product = graphene.Field('products.schema.ProductType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        image = None
        if kwargs.get('image'):
            image = Image.objects.get(pk=kwargs.get('image'))
        kwargs['image'] = image
        product = Product(**kwargs)
        product.owner = user
        product.full_clean()
        product.save()
        return cls(product=product)


class ProductHideMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        product = graphene.ID(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        product_id = relay.Node.from_global_id(kwargs.get('product'))[1]
        product = Product.objects.get(pk=product_id)
        user.hide(product)
        return cls()


class ProductRemoveMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        product = graphene.ID(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        product = relay.Node.get_node_from_global_id(info, kwargs.get('product'))
        if product.owner != user:
            raise ValidationError('شما باید صاحب محصول باشید.')
        product.delete()
        return cls()
