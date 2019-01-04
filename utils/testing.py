from unittest import mock

from django.test.client import RequestFactory
from django.utils.translation import activate
from graphene.test import Client
from snapshottest.django import TestCase

from accounts.models import User
from products.models import Product
from wall.schema import schema
from utils.mocks import SMSMock


class BaseTest(TestCase):
    maxDiff = None

    @classmethod
    def do_mocks(cls):
        cls.sms_patch = mock.patch('utils.sms.SMS', SMSMock)
        cls.sms_patch.start()

    @classmethod
    def undo_mocks(cls):
        cls.sms_patch.stop()

    @classmethod
    def setUpTestData(cls):
        cls.do_mocks()
        activate('fa')
        super().setUpTestData()
        cls.gql_client = Client(schema)
        cls.request_factory = RequestFactory()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        cls.undo_mocks()

    def get_request(self, user=None):
        request = self.request_factory.get('/')
        request.user = user
        return request

    @staticmethod
    def parse_arguments(kwargs):
        json = ','.join(['{}: {}'.format(key, value) for key, value in kwargs.items()])
        return '{%s}' % json

    @staticmethod
    def quot(string):
        return '"{}"'.format(string)


class UserRequiredTest(BaseTest):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.phone = '+989123456789'
        cls.username = cls.phone
        cls.code = '12345678'
        cls.credentials = {
            'username': cls.username,
            'password': ''
        }
        cls.first_name = 'first_name'
        cls.last_name = 'last_name'
        cls.user = User(username=cls.username, first_name=cls.first_name, last_name=cls.last_name,
                        phone=cls.phone, code=cls.code)
        cls.user.set_password('')
        cls.user.save()


class ProductRequiredTest(UserRequiredTest):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.product = Product.objects.create(title='title', address='address', description='Description',
                                       category=Product.CATEGORY_CHOICES[0][0], prod_year=1997,
                                       owner=cls.user)
