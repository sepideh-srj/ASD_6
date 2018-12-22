/**
 * @flow
 * @relayHash cd9016eaa58c7a3114cf7f12e90649ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLogoutInput = {
  clientMutationId?: ?string
};
export type UserLogoutMutationVariables = {|
  input: UserLogoutInput
|};
export type UserLogoutMutationResponse = {|
  +userLogout: ?{|
    +ok: boolean,
    +errors: ?{|
      +nonFieldErrors: ?$ReadOnlyArray<?string>
    |},
  |}
|};
export type UserLogoutMutation = {|
  variables: UserLogoutMutationVariables,
  response: UserLogoutMutationResponse,
|};
*/


/*
mutation UserLogoutMutation(
  $input: UserLogoutInput!
) {
  userLogout(input: $input) {
    ok
    errors {
      nonFieldErrors
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLogoutInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userLogout",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserLogoutInput!"
      }
    ],
    "concreteType": "UserLogoutPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ok",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "errors",
        "storageKey": null,
        "args": null,
        "concreteType": "UserLogoutError",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UserLogoutMutation",
  "id": null,
  "text": "mutation UserLogoutMutation(\n  $input: UserLogoutInput!\n) {\n  userLogout(input: $input) {\n    ok\n    errors {\n      nonFieldErrors\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserLogoutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserLogoutMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '259f50817d1ef146df9a6fec4da266ca';
module.exports = node;
