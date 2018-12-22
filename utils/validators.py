from django.core.validators import RegexValidator

PhoneRegex = RegexValidator('^(\+98|0)9\d{9}$', 'شماره تلفن نامعتبر است.')
