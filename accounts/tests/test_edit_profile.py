from utils.testing import UserRequiredTest


class EditProfileTest(UserRequiredTest):
    def edit_profile(self, **kwargs):
        return self.client.post('/g/', data={
            'query': '''
                    mutation{
                        editProfile(input: %s){
                            ok
                            errors{
                                nonFieldErrors
                            }
                        }
                    }
            ''' % self.parse_arguments(kwargs)
        }).json()['data']

    def test_edit_profile(self):
        self.client.login(**self.credentials)
        r = self.edit_profile(firstName='"foo"')
        r = self.edit_profile(firstName='"foo"', lastName='"last"')
        self.assertMatchSnapshot(r)  # ok
        self.user.refresh_from_db()
        self.assertEqual(self.user.first_name, 'foo')
        self.assertEqual(self.user.last_name, 'last')
        self.edit_profile(firstName='"bar"',)
        self.user.refresh_from_db()
        self.assertEqual(self.user.first_name, 'bar')
        self.assertEqual(self.user.last_name, 'last')
