/**
 * @flow
 * @relayHash fc3cae65032b9230aeb0a2c96367f3c8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserSignUpMutationVariables = {|
  input: {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    invitationCode?: ?string;
    clientMutationId?: ?string;
  };
|};
export type UserSignUpMutationResponse = {|
  +userSignUp: ?{|
    +ok: boolean;
    +errors: ?{|
      +firstName: ?$ReadOnlyArray<?string>;
      +lastName: ?$ReadOnlyArray<?string>;
      +phone: ?$ReadOnlyArray<?string>;
      +password: ?$ReadOnlyArray<?string>;
      +invitationCode: ?$ReadOnlyArray<?string>;
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
      firstName
      lastName
      phone
      password
      invitationCode
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
                "name": "firstName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastName",
                "storageKey": null
              },
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
                "name": "password",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "invitationCode",
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
                "name": "firstName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastName",
                "storageKey": null
              },
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
                "name": "password",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "invitationCode",
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
  "text": "mutation UserSignUpMutation(\n  $input: UserSignUpInput!\n) {\n  userSignUp(input: $input) {\n    ok\n    errors {\n      firstName\n      lastName\n      phone\n      password\n      invitationCode\n    }\n  }\n}\n"
};

module.exports = batch;
