/**
 * @flow
 * @relayHash 14dbe2a0f6a115aba3894da9ed35a583
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PublicProfileRendererQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query PublicProfileRendererQuery(
  $id: String!
) {
  user(id: $id) {
    ...PublicProfile_user
    id
  }
}

fragment PublicProfile_user on UserType {
  id
  phone
  firstName
  lastName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PublicProfileRendererQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "String!"
          }
        ],
        "concreteType": "UserType",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PublicProfile_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PublicProfileRendererQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PublicProfileRendererQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "String!"
          }
        ],
        "concreteType": "UserType",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "phone",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "firstName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query PublicProfileRendererQuery(\n  $id: String!\n) {\n  user(id: $id) {\n    ...PublicProfile_user\n    id\n  }\n}\n\nfragment PublicProfile_user on UserType {\n  id\n  phone\n  firstName\n  lastName\n}\n"
};

module.exports = batch;
