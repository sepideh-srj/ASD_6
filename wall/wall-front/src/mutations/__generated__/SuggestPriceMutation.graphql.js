/**
 * @flow
 * @relayHash 7c19f0ecc360af4e71bb9fb63ac2e5fd
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SuggestPriceMutationVariables = {|
  input: {
    auction: string;
    price: number;
    clientMutationId?: ?string;
  };
|};
export type SuggestPriceMutationResponse = {|
  +suggestPrice: ?{|
    +ok: boolean;
    +errors: ?{|
      +auction: ?$ReadOnlyArray<?string>;
      +price: ?$ReadOnlyArray<?string>;
      +nonFieldErrors: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation SuggestPriceMutation(
  $input: SuggestPriceMutationInput!
) {
  suggestPrice(input: $input) {
    ok
    errors {
      auction
      price
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
        "type": "SuggestPriceMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SuggestPriceMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SuggestPriceMutationInput!"
          }
        ],
        "concreteType": "SuggestPriceMutationPayload",
        "name": "suggestPrice",
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
            "concreteType": "SuggestPriceMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "auction",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "price",
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
  "name": "SuggestPriceMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SuggestPriceMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SuggestPriceMutation",
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
            "type": "SuggestPriceMutationInput!"
          }
        ],
        "concreteType": "SuggestPriceMutationPayload",
        "name": "suggestPrice",
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
            "concreteType": "SuggestPriceMutationError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "auction",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "price",
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
  "text": "mutation SuggestPriceMutation(\n  $input: SuggestPriceMutationInput!\n) {\n  suggestPrice(input: $input) {\n    ok\n    errors {\n      auction\n      price\n      nonFieldErrors\n    }\n  }\n}\n"
};

module.exports = batch;
