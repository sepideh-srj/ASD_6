import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddBalanceMutation($input: AddBalanceMutationInput!){
        addBalance(input: $input){
            ok
            errors{
                nonFieldErrors
            }
        }
    }
`;

export default (callback) => {
    const variables = {input:{}};
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