import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment';
import ProductList from "./ProductList";
import ProductFilters from "./ProductFilters"

class ProductListQueryRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {},
        };
    }


    change_filter(name, value) {
        let filters = this.state.filters;
        if (value)
            filters[name] = value;
        else
            delete filters[name];
        this.setState({filters});
    }


    render() {
        let variables = {};
        variables['filters'] = JSON.parse(JSON.stringify(this.state.filters));
        return (
            <div>
                <ProductFilters changeFilters={this.change_filter.bind(this)}/>

                <QueryRenderer
                    environment={environment}
                    query={ProductListQuery}
                    variables={variables}
                    render={
                        ({error, props}) => {
                            if (error) {
                                return <div>{error.message}</div>
                            } else if (props) {
                                return (
                                    <ProductList query={props} products={props} filters={this.state.filters}/>
                                )
                            }
                            return <div>Loading</div>
                        }}
                />
            </div>
        )
    }

}

const ProductListQuery = graphql`
            query ProductListQueryRendererQuery($filters: ProductsQueryArguments){
                ...ProductList_products @arguments(filters: $filters) 
            }
    `
;
export default ProductListQueryRenderer