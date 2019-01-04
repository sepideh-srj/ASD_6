/**
 * @flow
 * @relayHash 5aa91e656ce1d230bf6951a2454de871
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserSignUpMutationVariables = {|
  input: {
    phone: string;
    clientMutationId?: ?string;
  };
|};
export type UserSignUpMutationResponse = {|
  +userSignUp: ?{|
    +ok: boolean;
    +errors: ?{|
      +phone: ?$ReadOnlyArray<?string>;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UserSignUpInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserSignUpMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UserSignUpInput!"
          }
        ],
        "concreteType": "UserSignUpPayload",
        "name": "userSignUp",
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
            "concreteType": "UserSignUpError",
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
  "name": "UserSignUpMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UserSignUpInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UserSignUpMutation",
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
            "type": "UserSignUpInput!"
          }
        ],
        "concreteType": "UserSignUpPayload",
        "name": "userSignUp",
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
            "concreteType": "UserSignUpError",
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
  "text": "mutation UserSignUpMutation(\n  $input: UserSignUpInput!\n) {\n  userSignUp(input: $input) {\n    ok\n    errors {\n      phone\n    }\n  }\n}\n"
};

module.exports = batch;
