import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation ActivateAccountMutation($input: ActivateAccountMutationInput!) {
        activateAccount(input: $input){
            ok
            errors{
                code
                nonFieldErrors
            }
        }
    }
`;

export default (code, callback) => {
    const variables = {input: {code}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.activateAccount);
            },
            onError: err => console.error(err),
        },
    )
}