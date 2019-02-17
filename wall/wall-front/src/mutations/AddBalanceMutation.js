import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddBalanceMutation($input: AddBalanceMutationInput!){
        addBalance(input: $input){
            ok
            errors{
                amount
                nonFieldErrors
            }
        }
    }
`;

export default (amount, callback) => {
    const variables = {input:{amount}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.addBalance);
            },
            onError: err => console.error(err),
        },
    )
}