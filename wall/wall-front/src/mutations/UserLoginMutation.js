import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UserLoginMutation($input: UserLoginInput!) {
        userLogin(input: $input){
            ok
            errors{
                nonFieldErrors
            }
            user{
                ...BaseNavbar_logged
            }
        }
    }
`;

export default (phone, code, callback) => {
    const variables = {
        input: {
            phone,
            code
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.userLogin);
            },
            onError: err => console.error(err),
        },
    )
}