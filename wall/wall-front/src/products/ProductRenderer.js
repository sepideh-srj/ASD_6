import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment';
import ProductDescription from "./ProductDescription";

class ProductRenderer extends React.Component {

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={ProductQuery}
                variables={{
                    id: this.props.params.id
                }}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <ProductDescription product={props.product} router={this.props.router}
                                                    change_balance={this.props.change_balance}
                            />
                        }
                        return <div>Loading</div>
                    }}
            />
        )
    }

}

const ProductQuery = graphql`
    query ProductRendererQuery($id: String!){
        product(id:$id){
            ...ProductDescription_product
        }
    }
`;
export default ProductRenderer