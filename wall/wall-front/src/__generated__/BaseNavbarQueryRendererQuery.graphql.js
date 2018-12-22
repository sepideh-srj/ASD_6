/**
 * @flow
 * @relayHash bb10cc99673f6ae60a23a4d6a314f2fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BaseNavbar_logged$ref = any;
export type BaseNavbarQueryRendererQueryVariables = {||};
export type BaseNavbarQueryRendererQueryResponse = {|
  +me: ?{|
    +$fragmentRefs: BaseNavbar_logged$ref
  |}
|};
export type BaseNavbarQueryRendererQuery = {|
  variables: BaseNavbarQueryRendererQueryVariables,
  response: BaseNavbarQueryRendererQueryResponse,
|};
*/


/*
query BaseNavbarQueryRendererQuery {
  me {
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
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "BaseNavbarQueryRendererQuery",
  "id": null,
  "text": "query BaseNavbarQueryRendererQuery {\n  me {\n    ...BaseNavbar_logged\n    id\n  }\n}\n\nfragment BaseNavbar_logged on UserType {\n  firstName\n  id\n  lastName\n  phone\n  balance\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BaseNavbarQueryRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BaseNavbar_logged",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BaseNavbarQueryRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "phone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "balance",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '475925deb67040f8f678f1e25e5f94b4';
module.exports = node;
