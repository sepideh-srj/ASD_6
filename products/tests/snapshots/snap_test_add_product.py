# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['RemoveProductTest::test_remove 1'] = {
    'productRemove': {
        'errors': {
            'product': None,
            'nonFieldErrors': [
                'شما باید وارد شده باشید.'
            ]
        },
        'ok': False
    }
}

snapshots['RemoveProductTest::test_remove 2'] = {
    'productRemove': {
        'errors': None,
        'ok': True
    }
}

snapshots['RemoveProductTest::test_remove 3'] = {
    'productRemove': {
        'errors': {
            'product': None,
            'nonFieldErrors': [
                'شما باید صاحب محصول باشید.'
            ]
        },
        'ok': False
    }
}