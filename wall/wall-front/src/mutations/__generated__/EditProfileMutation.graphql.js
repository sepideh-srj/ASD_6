/**
 * @flow
 * @relayHash 2c4ef9a5402c5d182abfaee4d395fe16
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProfileMutationInput = {
  firstName?: ?string,
  lastName?: ?string,
  clientMutationId?: ?string,
};
export type EditProfileMutationVariables = {|
  input: EditProfileMutationInput
|};
export type EditProfileMutationResponse = {|
  +editProfile: ?{|
    +ok: boolean,
    +errors: ?{|
      +firstName: ?$ReadOnlyArray<?string>,
      +lastName: ?$ReadOnlyArray<?string>,
      +nonFieldErrors: ?$ReadOnlyArray<?string>,
    |},
  |}
|};
export type EditProfileMutation = {|
  variables: EditProfileMutationVariables,
  response: EditProfileMutationResponse,
|};
*/


/*
mutation EditProfileMutation(
  $input: EditProfileMutationInput!
) {
  editProfile(input: $input) {
    ok
    errors {
      firstName
      lastName
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
    "type": "EditProfileMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "EditProfileMutationInput!"
      }
    ],
    "concreteType": "EditProfileMutationPayload",
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
        "concreteType": "EditProfileMutationError",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
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
  "name": "EditProfileMutation",
  "id": null,
  "text": "mutation EditProfileMutation(\n  $input: EditProfileMutationInput!\n) {\n  editProfile(input: $input) {\n    ok\n    errors {\n      firstName\n      lastName\n      nonFieldErrors\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditProfileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProfileMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43939248adb78f4d1b83b85727355eb9';
module.exports = node;
