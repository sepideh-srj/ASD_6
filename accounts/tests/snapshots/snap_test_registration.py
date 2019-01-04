# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['RegistrationTest::test_invalid_login 1'] = {
    'data': {
        'me': None
    }
}

snapshots['RegistrationTest::test_invalid_login 2'] = {
    'data': {
        'userLogin': {
            'errors': {
                'nonFieldErrors': [
                    'شماره تلفن یا رمز اشتباه است.'
                ]
            },
            'ok': False
        }
    }
}

snapshots['RegistrationTest::test_invalid_login 3'] = {
    'data': {
        'userLogin': {
            'errors': {
                'nonFieldErrors': [
                    'شماره تلفن یا رمز اشتباه است.'
                ]
            },
            'ok': False
        }
    }
}

snapshots['RegistrationTest::test_invalid_login 4'] = {
    'data': {
        'me': None
    }
}

snapshots['RegistrationTest::test_valid_login 1'] = {
    'data': {
        'me': None
    }
}

snapshots['RegistrationTest::test_valid_login 2'] = {
    'data': {
        'userLogin': {
            'errors': None,
            'ok': True
        }
    }
}

snapshots['RegistrationTest::test_valid_login 3'] = {
    'data': {
        'me': {
            'phone': '+989123456789'
        }
    }
}

snapshots['RegistrationTest::test_logout 1'] = {
    'data': {
        'userLogin': {
            'errors': None,
            'ok': True
        }
    }
}

snapshots['RegistrationTest::test_logout 2'] = {
    'data': {
        'me': {
            'phone': '+989123456789'
        }
    }
}

snapshots['RegistrationTest::test_logout 3'] = {
    'data': {
        'userLogout': {
            'ok': True
        }
    }
}

snapshots['RegistrationTest::test_logout 4'] = {
    'data': {
        'me': None
    }
}

snapshots['RegistrationTest::test_valid_sign_up 1'] = {
    'data': {
        'userSignUp': {
            'errors': None,
            'ok': True
        }
    }
}

snapshots['RegistrationTest::test_valid_sign_up 2'] = {
    'data': {
        'me': None
    }
}

snapshots['RegistrationTest::test_valid_sign_up 3'] = {
    'data': {
        'userLogin': {
            'errors': None,
            'ok': True
        }
    }
}

snapshots['RegistrationTest::test_valid_sign_up 4'] = {
    'data': {
        'me': {
            'phone': '+989123456789'
        }
    }
}

snapshots['RegistrationTest::test_invalid_sign_up 2'] = {
    'data': {
        'userSignUp': {
            'errors': {
                'nonFieldErrors': None,
                'phone': [
                    'شماره تلفن نامعتبر است.'
                ]
            },
            'ok': False
        }
    }
}

snapshots['RegistrationTest::test_invalid_sign_up 1'] = {
    'data': {
        'userSignUp': {
            'errors': {
                'nonFieldErrors': None,
                'phone': [
                    'کاربر با این شماره تلفن از قبل موجود است.'
                ]
            },
            'ok': False
        }
    }
}
