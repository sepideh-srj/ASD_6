# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['AccountsSnapshotTest::test_me 1'] = {
    'data': {
        'me': {
            'firstName': 'first_name',
            'id': 'VXNlclR5cGU6MQ==',
            'lastName': 'last_name',
            'phone': '+989123456789'
        }
    }
}
