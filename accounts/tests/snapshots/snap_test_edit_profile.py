# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['EditProfileTest::test_edit_profile 2'] = {
    'editProfile': {
        'errors': None,
        'ok': True
    }
}

snapshots['EditProfileTest::test_edit_profile 1'] = {
    'editProfile': {
        'errors': {
            'nonFieldErrors': None
        },
        'ok': False
    }
}
