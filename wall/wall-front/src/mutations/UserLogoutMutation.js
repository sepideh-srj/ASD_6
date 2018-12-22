import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UserLogoutMutation($input: UserLogoutInput!) {
        userLogout(input: $input){
            ok
            errors{
                nonFieldErrors
            }
        }
    }
`;

export default (call_back) => {
    const variables = {
        input: {
            clientMutationId: ""
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onSuccess: call_back,
            onError: err => console.error(err),
        },
    )
}