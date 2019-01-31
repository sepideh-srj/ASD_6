import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation ResendPasswordMutation($input: ResendPasswordMutationInput!) {
        resendPassword(input: $input){
            ok
            errors{
                phone
                nonFieldErrors
            }
        }
    }
`;

export default (phone, callback) => {
    const variables = {input: {phone}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.resendPassword);
            },
            onError: err => console.error(err),
        },
    )
}