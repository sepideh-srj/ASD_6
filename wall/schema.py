import graphene

from accounts.schema import AccountQuery, AccountMutation


class Query(AccountQuery):
    hi = graphene.String()

    def resolve_hi(self, info):
        return 'hello'


class Mutation(AccountMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
