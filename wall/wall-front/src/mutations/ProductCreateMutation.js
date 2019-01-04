import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation ProductCreateMutation($input: ProductCreateInput!) {
        productCreate(input: $input){
            ok
            errors{
                author
                category
                proYear
                title
            }
        }
    }
`;

export default (title, city, description, proYear, category, image, callback) => {
    const variables = (proYear === '') ?
        {input: {title, city, description, category, image}} :
        {input: {title, city, description, proYear, category, image}}
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