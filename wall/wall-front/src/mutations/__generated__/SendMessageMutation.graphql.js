/**
 * @flow
 * @relayHash 2496a23f4275554ed6f48953c4c8971a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SendMessageMutationVariables = {|
  input: {
    text: string;
    receiver: string;
    clientMutationId?: ?string;
  };
|};
export type SendMessageMutationResponse = {|
  +sendMessage: ?{|
    +ok: boolean;
    +errors: ?{|
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation SendMessageMutation(
  $input: SendMessageMutationInput!
) {
  sendMessage(input: $input) {
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
        "type": "SendMessageMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SendMessageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SendMessageMutationInput!"
          }
        ],
        "concreteType": "SendMessageMutationPayload",
        "name": "sendMessage",
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
            "concreteType": "SendMessageMutationError",
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
  "name": "SendMessageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SendMessageMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SendMessageMutation",
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
            "type": "SendMessageMutationInput!"
          }
        ],
        "concreteType": "SendMessageMutationPayload",
        "name": "sendMessage",
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
            "concreteType": "SendMessageMutationError",
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
  "text": "mutation SendMessageMutation(\n  $input: SendMessageMutationInput!\n) {\n  sendMessage(input: $input) {\n    ok\n    errors {\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
