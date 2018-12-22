/**
 * @flow
 * @relayHash a4c2802a9c5bedc6f107cc0021b69c8a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResendCodeMutationInput = {
  phone: string,
  clientMutationId?: ?string,
};
export type ResendCodeMutationVariables = {|
  input: ResendCodeMutationInput
|};
export type ResendCodeMutationResponse = {|
  +resendCode: ?{|
    +ok: boolean,
    +errors: ?{|
      +phone: ?$ReadOnlyArray<?string>,
      +nonFieldErrors: ?$ReadOnlyArray<?string>,
    |},
  |}
|};
export type ResendCodeMutation = {|
  variables: ResendCodeMutationVariables,
  response: ResendCodeMutationResponse,
|};
*/


/*
mutation ResendCodeMutation(
  $input: ResendCodeMutationInput!
) {
  resendCode(input: $input) {
    ok
    errors {
      phone
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
    "type": "ResendCodeMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resendCode",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ResendCodeMutationInput!"
      }
    ],
    "concreteType": "ResendCodeMutationPayload",
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
        "concreteType": "ResendCodeMutationError",
        "plural": false,
        "selections": [
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
  "name": "ResendCodeMutation",
  "id": null,
  "text": "mutation ResendCodeMutation(\n  $input: ResendCodeMutationInput!\n) {\n  resendCode(input: $input) {\n    ok\n    errors {\n      phone\n      nonFieldErrors\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ResendCodeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ResendCodeMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3766b97065165e539fec6650742261e7';
module.exports = node;
