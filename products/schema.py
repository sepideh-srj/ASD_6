import django_filters
import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType

from products.models import Product
from products.mutations.product_mutations import ProductCreate, ProductRemoveMutation


class CategoryType(graphene.Enum):
    DIGITAL_GOODS = 'DIGITAL_GOODS'
    PROPERTY = 'PROPERTY'
    VEHICLE = 'VEHICLE'
    BEAUTY = 'BEAUTY'
    CLOTHING = 'CLOTHING'
    HOME_KITCHEN = 'HOME_KITCHEN'
    BOOK_MEDIA = 'BOOK_MEDIA'
    ENTERTAINMENT = 'ENTERTAINMENT'
    SPORT = 'SPORT'
    OTHERS = 'OTHERS'

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        interfaces = (relay.Node,)
        only_fields = ('id', 'title', 'address', 'description', 'prod_year', 'price', 'category', 'image', 'seller', 'buyer')

    category = graphene.NonNull(CategoryType)
    image = graphene.String()

    @staticmethod
    def resolve_image(root, info):
        image = root.image
        if not image:
            return None
        return image.image.url


class ProductFilterSet(django_filters.FilterSet):
    def __init__(self, info, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.info = info

    class Meta:
        model = Product
        fields = []

    seller = django_filters.Filter(method='filter_seller')
    prod_year_lte = django_filters.Filter(lookup_expr='lte', name='prod_year')
    prod_year_gte = django_filters.Filter(lookup_expr='gte', name='prod_year')
    prod_year = django_filters.Filter(lookup_expr='exact', name='prod_year')
    price_lte = django_filters.Filter(lookup_expr='lte', name='price')
    price_gte = django_filters.Filter(lookup_expr='gte', name='price')
    price = django_filters.Filter(lookup_expr='exact', name='price')
    category_in = django_filters.Filter(method='filter_category_in', name='category', lookup_expr='in')
    title = django_filters.Filter(lookup_expr='exact', name='title')
    title_contains = django_filters.Filter(lookup_expr='icontains', name='title')
    description = django_filters.Filter(lookup_expr='exact', name='description')
    description_contains = django_filters.Filter(lookup_expr='icontains', name='description')

    def filter_category_in(self, queryset, name, value):
        return queryset.filter(category__in=value)

    def filter_seller(self, queryset, name, value):
        value = relay.Node.get_node_from_global_id(self.info, value)
        return queryset.filter(**{name: value})


class ProductConnection(relay.Connection):
    class Meta:
        node = ProductType


class ProductsQueryArguments(graphene.InputObjectType):
    category_in = graphene.List(CategoryType)
    seller = graphene.ID()
    buyer = graphene.ID()
    prod_year_lte = graphene.Int()
    prod_year_gte = graphene.Int()
    prod_year = graphene.Int()
    price_lte = graphene.Int()
    price_gte = graphene.Int()
    price = graphene.Int()
    title = graphene.String()
    title_contains = graphene.String()
    description = graphene.String()
    description_contains = graphene.String()


class ProductsQuery(graphene.ObjectType):
    products = relay.ConnectionField(ProductConnection, args={
        'filters': graphene.Argument(ProductsQueryArguments),
    })
    product = graphene.Field(ProductType, args={'id': graphene.Argument(graphene.String, required=True)})

    @staticmethod
    def resolve_products(root, info, **kwargs):
        return ProductFilterSet(info, kwargs.get('filters', {}), queryset=Product.objects.visible).qs

    @staticmethod
    def resolve_product(root, info, **kwargs):
        return relay.Node.get_node_from_global_id(info, kwargs.get('id'), ProductType)


class ProductMutation(graphene.ObjectType):
    product_create = ProductCreate.Field()
    product_remove = ProductRemoveMutation.Field()
