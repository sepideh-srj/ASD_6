import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation EditProfileMutation($input: EditProfileMutationInput!) {
        editProfile(input: $input){
            ok
            errors{
                firstName
                lastName
                password
                nonFieldErrors
            }
        }
    }
`;

export default (firstName, lastName, password, callback) => {
    const variables = {
        input: {
            firstName,
            lastName,
            password
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.editProfile);
            },
            onError: err => console.error(err),
        },
    )
}