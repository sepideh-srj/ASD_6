from utils.testing import UserRequiredTest


class AccountsSnapshotTest(UserRequiredTest):
    def test_me(self):
        response = self.gql_client.execute(
            '''
            {
                me{
                    id
                    phone
                    firstName
                    lastName
                }
            }
            ''', context_value=self.get_request(self.user)
        )
        self.assertMatchSnapshot(response)
