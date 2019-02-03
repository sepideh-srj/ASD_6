import graphene
from django.core.exceptions import ValidationError
from graphene import relay

from accounts.models import Image
from products.models import Product, Comment
from utils.mutation import SafeClientIDMutation


class ProductCreate(SafeClientIDMutation):
    login_required = True

    class Input:
        title = graphene.String(required=True)
        address = graphene.String(required=True)
        description = graphene.String(required=True)
        prod_year = graphene.Int()
        price = graphene.Int()
        category = graphene.Field('products.schema.CategoryType', required=True)
        sub_category = graphene.Field('products.schema.SubCategoryType', required=True)
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
        product.seller = user
        product.full_clean()
        product.save()
        return cls(product=product)


class ProductRemoveMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        product = graphene.ID(required=True)

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        product = relay.Node.get_node_from_global_id(info, kwargs.get('product'))
        if product.seller != user:
            raise ValidationError('شما باید صاحب محصول باشید.')
        product.delete()
        return cls()


class AddCommentMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        text = graphene.String(required=True)
        product = graphene.ID(required=True)

    comment = graphene.Field('products.schema.CommentType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        product = relay.Node.get_node_from_global_id(info, kwargs.get('product'))
        comment = Comment(text=kwargs.get('text'), author=user, product=product)
        comment.full_clean()
        comment.save()
        return cls(comment=comment)
