/**
 * @flow
 * @relayHash 2941ecb51024c9e9fc18ee60285ee45b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ActivateAccountMutationVariables = {|
  input: {
    code: string;
    clientMutationId?: ?string;
  };
|};
export type ActivateAccountMutationResponse = {|
  +activateAccount: ?{|
    +ok: boolean;
    +errors: ?{|
      +code: ?$ReadOnlyArray<?string>;
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation ActivateAccountMutation(
  $input: ActivateAccountMutationInput!
) {
  activateAccount(input: $input) {
    ok
    errors {
      code
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
        "type": "ActivateAccountMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActivateAccountMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ActivateAccountMutationInput!"
          }
        ],
        "concreteType": "ActivateAccountMutationPayload",
        "name": "activateAccount",
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
            "concreteType": "ActivateAccountMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "code",
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
  "name": "ActivateAccountMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ActivateAccountMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ActivateAccountMutation",
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
            "type": "ActivateAccountMutationInput!"
          }
        ],
        "concreteType": "ActivateAccountMutationPayload",
        "name": "activateAccount",
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
            "concreteType": "ActivateAccountMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "code",
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
  "text": "mutation ActivateAccountMutation(\n  $input: ActivateAccountMutationInput!\n) {\n  activateAccount(input: $input) {\n    ok\n    errors {\n      code\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
