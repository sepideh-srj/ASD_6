import django_filters
import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType

from products.models import Product, Comment, Auction
from products.mutations.product_mutations import ProductCreate, ProductRemoveMutation, AddCommentMutation, AddAuctionMutation, SuggestPriceMutation
from accounts.models import User

class UserType1(graphene.ObjectType):
    # class Meta:
    #     model = User
    #     interfaces = (relay.Node,)
    #     only_fields = (
    #         'id', 'first_name', 'last_name',
    #         'balance', 'phone')

    id1=graphene.String()
    first_name=graphene.String()
    last_name=graphene.String()
    balance=graphene.Int()
    phone=graphene.String()


class CategoryType(graphene.Enum):
    DIGITAL_GOODS = 'DIGITAL_GOODS'
    PERSONAL_APPLIANCE = 'PERSONAL_APPLIANCE'
    VEHICLES = 'VEHICLES'
    APPAREL = 'APPAREL'
    HOME_AND_KITCHEN = 'HOME_AND_KITCHEN'
    BOOK_AND_MEDIA = 'BOOK_AND_MEDIA'
    SPORT_ENTERTAINMENT = 'SPORT_ENTERTAINMENT'

 
class SubCategoryType(graphene.Enum):
    MOBILE_PHONE = 'MOBILE_PHONE'
    MOBILE_ACCESSORIES = 'MOBILE_ACCESSORIES'
    CAMERA = 'CAMERA'
    CAMERA_ACCESSORIES = 'CAMERA_ACCESSORIES'
    LAPTOP = 'LAPTOP'
    LAPTOP_ACCESSORIES = 'LAPTOP_ACCESSORIES'
    COMPUTER_PARTS = 'COMPUTER_PARTS'
    OFFICE_MACHINES = 'OFFICE_MACHINES'
    TABLET = 'TABLET'
    BEAUTY = 'BEAUTY'
    HAIR_CLIPPER = 'HAIR_CLIPPER'
    ELECTRICAL_PERSONAL_CARE = 'ELECTRICAL_PERSONAL_CARE'
    SUNGLASSES = 'SUNGLASSES'
    PERFUME_ALL = 'PERFUME_ALL'
    JEWELERY = 'JEWELERY'
    HEALTH_CARE = 'HEALTH_CARE'
    CARS = 'CARS'
    CAR_ACCESSORY_PARTS = 'CAR_ACCESSORY_PARTS'
    CONSUMABLE_PARTS = 'CONSUMABLE_PARTS'
    MOTORBIKE = 'MOTORBIKE'
    POWER_TOOLS = 'POWER_TOOLS'
    MEN_APPAREL = 'MEN_APPAREL'
    WOMEN_APPAREL = 'WOMEN_APPAREL'
    WATCH_CLOCK = 'WATCH_CLOCK'
    SPORTS_WEAR = 'SPORTS_WEAR'
    KIS_APPAREL = 'KIS_APPAREL'
    PERSONAL_APPLIANCE_ACCESSORY = 'PERSONAL_APPLIANCE_ACCESSORY'
    SPORT_SHOES = 'SPORT_SHOES'
    VIDEO_AUDIO = 'VIDEO_AUDIO'
    HOME_APPLIANCE = 'HOME_APPLIANCE'
    SERVING = 'SERVING'
    LIGHTING = 'LIGHTING'
    DECORATIVE = 'DECORATIVE'
    PUBLICATION = 'PUBLICATION'
    TRAINING_PACK = 'TRAINING_PACK'
    SOFTWARE = 'SOFTWARE'
    STATIONERY = 'STATIONERY'
    MUSICAL_INSTRUMENTS = 'MUSICAL_INSTRUMENTS'
    HANDICRAFT = 'HANDICRAFT'
    SPORT = 'SPORT'
    SPORT_WEAR = 'SPORT_WEAR'
    BICYCLE = 'BICYCLE'
    BICYCLE_ACCESSORIES = 'BICYCLE_ACCESSORIES'
    HIKING_AND_CAMPING = 'HIKING_AND_CAMPING'
    TRAVELING_EQUIPMENT = 'TRAVELING_EQUIPMENT'


class CommentType(DjangoObjectType):
    class Meta:
        model = Comment
        interfaces = (relay.Node,)
        only_fields = ('id', 'text', 'product', 'author')

class PriceSuggestionType(graphene.ObjectType):
    user = graphene.Field(UserType1, id=graphene.String())
    price = graphene.Int()

class AuctionType(DjangoObjectType):
    class Meta:
        model = Auction
        interfaces = (relay.Node,)
        only_fields = ('id', 'base_price', 'deadline', 'prices')
    
    # prices = graphene.List(PriceSuggestionType)
    # prices = graphene.List(PriceSuggestionType)
    
    # id = graphene.ID()
    # @staticmethod
    # def resolve_id(root, info):
    #     return root.id
    
    # @staticmethod
    # def resolve_prices(root, info):
        # prices = root.get_prices()
        # res = []
        # for price in prices:
        #     user=User.objects.get(phone=price['phone'])
        #     user1=UserType1(id1=user.id, first_name=user.first_name, last_name=user.last_name, balance=user.balance, phone=price['phone'])
        #     res += [PriceSuggestionType(price=price['price'], user=user1)]
        # print(prices,res)
        # return prices


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        interfaces = (relay.Node,)
        only_fields = (
            'id', 'title', 'address', 'description', 'prod_year', 'price', 'category', 'sub_category', 'image',
            'seller', 'buyer', 'comments', 'auction')

    category = graphene.NonNull(CategoryType)
    sub_category = graphene.NonNull(SubCategoryType)
    image = graphene.String()
    comments = graphene.List(CommentType)
    auction = graphene.Field(AuctionType, id=graphene.String())

    @staticmethod
    def resolve_auction(root, info):
        auction = Auction.objects.filter(product__id=root.id)
        if not auction:
            return None
        return auction[0]

    @staticmethod
    def resolve_image(root, info):
        image = root.image
        if not image:
            return None
        return image.image.url

    @staticmethod
    def resolve_comments(root, info):
        comments = Comment.objects.filter(product__id=root.id)
        return comments

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
    sub_category_in = django_filters.Filter(method='filter_sub_category_in', name='sub_category', lookup_expr='in')
    title = django_filters.Filter(lookup_expr='exact', name='title')
    title_contains = django_filters.Filter(lookup_expr='icontains', name='title')
    description = django_filters.Filter(lookup_expr='exact', name='description')
    description_contains = django_filters.Filter(lookup_expr='icontains', name='description')

    def filter_category_in(self, queryset, name, value):
        return queryset.filter(category__in=value)

    def filter_sub_category_in(self, queryset, name, value):
        return queryset.filter(sub_category__in=value)

    def filter_seller(self, queryset, name, value):
        value = relay.Node.get_node_from_global_id(self.info, value)
        return queryset.filter(**{name: value})


class ProductConnection(relay.Connection):
    class Meta:
        node = ProductType


class ProductsQueryArguments(graphene.InputObjectType):
    category_in = graphene.List(CategoryType)
    sub_category_in = graphene.List(SubCategoryType)
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
    add_comment = AddCommentMutation.Field()
    add_auction = AddAuctionMutation.Field()
    suggest_price = SuggestPriceMutation.Field()