from django.db.models.fields import CharField


def normalize_phone(value):
    if value.startswith('09'):
        return '+98{}'.format(value[1:])
    return value


class PhoneField(CharField):
    def get_prep_value(self, value):
        value = super().get_prep_value(value)
        if isinstance(value, str):
            return normalize_phone(value)
        return value


class NullCharField(CharField):
    def to_python(self, value):
        value = super().to_python(value)
        if value == '':
            return None
        return value

