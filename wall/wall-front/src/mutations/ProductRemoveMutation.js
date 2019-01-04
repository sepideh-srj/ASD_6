import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation ProductRemoveMutation($input: ProductRemoveMutationInput!){
        productRemove(input:$input){
            ok
            errors{
                product
                nonFieldErrors
            }
        }
    }
`;

export default (product, callback) => {
    const variables = {input: {product}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.productRemove);
            },
            onError: err => console.error(err),
        },
    )
}