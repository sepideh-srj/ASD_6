import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UserSignUpMutation($input: UserSignUpInput!) {
        userSignUp(input: $input){
            ok
            errors{
                firstName
                lastName
                phone
                password
                invitationCode
            }
        }
    }
`;

export default (first_name, last_name, phone, password, invitationCode, callback) => {
    const variables = {
        input: {
            firstName: first_name, 
            lastName: last_name, 
            phone,
            password,
            invitationCode
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