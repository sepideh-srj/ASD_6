import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddCommentMutation($input: AddCommentMutationInput!){
        addComment(input: $input){
            ok
            comment{
                text
                author{
                    firstName
                    lastName
                }
            }
            errors{
                text
                nonFieldErrors
            }
        }
    }
`;

export default (text, product, callback) => {
    const variables = {input:{text, product}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.addComment);
            },
            onError: err => console.error(err),
        },
    )
}