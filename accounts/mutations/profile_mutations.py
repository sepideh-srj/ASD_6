import graphene

from utils.mutation import SafeClientIDMutation


class EditProfileMutation(SafeClientIDMutation):
    login_required = True

    class Input:
        first_name = graphene.String()
        last_name = graphene.String()

    user = graphene.Field('accounts.schema.UserType')

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        user = info.context.user
        for k, v in kwargs.items():
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
