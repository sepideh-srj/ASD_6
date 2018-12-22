/**
 * @flow
 * @relayHash 871db88f87eff5051debd344017a7ff4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProfileQueryVariables = {||};
export type EditProfileQueryResponse = {|
  +me: ?{|
    +firstName: string,
    +lastName: string,
    +phone: ?string,
    +balance: number,
  |}
|};
export type EditProfileQuery = {|
  variables: EditProfileQueryVariables,
  response: EditProfileQueryResponse,
|};
*/


/*
query EditProfileQuery {
  me {
    firstName
    lastName
    phone
    balance
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phone",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "balance",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EditProfileQuery",
  "id": null,
  "text": "query EditProfileQuery {\n  me {\n    firstName\n    lastName\n    phone\n    balance\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditProfileQuery",
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
          v0,
          v1,
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProfileQuery",
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
          v0,
          v1,
          v2,
          v3,
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
(node/*: any*/).hash = 'cde11a324c3d5a00d9f66e783a44e5d4';
module.exports = node;
