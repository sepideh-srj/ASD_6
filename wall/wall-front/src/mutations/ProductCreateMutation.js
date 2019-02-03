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
                price
                title
            }
        }
    }
`;

export default (title, address, description, prodYear, price, category, subCategory, image, callback) => {
    const variables = (prodYear === '') ?
        {input: {title, address, description, price, category, subCategory, image}} :
        {input: {title, address, description, prodYear, price, category, subCategory, image}}
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