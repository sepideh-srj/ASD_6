/**
 * @flow
 * @relayHash a47ed5b020d6654fd51a5d8abbcf9cb0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddBalanceMutationVariables = {|
  input: {
    amount?: ?number;
    clientMutationId?: ?string;
  };
|};
export type AddBalanceMutationResponse = {|
  +addBalance: ?{|
    +ok: boolean;
    +errors: ?{|
      +amount: ?$ReadOnlyArray<?string>;
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation AddBalanceMutation(
  $input: AddBalanceMutationInput!
) {
  addBalance(input: $input) {
    ok
    errors {
      amount
      nonFieldErrors
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddBalanceMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBalanceMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddBalanceMutationInput!"
          }
        ],
        "concreteType": "AddBalanceMutationPayload",
        "name": "addBalance",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "AddBalanceMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "amount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "nonFieldErrors",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AddBalanceMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddBalanceMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AddBalanceMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddBalanceMutationInput!"
          }
        ],
        "concreteType": "AddBalanceMutationPayload",
        "name": "addBalance",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "AddBalanceMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "amount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "nonFieldErrors",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation AddBalanceMutation(\n  $input: AddBalanceMutationInput!\n) {\n  addBalance(input: $input) {\n    ok\n    errors {\n      amount\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
