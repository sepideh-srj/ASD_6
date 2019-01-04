import django_filters
import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType

from products.models import Product
from products.mutations.product_mutations import ProductCreate, ProductHideMutation, ProductRemoveMutation
# from borrow.schema import BorrowRequestFilterSet


class CategoryType(graphene.Enum):
    PROPERTY = 'PROPERTY'
    VEHICLE = 'VEHICLE'
    DIGITAL_GOODS = 'DIGITAL-GOODS'
    BEAUTY = 'BEAUTY'
    CLOTHING = 'CLOTHING'
    HOME_KITCHEN = 'HOME-KITCHEN'
    BOOK_MEDIA = 'BOOK-MEDIA'
    ENTERTAINMENT = 'ENTERTAINMENT'
    SPORT = 'SPORT'
    OTHERS = 'OTHERS'


class ProductStateEnum(graphene.Enum):
    REQUESTED = 'REQUESTED'
    NONE = 'NONE'
    OWNER = 'OWNER'


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        interfaces = (relay.Node,)
        only_fields = (
            'id', 'title', 'city', 'description', 'pro_year', 'category', 'image', 'owner', 'borrow_requests')

    genre = graphene.NonNull(CategoryType)
    image = graphene.String()
    borrow_requests = relay.ConnectionField('borrow.schema.BorrowRequestConnection', args={
        'product': graphene.ID().Argument()
    })
    state = graphene.NonNull(ProductStateEnum)

    def resolve_state(self, info, **kwargs):
        user = info.context.user
        if user.is_anonymous:
            return 'NONE'
        if self.owner == user:
            return 'OWNER'
        if self.borrow_requests.pending.filter(borrower_id=user.pk).exists():
            return 'REQUESTED'
        return 'NONE'

    # @staticmethod
    # def resolve_borrow_requests(root, info, **kwargs):
    #     user = info.context.user
    #     if user != root.owner:
    #         return root.borrow_requests.none()
    #     return BorrowRequestFilterSet(info, kwargs, queryset=root.borrow_requests.all()).qs

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

    owner = django_filters.Filter(method='filter_owner')
    pro_year_lte = django_filters.Filter(lookup_expr='lte', name='pro_year')
    pro_year_gte = django_filters.Filter(lookup_expr='gte', name='pro_year')
    pro_year = django_filters.Filter(lookup_expr='exact', name='pro_year')
    category_in = django_filters.Filter(method='filter_genre_in', name='category', lookup_expr='in')
    title = django_filters.Filter(lookup_expr='exact', name='title')
    title_contains = django_filters.Filter(lookup_expr='icontains', name='title')
    description = django_filters.Filter(lookup_expr='exact', name='description')
    description_contains = django_filters.Filter(lookup_expr='icontains', name='description')

    def filter_category_in(self, queryset, name, value):
        return queryset.filter(category_in=value)

    def filter_owner(self, queryset, name, value):
        value = relay.Node.get_node_from_global_id(self.info, value)
        return queryset.filter(**{name: value})


class ProductConnection(relay.Connection):
    class Meta:
        node = ProductType


class ProductsQueryArguments(graphene.InputObjectType):
    category_in = graphene.List(CategoryType)
    owner = graphene.ID()
    pro_year_lte = graphene.Int()
    pro_year_gte = graphene.Int()
    pro_year = graphene.Int()
    title = graphene.String()
    title_contains = graphene.String()
    description = graphene.String()
    description_contains = graphene.String()


class BooksQuery(graphene.ObjectType):
    books = relay.ConnectionField(ProductConnection, args={
        'filters': graphene.Argument(ProductsQueryArguments),
    })
    book = graphene.Field(ProductType, args={'id': graphene.Argument(graphene.String, required=True)})

    @staticmethod
    def resolve_books(root, info, **kwargs):
        return ProductFilterSet(info, kwargs.get('filters', {}), queryset=Product.objects.visible).qs

    @staticmethod
    def resolve_book(root, info, **kwargs):
        return relay.Node.get_node_from_global_id(info, kwargs.get('id'), ProductType)


class ProductMutation(graphene.ObjectType):
    product_create = ProductCreate.Field()
    product_hide = ProductHideMutation.Field()
    product_remove = ProductRemoveMutation.Field()
