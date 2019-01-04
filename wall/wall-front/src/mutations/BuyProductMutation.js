import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation BuyProductMutation($input: BuyProductMutationInput!){
        buyProduct(input: $input){
            ok
            errors{
                productId
                nonFieldErrors
            }
        }
    }
`;

export default (productId, callback) => {
    const variables = {input:{productId}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.buyProduct);
            },
            onError: err => console.error(err),
        },
    )
}