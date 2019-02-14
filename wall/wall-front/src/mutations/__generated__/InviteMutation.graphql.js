/**
 * @flow
 * @relayHash e93ef0de8cf462caeebf506b67de3812
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InviteMutationVariables = {|
  input: {
    phone: string;
    clientMutationId?: ?string;
  };
|};
export type InviteMutationResponse = {|
  +invite: ?{|
    +ok: boolean;
    +errors: ?{|
      +phone: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation InviteMutation(
  $input: InviteInput!
) {
  invite(input: $input) {
    ok
    errors {
      phone
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
        "type": "InviteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InviteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "InviteInput!"
          }
        ],
        "concreteType": "InvitePayload",
        "name": "invite",
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
            "concreteType": "InviteError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "phone",
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
  "name": "InviteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "InviteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InviteMutation",
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
            "type": "InviteInput!"
          }
        ],
        "concreteType": "InvitePayload",
        "name": "invite",
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
            "concreteType": "InviteError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "phone",
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
  "text": "mutation InviteMutation(\n  $input: InviteInput!\n) {\n  invite(input: $input) {\n    ok\n    errors {\n      phone\n    }\n  }\n}\n"
};

module.exports = batch;
