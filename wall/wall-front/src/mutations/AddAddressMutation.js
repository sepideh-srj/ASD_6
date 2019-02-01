import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation AddAddressMutation($input: AddAddressMutationInput!){
        addAddress(input: $input){
            ok
            errors{
                nonFieldErrors
            }
        }
    }
`;

export default (address, callback) => {
    const variables = {input:{address}};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.addAddress);
            },
            onError: err => console.error(err),
        },
    )
}