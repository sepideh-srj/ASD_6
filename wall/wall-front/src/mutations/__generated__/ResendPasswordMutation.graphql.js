/**
 * @flow
 * @relayHash 17ec10c431f18525c9261d3167071f1b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ResendPasswordMutationVariables = {|
  input: {
    phone: string;
    clientMutationId?: ?string;
  };
|};
export type ResendPasswordMutationResponse = {|
  +resendPassword: ?{|
    +ok: boolean;
    +errors: ?{|
      +phone: ?$ReadOnlyArray<?string>;
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation ResendPasswordMutation(
  $input: ResendPasswordMutationInput!
) {
  resendPassword(input: $input) {
    ok
    errors {
      phone
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
        "type": "ResendPasswordMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResendPasswordMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ResendPasswordMutationInput!"
          }
        ],
        "concreteType": "ResendPasswordMutationPayload",
        "name": "resendPassword",
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
            "concreteType": "ResendPasswordMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "phone",
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
  "name": "ResendPasswordMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ResendPasswordMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ResendPasswordMutation",
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
            "type": "ResendPasswordMutationInput!"
          }
        ],
        "concreteType": "ResendPasswordMutationPayload",
        "name": "resendPassword",
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
            "concreteType": "ResendPasswordMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "phone",
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
  "text": "mutation ResendPasswordMutation(\n  $input: ResendPasswordMutationInput!\n) {\n  resendPassword(input: $input) {\n    ok\n    errors {\n      phone\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
