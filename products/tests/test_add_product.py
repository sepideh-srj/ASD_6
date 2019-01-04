from django.urls.base import reverse
from graphene import relay

from accounts.models import User
from products.models import Product
from utils.testing import ProductRequiredTest


class AddProductTest(ProductRequiredTest):
    def upload_image(self):
        file_name = 'utils/tests/The_silmarillion.jpg'
        with open(file_name, 'rb') as fp:
            data = {'file': fp}
            return self.client.post(reverse('upload'), data=data)

    def upload_and_get_url(self):
        response = self.upload_image()
        self.assertContains(response, 'url')
        return response.json()['url']

    def add_product(self, login=True, **kwargs):
        if login:
            self.client.login(**self.credentials)
        return self.client.post('/g/', {
            'query':
                '''
                    mutation{
                        productCreate(input: %s){
                            ok
                            errors{
                                nonFieldErrors
                                title
                                address
                                description
                                prodYear
                                category
                                image
                            }
                        }
                    }
                ''' % self.parse_arguments(kwargs)
        }).json()['data']

    def test_add_product(self):
        kwargs = {
            'title': '"foo"',
            'address': '"address name"',
            'prodYear': 1992,
            'category': 'FANTASY',
            'description': '"description"'
        }
        r = self.add_product(login=False, **kwargs)
        self.assertDictEqual(r, {'productCreate': {'errors': {
            'nonFieldErrors': ['شما باید وارد شده باشید.'],
            'title': None,
            'address': None,
            'description': None,
            'prodYear': None,
            'category': None,
            'image': None,
        }, 'ok': False}})
        r = self.add_product(**kwargs)
        self.assertDictEqual(r, {'productCreate': {'errors': None, 'ok': True}})

        url = self.upload_and_get_url()
        kwargs['image'] = '"{}"'.format(url)
        r = self.add_product(**kwargs)
        self.assertDictEqual(r, {'productCreate': {'errors': None, 'ok': True}})
        product = Product.objects.last()
        self.assertIsNotNone(product.image)


class RemoveProductTest(ProductRequiredTest):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user2 = User.objects.create(username='second_user', balance=Product.PRICE)
        cls.product2 = Product.objects.create(title='title', address='address', description='Description',
                                        category=Product.CATEGORY_CHOICES[0][0], prod_year=1997,
                                        owner=cls.user2)

    def remove_product(self, login=True, **kwargs):
        if login:
            self.client.login(**self.credentials)
        else:
            self.client.logout()
        return self.client.post('/g/', {
            'query':
                '''
                    mutation{
                        productRemove(input: %s){
                            ok
                            errors{
                                nonFieldErrors
                                product
                            }
                        }
                    }
                ''' % self.parse_arguments(kwargs)
        }).json()['data']

    def test_remove(self):
        r = self.remove_product(login=False,
                             product=self.quot(relay.Node.to_global_id('ProductType', self.product.id)))
        self.assertMatchSnapshot(r)  # authentication error
        r = self.remove_product(product=self.quot(relay.Node.to_global_id('ProductType', self.product.id)))
        self.assertMatchSnapshot(r)  # ok
        r = self.remove_product(product=self.quot(relay.Node.to_global_id('ProductType', self.product2.id)))
        self.assertMatchSnapshot(r)  # owner error