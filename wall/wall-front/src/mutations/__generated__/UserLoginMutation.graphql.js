/**
 * @flow
 * @relayHash 8e18d533305aa3ba019e4c2beb3d5bee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BaseNavbar_logged$ref = any;
export type UserLoginInput = {
  phone: string,
  code: string,
  clientMutationId?: ?string,
};
export type UserLoginMutationVariables = {|
  input: UserLoginInput
|};
export type UserLoginMutationResponse = {|
  +userLogin: ?{|
    +ok: boolean,
    +errors: ?{|
      +nonFieldErrors: ?$ReadOnlyArray<?string>
    |},
    +user: ?{|
      +$fragmentRefs: BaseNavbar_logged$ref
    |},
  |}
|};
export type UserLoginMutation = {|
  variables: UserLoginMutationVariables,
  response: UserLoginMutationResponse,
|};
*/


/*
mutation UserLoginMutation(
  $input: UserLoginInput!
) {
  userLogin(input: $input) {
    ok
    errors {
      nonFieldErrors
    }
    user {
      ...BaseNavbar_logged
      id
    }
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLoginInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UserLoginInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ok",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "errors",
  "storageKey": null,
  "args": null,
  "concreteType": "UserLoginError",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "nonFieldErrors",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UserLoginMutation",
  "id": null,
  "text": "mutation UserLoginMutation(\n  $input: UserLoginInput!\n) {\n  userLogin(input: $input) {\n    ok\n    errors {\n      nonFieldErrors\n    }\n    user {\n      ...BaseNavbar_logged\n      id\n    }\n  }\n}\n\nfragment BaseNavbar_logged on UserType {\n  firstName\n  id\n  lastName\n  phone\n  balance\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserLoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userLogin",
        "storageKey": null,
        "args": v1,
        "concreteType": "UserLoginPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserLoginMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userLogin",
        "storageKey": null,
        "args": v1,
        "concreteType": "UserLoginPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '249d269aac1e550390308a476ebf8859';
module.exports = node;
