import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation ProductCreateMutation($input: ProductCreateInput!) {
        productCreate(input: $input){
            ok
            errors{
                address
                category
                prodYear
                title
            }
        }
    }
`;

export default (title, address, description, prodYear, category, image, callback) => {
    const variables = (prodYear === '') ?
        {input: {title, address, description, category, image}} :
        {input: {title, address, description, prodYear, category, image}}
    ;
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                callback(response.productCreate);
            },
            onError: err => console.error(err),
        },
    )
}