/**
 * @flow
 * @relayHash 35a3485b945a6a1889f7d65e5f6439e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBalanceMutationInput = {
  clientMutationId?: ?string
};
export type AddBalanceMutationVariables = {|
  input: AddBalanceMutationInput
|};
export type AddBalanceMutationResponse = {|
  +addBalance: ?{|
    +ok: boolean,
    +errors: ?{|
      +nonFieldErrors: ?$ReadOnlyArray<?string>
    |},
  |}
|};
export type AddBalanceMutation = {|
  variables: AddBalanceMutationVariables,
  response: AddBalanceMutationResponse,
|};
*/


/*
mutation AddBalanceMutation(
  $input: AddBalanceMutationInput!
) {
  addBalance(input: $input) {
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
    "type": "AddBalanceMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBalance",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddBalanceMutationInput!"
      }
    ],
    "concreteType": "AddBalanceMutationPayload",
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
        "concreteType": "AddBalanceMutationError",
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
  "name": "AddBalanceMutation",
  "id": null,
  "text": "mutation AddBalanceMutation(\n  $input: AddBalanceMutationInput!\n) {\n  addBalance(input: $input) {\n    ok\n    errors {\n      nonFieldErrors\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBalanceMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBalanceMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7114275fd1a81169780ecb62e6978baa';
module.exports = node;
