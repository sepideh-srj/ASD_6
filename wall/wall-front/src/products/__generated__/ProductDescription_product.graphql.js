/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ProductDescription_product = {|
  +id: string;
  +description: ?string;
  +address: string;
  +category: "DIGITAL_GOODS" | "PERSONAL_APPLIANCE" | "VEHICLES" | "APPAREL" | "HOME_AND_KITCHEN" | "BOOK_AND_MEDIA" | "SPORT_ENTERTAINMENT";
  +subCategory: "MOBILE_PHONE" | "MOBILE_ACCESSORIES" | "CAMERA" | "CAMERA_ACCESSORIES" | "LAPTOP" | "LAPTOP_ACCESSORIES" | "COMPUTER_PARTS" | "OFFICE_MACHINES" | "TABLET" | "BEAUTY" | "HAIR_CLIPPER" | "ELECTRICAL_PERSONAL_CARE" | "SUNGLASSES" | "PERFUME_ALL" | "JEWELERY" | "HEALTH_CARE" | "CARS" | "CAR_ACCESSORY_PARTS" | "CONSUMABLE_PARTS" | "MOTORBIKE" | "POWER_TOOLS" | "MEN_APPAREL" | "WOMEN_APPAREL" | "WATCH_CLOCK" | "SPORTS_WEAR" | "KIS_APPAREL" | "PERSONAL_APPLIANCE_ACCESSORY" | "SPORT_SHOES" | "VIDEO_AUDIO" | "HOME_APPLIANCE" | "SERVING" | "LIGHTING" | "DECORATIVE" | "PUBLICATION" | "TRAINING_PACK" | "SOFTWARE" | "STATIONERY" | "MUSICAL_INSTRUMENTS" | "HANDICRAFT" | "SPORT" | "SPORT_WEAR" | "BICYCLE" | "BICYCLE_ACCESSORIES" | "HIKING_AND_CAMPING" | "TRAVELING_EQUIPMENT";
  +image: ?string;
  +seller: {|
    +firstName: string;
    +lastName: string;
    +id: string;
  |};
  +prodYear: number;
  +price: number;
  +comments: ?$ReadOnlyArray<?{|
    +text: string;
    +author: {|
      +firstName: string;
      +lastName: string;
    |};
  |}>;
  +title: string;
  +auction: ?{|
    +id: string;
    +basePrice: number;
    +deadline: string;
    +prices: string;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductDescription_product",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "UserType",
      "name": "seller",
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
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
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
      "name": "subCategory",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "image",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "description",
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
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "CommentType",
      "name": "comments",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "text",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "UserType",
          "name": "author",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "AuctionType",
      "name": "auction",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
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
          "name": "prices",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ProductType"
};

module.exports = fragment;
