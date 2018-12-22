import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UserSignUpMutation($input: UserSignUpInput!) {
        userSignUp(input: $input){
            ok
            errors{
                phone
            }
        }
    }
`;

export default (phone, callback) => {
    const variables = {
        input: {
            phone
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.userSignUp);
            },
            onError: err => console.error(err),
        },
    )
}