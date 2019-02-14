/**
 * @flow
 * @relayHash 08603513130bf33c65ab854cc8ec2605
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type BaseNavbarQueryRendererQueryResponse = {|
  +me: ?{|
    +invitationCode: string;
  |};
|};
*/


/*
query BaseNavbarQueryRendererQuery {
  me {
    invitationCode
    ...BaseNavbar_logged
    id
  }
}

fragment BaseNavbar_logged on UserType {
  firstName
  id
  lastName
  phone
  balance
  activated
  addresses
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BaseNavbarQueryRendererQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UserType",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "invitationCode",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "BaseNavbar_logged",
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
  "name": "BaseNavbarQueryRendererQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "BaseNavbarQueryRendererQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UserType",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "invitationCode",
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
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
            "name": "balance",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "activated",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "addresses",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query BaseNavbarQueryRendererQuery {\n  me {\n    invitationCode\n    ...BaseNavbar_logged\n    id\n  }\n}\n\nfragment BaseNavbar_logged on UserType {\n  firstName\n  id\n  lastName\n  phone\n  balance\n  activated\n  addresses\n}\n"
};

module.exports = batch;
