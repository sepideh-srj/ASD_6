import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddAuctionMutation($input: AddAuctionMutationInput!){
        addAuction(input: $input){
            ok
            errors{
                basePrice
                deadline
                product
                nonFieldErrors
            }
        }
    }
`;

export default (basePrice, deadline, product, callback) => {
    const variables = {input:{basePrice, deadline, product}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.addAuction);
            },
            onError: err => console.error(err),
        },
    )
}