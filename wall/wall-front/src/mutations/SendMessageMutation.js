import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SendMessageMutation($input: SendMessageMutationInput!){
        sendMessage(input: $input){
            ok
            errors{
                nonFieldErrors
            }
        }
    }
`;

export default (text, receiver, callback) => {
    const variables = {input:{text, receiver}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.sendMessage);
            },
            onError: err => console.error(err),
        },
    )
}