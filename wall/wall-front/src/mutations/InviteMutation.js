import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation InviteMutation($input: InviteInput!) {
        invite(input: $input){
            ok
            errors{
                phone
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
                callback(response.invite);
            },
            onError: err => console.error(err),
        },
    )
}