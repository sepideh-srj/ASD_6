import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './../Environment';
import Messages from './Messages';

class MessageRenderer extends React.Component {
    constructor() {
        super();
        this.state = {
            actions: 0,
            message: "",
            position: 0
        }
    }

    increaseAction(message, position) {
        this.setState({actions: this.state.actions + 1, message, position})
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={PublicProfileQuery}
                variables={{fake: this.state.actions}}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <Messages change={this.increaseAction.bind(this)}
                                                messages={props.me.messages}
                                                phone={props.me.phone}
                                                message={this.state.message}
                                                position={this.state.position}
                            />
                        }
                        return <div/>
                    }}
            />
        )
    }

}

const PublicProfileQuery = graphql`
    query MessageRendererQuery{
        me{
            phone
            messages{
                id
                text
                sender{
                    id
                    phone
                    firstName
                    lastName
                }
                receiver{
                    id
                    phone
                    firstName
                    lastName
                }
            }
        }
    }
`;

export default MessageRenderer