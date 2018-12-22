/**
 * @flow
 * @relayHash 7a1c7e5e24f283d30902a70aee7f968e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserSignUpInput = {
  phone: string,
  clientMutationId?: ?string,
};
export type UserSignUpMutationVariables = {|
  input: UserSignUpInput
|};
export type UserSignUpMutationResponse = {|
  +userSignUp: ?{|
    +ok: boolean,
    +errors: ?{|
      +phone: ?$ReadOnlyArray<?string>
    |},
  |}
|};
export type UserSignUpMutation = {|
  variables: UserSignUpMutationVariables,
  response: UserSignUpMutationResponse,
|};
*/


/*
mutation UserSignUpMutation(
  $input: UserSignUpInput!
) {
  userSignUp(input: $input) {
    ok
    errors {
      phone
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserSignUpInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userSignUp",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserSignUpInput!"
      }
    ],
    "concreteType": "UserSignUpPayload",
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
        "concreteType": "UserSignUpError",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "phone",
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
  "name": "UserSignUpMutation",
  "id": null,
  "text": "mutation UserSignUpMutation(\n  $input: UserSignUpInput!\n) {\n  userSignUp(input: $input) {\n    ok\n    errors {\n      phone\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserSignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserSignUpMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6e59219bd2680b7f85a09c35d3f593e';
module.exports = node;
