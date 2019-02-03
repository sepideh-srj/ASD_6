/**
 * @flow
 * @relayHash 33fccf4e8b8c34ef388a49ebf177e51e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProductCreateMutationVariables = {|
  input: {
    title: string;
    address: string;
    description: string;
    prodYear?: ?number;
    price?: ?number;
    category: "DIGITAL_GOODS" | "PERSONAL_APPLIANCE" | "VEHICLES" | "APPAREL" | "HOME_AND_KITCHEN" | "BOOK_AND_MEDIA" | "SPORT_ENTERTAINMENT";
    subCategory: "MOBILE_PHONE" | "MOBILE_ACCESSORIES" | "CAMERA" | "CAMERA_ACCESSORIES" | "LAPTOP" | "LAPTOP_ACCESSORIES" | "COMPUTER_PARTS" | "OFFICE_MACHINES" | "TABLET" | "BEAUTY" | "HAIR_CLIPPER" | "ELECTRICAL_PERSONAL_CARE" | "SUNGLASSES" | "PERFUME_ALL" | "JEWELERY" | "HEALTH_CARE" | "CARS" | "CAR_ACCESSORY_PARTS" | "CONSUMABLE_PARTS" | "MOTORBIKE" | "POWER_TOOLS" | "MEN_APPAREL" | "WOMEN_APPAREL" | "WATCH_CLOCK" | "SPORTS_WEAR" | "KIS_APPAREL" | "PERSONAL_APPLIANCE_ACCESSORY" | "SPORT_SHOES" | "VIDEO_AUDIO" | "HOME_APPLIANCE" | "SERVING" | "LIGHTING" | "DECORATIVE" | "PUBLICATION" | "TRAINING_PACK" | "SOFTWARE" | "STATIONERY" | "MUSICAL_INSTRUMENTS" | "HANDICRAFT" | "SPORT" | "SPORT_WEAR" | "BICYCLE" | "BICYCLE_ACCESSORIES" | "HIKING_AND_CAMPING" | "TRAVELING_EQUIPMENT";
    image?: ?string;
    clientMutationId?: ?string;
  };
|};
export type ProductCreateMutationResponse = {|
  +productCreate: ?{|
    +ok: boolean;
    +errors: ?{|
      +address: ?$ReadOnlyArray<?string>;
      +category: ?$ReadOnlyArray<?string>;
      +prodYear: ?$ReadOnlyArray<?string>;
      +price: ?$ReadOnlyArray<?string>;
      +title: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation ProductCreateMutation(
  $input: ProductCreateInput!
) {
  productCreate(input: $input) {
    ok
    errors {
      address
      category
      prodYear
      price
      title
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
        "type": "ProductCreateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductCreateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ProductCreateInput!"
          }
        ],
        "concreteType": "ProductCreatePayload",
        "name": "productCreate",
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
            "concreteType": "ProductCreateError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "address",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "category",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "prodYear",
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
                "name": "title",
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
  "name": "ProductCreateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ProductCreateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ProductCreateMutation",
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
            "type": "ProductCreateInput!"
          }
        ],
        "concreteType": "ProductCreatePayload",
        "name": "productCreate",
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
            "concreteType": "ProductCreateError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "address",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "category",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "prodYear",
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
                "name": "title",
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
  "text": "mutation ProductCreateMutation(\n  $input: ProductCreateInput!\n) {\n  productCreate(input: $input) {\n    ok\n    errors {\n      address\n      category\n      prodYear\n      price\n      title\n    }\n  }\n}\n"
};

module.exports = batch;
