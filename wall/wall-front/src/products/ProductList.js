import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import ProductCard from './ProductCard';

class ProductList extends Component {

    render() {
        return (
            <div className="content container">
                <div className="row">
                    {this.props.products.products.edges.map(edge => <ProductCard key={edge.node.__id}
                                                                  product={edge.node}/>)}
                </div>
            </div>
        );
    }
}


export default createFragmentContainer(ProductList, {
        products: graphql`
            fragment ProductList_products on Query @argumentDefinitions(
                filters:{type:"ProductsQueryArguments!"}
            ){
                products(filters: $filters)
                {
                    edges{
                        node{
                            ...ProductCard_product
                        }
                    }
                }
            }
        `
    }
);