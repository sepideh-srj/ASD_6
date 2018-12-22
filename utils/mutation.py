import re

import graphene
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from graphene import relay


class ClientIDMutationWithErrors(relay.ClientIDMutation):
    class Meta:
        abstract = True

    def __init__(self, *args, **kwargs):
        kwargs['ok'] = kwargs.get('ok', True)
        super().__init__(*args, **kwargs)

    ok = graphene.NonNull(graphene.Boolean)
    error_class = None
    errors = {}

    @classmethod
    def __init_subclass_with_meta__(cls, output=None, input_fields=None,
                                    arguments=None, name=None, **options):
        kwargs = options.pop('field_kwargs', {})
        super().__init_subclass_with_meta__(output, input_fields, arguments, name, **options)
        base_name = re.sub('Error$', '', name or cls.__name__)

        bases = (graphene.ObjectType,)
        fields = {field: graphene.List(graphene.String) for field in cls.Input._meta.fields}
        fields['non_field_errors'] = graphene.List(graphene.String)

        cls.error_class = type('{}Error'.format(base_name), bases, fields)

        cls._meta.fields['errors'] = graphene.Field(cls.error_class)
        cls.field_kwargs = kwargs

    @classmethod
    def error(cls, non_field_errors=None, **kwargs):
        if non_field_errors is not None:
            if isinstance(non_field_errors, str):
                non_field_errors = [non_field_errors]
            kwargs['non_field_errors'] = non_field_errors
        if '__all__' in kwargs:
            errors = kwargs.pop('__all__')
            kwargs['non_field_errors'] = errors + kwargs.get('non_field_errors', [])
        return cls(errors=cls.error_class(**kwargs), ok=False)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        raise NotImplementedError


class SafeClientIDMutation(ClientIDMutationWithErrors):
    login_required = False

    @classmethod
    def safe_mutate(cls, root, info, **kwargs):
        raise NotImplementedError

    @classmethod
    def mutate_and_get_payload(cls, root, info, **kwargs):
        if cls.login_required and info.context.user.is_anonymous:
            return cls.error('شما باید وارد شده باشید.')
        try:
            return cls.safe_mutate(root, info, **kwargs)
        except ValidationError as e:
            if hasattr(e, 'message_dict'):
                return cls.error(**e.message_dict)
            return cls.error(e.message)
        except ObjectDoesNotExist:
            return cls.error('یافت نشد.')
