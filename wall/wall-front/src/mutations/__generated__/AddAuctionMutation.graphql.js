/**
 * @flow
 * @relayHash 9be8cda0fd13530c1b64e92c659c02c2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddAuctionMutationVariables = {|
  input: {
    basePrice: number;
    deadline: string;
    product: string;
    clientMutationId?: ?string;
  };
|};
export type AddAuctionMutationResponse = {|
  +addAuction: ?{|
    +ok: boolean;
    +errors: ?{|
      +basePrice: ?$ReadOnlyArray<?string>;
      +deadline: ?$ReadOnlyArray<?string>;
      +product: ?$ReadOnlyArray<?string>;
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation AddAuctionMutation(
  $input: AddAuctionMutationInput!
) {
  addAuction(input: $input) {
    ok
    errors {
      basePrice
      deadline
      product
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
        "type": "AddAuctionMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddAuctionMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddAuctionMutationInput!"
          }
        ],
        "concreteType": "AddAuctionMutationPayload",
        "name": "addAuction",
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
            "concreteType": "AddAuctionMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "basePrice",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "deadline",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "product",
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
  "name": "AddAuctionMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddAuctionMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AddAuctionMutation",
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
            "type": "AddAuctionMutationInput!"
          }
        ],
        "concreteType": "AddAuctionMutationPayload",
        "name": "addAuction",
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
            "concreteType": "AddAuctionMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "basePrice",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "deadline",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "product",
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
  "text": "mutation AddAuctionMutation(\n  $input: AddAuctionMutationInput!\n) {\n  addAuction(input: $input) {\n    ok\n    errors {\n      basePrice\n      deadline\n      product\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
