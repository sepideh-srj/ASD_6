import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './../Environment';
import PublicProfile from "./PublicProfile";

class RequestListRenderer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
        }
    }

    componentDidMount() {
        this.setState({username: this.props.router.params.username})
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={PublicProfileQuery}
                variables={{id: this.state.username}}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <PublicProfile user={props.user}/>
                        }
                        return <div/>
                    }}
            />
        )
    }

}

const PublicProfileQuery = graphql`
    query PublicProfileRendererQuery($id: String!){
        user(id:$id){
            ...PublicProfile_user
        }
    }
`;
export default RequestListRenderer