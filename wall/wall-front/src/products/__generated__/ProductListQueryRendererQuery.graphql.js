/**
 * @flow
 * @relayHash c9fba622e9e593b0d180317c4125b55b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProductListQueryRendererQueryResponse = {| |};
*/


/*
query ProductListQueryRendererQuery(
  $filters: ProductsQueryArguments
) {
  ...ProductList_products_VTAHT
}

fragment ProductList_products_VTAHT on Query {
  products(filters: $filters) {
    edges {
      node {
        ...ProductCard_product
        id
      }
    }
  }
}

fragment ProductCard_product on ProductType {
  description
  address
  category
  id
  image
  prodYear
  title
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "filters",
        "type": "ProductsQueryArguments",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductListQueryRendererQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductList_products",
        "args": [
          {
            "kind": "Variable",
            "name": "filters",
            "variableName": "filters",
            "type": null
          }
        ]
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ProductListQueryRendererQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "filters",
        "type": "ProductsQueryArguments",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ProductListQueryRendererQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "filters",
            "variableName": "filters",
            "type": "ProductsQueryArguments"
          }
        ],
        "concreteType": "ProductConnection",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ProductEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ProductType",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "name": "id",
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
                    "name": "prodYear",
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
        "storageKey": null
      }
    ]
  },
  "text": "query ProductListQueryRendererQuery(\n  $filters: ProductsQueryArguments\n) {\n  ...ProductList_products_VTAHT\n}\n\nfragment ProductList_products_VTAHT on Query {\n  products(filters: $filters) {\n    edges {\n      node {\n        ...ProductCard_product\n        id\n      }\n    }\n  }\n}\n\nfragment ProductCard_product on ProductType {\n  description\n  address\n  category\n  id\n  image\n  prodYear\n  title\n}\n"
};

module.exports = batch;
