# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['ProductQueryTest::test_query_snapshots 1'] = {
    'data': {
        'products': {
            'edges': [
                {
                    'node': {
                        'description': 'Description',
                        'address': 'address',
                        'category': 'DIGITAL_GOODS',
                        'id': 'Qm9va1R5cGU6MQ==',
                        'image': None,
                        'owner': {
                            'phone': '+989123456789'
                        },
                        'prodYear': 1997,
                        'title': 'title'
                    }
                },
                {
                    'node': {
                        'description': 'Description',
                        'address': 'name',
                        'category': 'DIGITAL_GOODS',
                        'id': 'Qm9va1R5cGU6Mg==',
                        'image': None,
                        'owner': {
                            'phone': '+989123456789'
                        },
                        'prodYear': 2000,
                        'title': 'Random'
                    }
                }
            ]
        }
    }
}

snapshots['ProductQueryTest::test_query_snapshots 2'] = {
    'data': {
        'products': {
            'edges': [
                {
                    'node': {
                        'description': 'Description',
                        'address': 'name',
                        'category': 'DIGITAL_GOODS',
                        'id': 'Qm9va1R5cGU6Mg==',
                        'image': None,
                        'owner': {
                            'phone': '+989123456789'
                        },
                        'prodYear': 2000,
                        'title': 'Random'
                    }
                }
            ]
        }
    }
}
