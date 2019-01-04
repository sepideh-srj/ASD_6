import graphene

from accounts.schema import AccountQuery, AccountMutation
from products.schema import ProductsQuery, ProductMutation


class Query(AccountQuery, ProductsQuery):
    hi = graphene.String()

    def resolve_hi(self, info):
        return 'hello'


class Mutation(AccountMutation, ProductMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
