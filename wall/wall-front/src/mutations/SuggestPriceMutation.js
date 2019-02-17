import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SuggestPriceMutation($input: SuggestPriceMutationInput!){
        suggestPrice(input: $input){
            ok
            errors{
                auction
                price
                nonFieldErrors
            }
        }
    }
`;

export default (auction, price, callback) => {
    const variables = {input:{auction, price}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.suggestPrice);
            },
            onError: err => console.error(err),
        },
    )
}