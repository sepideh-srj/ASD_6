import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment';
import BaseNavbar from './BaseNavbar';

class BaseNavbarQueryRenderer extends React.Component {
    constructor() {
        super();
        this.state = {balance: 0, name: ''}
    }

    change_balance(offset, coef = 0, name=null) {
        let newBalance = offset + coef * this.state.balance;
        this.setState({balance: newBalance})
        name && this.setState({name})
        return newBalance
    }

    render() {
        localStorage.setItem('logged', 'false');
        return (
            <QueryRenderer
                environment={environment}
                query={CheckLoginQuery}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            localStorage.setItem('logged', props.me !== null ? 'true' : 'false');
                            let childrenWithProps = React.Children.map(this.props.children, child =>
                                React.cloneElement(child, {
                                    change_balance: this.change_balance.bind(this)
                                }));
                            return (
                                <div>
                                    <BaseNavbar logged={props.me} balance={this.state.balance} name={this.state.name}
                                                change_balance={this.change_balance.bind(this)}
                                    />
                                    {childrenWithProps}
                                </div>
                            )
                        }
                        return <div>Loading</div>
                    }}
            />
        )
    }

}

const CheckLoginQuery = graphql`
    query BaseNavbarQueryRendererQuery{
        me{
            ...BaseNavbar_logged
        }
    }
`;
export default BaseNavbarQueryRenderer