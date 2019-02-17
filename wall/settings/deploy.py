import dj_database_url
from envparse import env

from wall.settings.base import *

DEBUG = False

ALLOWED_HOSTS = ['fierce-badlands-13595.herokuapp.com']

WSGI_APPLICATION = 'wall.wsgi.application'

DATABASES['default'] = dj_database_url.config()

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

DEFAULT_FILE_STORAGE = 'storages.backends.dropbox.DropBoxStorage'

DROPBOX_OAUTH2_TOKEN = env.str('slkjZh3VnWAAAAAAAAAAMjGKCgnMHENVP-jDx2PPmjI2lshgsA1wguHOrD_-gRXL')

DROPBOX_ROOT_PATH = 'wall'

SITE_URL = 'fierce-badlands-13595.herokuapp.com'
