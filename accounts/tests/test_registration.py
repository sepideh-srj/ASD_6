from accounts.models import User
from utils.testing import UserRequiredTest


class RegistrationTest(UserRequiredTest):
    def sign_in(self, **kwargs):
        return self.client.post('/g/', {
            'query':
                '''
                    mutation{
                        userLogin(input: %s){
                            ok
                            errors{
                                nonFieldErrors
                            }
                        }
                    }
                ''' % self.parse_arguments(kwargs)
        })

    def sign_up(self, **kwargs):
        return self.client.post('/g/', {
            'query':
                '''
                    mutation{
                        userSignUp(input: %s){
                            ok
                            errors{
                                phone
                                nonFieldErrors
                            }
                        }
                    }
                ''' % self.parse_arguments(kwargs)
        })

    def sign_out(self, **kwargs):
        return self.client.post('/g/', {
            'query':
                '''
                mutation{
                    userLogout(input:{}){
                        ok
                    }
                }
                '''
        })

    def me(self):
        return self.client.post('/g/', {
            'query':
                '''
                {
                    me {
                        phone
                    }
                }
                '''
        })

    def test_valid_login(self):
        r = self.me().json()
        self.assertMatchSnapshot(r)  # None

        kwargs = {
            'phone': '"{}"'.format(self.phone),
            'code': '"{}"'.format(self.code),
        }
        r = self.sign_in(**kwargs).json()
        self.assertMatchSnapshot(r)  # ok
        r = self.me().json()
        self.assertMatchSnapshot(r)  # username

    def test_invalid_login(self):
        r = self.me().json()
        self.assertMatchSnapshot(r)  # None

        kwargs = {
            'phone': '"wrong username"',
            'code': '"{}"'.format(self.code),
        }
        r = self.sign_in(**kwargs).json()
        self.assertMatchSnapshot(r)  # login error

        kwargs['code'] = '"wrong password"'
        r = self.sign_in(**kwargs).json()
        self.assertMatchSnapshot(r)  # login error

        r = self.me().json()
        self.assertMatchSnapshot(r)  # None

    def test_logout(self):
        kwargs = {
            'phone': '"{}"'.format(self.phone),
            'code': '"{}"'.format(self.code),
        }
        r = self.sign_in(**kwargs).json()
        self.assertMatchSnapshot(r)  # ok
        r = self.me().json()
        self.assertMatchSnapshot(r)  # username

        r = self.sign_out().json()
        self.assertMatchSnapshot(r)  # ok

        r = self.me().json()
        self.assertMatchSnapshot(r)  # None

    def test_valid_sign_up(self):
        kwargs = {
            'phone': '"09112245932"',
        }
        r = self.sign_up(**kwargs).json()
        self.assertMatchSnapshot(r)  # ok
        self.assertEqual(User.objects.count(), 2)
        self.test_valid_login()

    def test_invalid_sign_up(self):
        self.assertEqual(User.objects.count(), 1)
        r = self.sign_up(phone=self.quot(self.phone)).json()
        self.assertMatchSnapshot(r)  # errors
        self.assertEqual(User.objects.count(), 1)

        r = self.sign_up(phone='"123123"').json()
        self.assertMatchSnapshot(r)  # errors
        self.assertEqual(User.objects.count(), 1)
