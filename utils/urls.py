from django.conf import settings


def get_invitation_url(code, phone):
    return '{site_url}/{invitation_url}?invitation_code={code}&phone={phone}'.format(
        site_url=settings.SITE_URL,
        invitation_url='signup/',
        code=code,
        phone=phone
    )
