import React from 'react';
import {Link} from 'react-router';

class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            message_class: 'hidden',
            username: ''
        }
    }

    componentWillMount() {
        if (localStorage.getItem('logged') === 'false')
            this.props.router.push('/login');
    }

    componentDidMount() {
        this.setState({username: this.props.router.params.username})
    }
    render() {
        let childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
                invitation_code: this.props.invitation_code,
                change_balance: this.props.change_balance
            }));
        let username = this.state.username;
        return (
            <div className="content container">
                <div className="row login-form-container tabs-wrapper">
                    <div className='title'>
                        <Link className="tab-head"
                              activeClassName="checked"
                              onlyActiveOnIndex
                              to={"/profile/" + username}>تکمیل
                            مشخصات</Link>
                        <span>{"   "}</span>

                        <Link className="tab-head"
                              activeClassName="checked"
                              to={"/profile/" + username + '/invitation'}>دعوت
                            دوستان</Link>
                        <span>{"   "}</span>
                        <Link className="tab-head"
                              activeClassName="checked"
                              to={"/selling/" + username + '/'}>لیست
                            فروخته‌ها</Link>
                        <span>{"   "}</span>
                        <Link className="tab-head"
                              activeClassName="checked"
                              to={"/bought/" + username + '/'}>لیست
                            خریده‌ها</Link>
                        <span>{"   "}</span>
                        <Link className="tab-head"
                              activeClassName="checked"
                              to={"/message/" + username + '/'}>پیام ها</Link>
                    </div>
                    {childrenWithProps}
                </div>
            </div>
        )
    }
}

export default UserProfile