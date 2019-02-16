import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddRequestMutation($input: AddRequestMutationInput!){
        addRequest(input: $input){
            ok
            errors{
                title
                nonFieldErrors
            }
        }
    }
`;

export default (title, callback) => {
    const variables = {input:{title}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.addRequest);
            },
            onError: err => console.error(err),
        },
    )
}