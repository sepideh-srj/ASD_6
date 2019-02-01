/**
 * @flow
 * @relayHash f72fe28dcf10ef5bcf57d1b42c036b3d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddAddressMutationVariables = {|
  input: {
    address: string;
    clientMutationId?: ?string;
  };
|};
export type AddAddressMutationResponse = {|
  +addAddress: ?{|
    +ok: boolean;
    +errors: ?{|
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation AddAddressMutation(
  $input: AddAddressMutationInput!
) {
  addAddress(input: $input) {
    ok
    errors {
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
        "type": "AddAddressMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddAddressMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddAddressMutationInput!"
          }
        ],
        "concreteType": "AddAddressMutationPayload",
        "name": "addAddress",
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
            "concreteType": "AddAddressMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
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
  "name": "AddAddressMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddAddressMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AddAddressMutation",
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
            "type": "AddAddressMutationInput!"
          }
        ],
        "concreteType": "AddAddressMutationPayload",
        "name": "addAddress",
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
            "concreteType": "AddAddressMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
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
  "text": "mutation AddAddressMutation(\n  $input: AddAddressMutationInput!\n) {\n  addAddress(input: $input) {\n    ok\n    errors {\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
