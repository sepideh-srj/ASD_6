from django.contrib.auth.models import AnonymousUser

from products.models import Product
from utils.testing import ProductRequiredTest


class ProductQueryTest(ProductRequiredTest):
    def test_query_snapshots(self):
        Product.objects.create(address='name', prod_year=2000, description='Description', title='Random',
                            category=Product.CATEGORY_CHOICES[0][0], owner=self.user)
        response = self.gql_client.execute(
            '''
            {
              products{
                edges{
                  node{
                    id
                    title
                    address
                    description
                    prodYear
                    category
                    image
                    owner{
                      phone
                    }
                  }
                }
              }
            }
            ''', context_value=self.get_request(AnonymousUser())
        )
        self.assertMatchSnapshot(response)

        response = self.gql_client.execute(
            '''
            {
              products(filters: {categoryIn: %s, titleContains: "Ran"}){
                edges{
                  node{
                    id
                    title
                    address
                    description
                    prodYear
                    category
                    image
                    owner{
                      phone
                    }
                  }
                }
              }
            }
            ''' % Product.CATEGORY_CHOICES[0][0], context_value=self.get_request(AnonymousUser())
        )
        self.assertMatchSnapshot(response)
