/**
 * @flow
 * @relayHash 1ea8f04b136a148700fdd53d0e5ccd36
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PublicProfile_user$ref = any;
export type PublicProfileRendererQueryVariables = {|
  id: string
|};
export type PublicProfileRendererQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: PublicProfile_user$ref
  |}
|};
export type PublicProfileRendererQuery = {|
  variables: PublicProfileRendererQueryVariables,
  response: PublicProfileRendererQueryResponse,
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
  firstName
  lastName
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "String!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PublicProfileRendererQuery",
  "id": null,
  "text": "query PublicProfileRendererQuery(\n  $id: String!\n) {\n  user(id: $id) {\n    ...PublicProfile_user\n    id\n  }\n}\n\nfragment PublicProfile_user on UserType {\n  firstName\n  lastName\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PublicProfileRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PublicProfile_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PublicProfileRendererQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
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
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '213eefd1bca380849deaa46ac61bc696';
module.exports = node;
