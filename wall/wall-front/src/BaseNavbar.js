import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {createFragmentContainer, graphql} from "react-relay";
import UserLogoutMutation from './mutations/UserLogoutMutation';
import {Link} from 'react-router';

class BaseNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            logged_in: false,
            first_name: '',
            phone: '',
        };
    }

    componentDidMount() {
        if (this.props.logged) {
            if(this.props.logged.activated == false && !("" + window.location).includes("/activate")){
                window.location.replace('/activate')
                return
            }
            this.setState({
                logged_in: true,
                first_name: this.props.logged.firstName,
                phone: this.props.logged.phone
            });
            localStorage.setItem('username', this.props.logged.id);
            localStorage.setItem('phone', this.props.logged.phone);
            localStorage.setItem('firstName', this.props.logged.firstName);
            localStorage.setItem('lastName', this.props.logged.lastName);
            localStorage.setItem('balance', this.props.logged.balance);
            localStorage.setItem('addresses', JSON.stringify(this.props.logged.addresses));
            this.props.change_balance(this.props.logged.balance);
        } else {
            localStorage.setItem('addresses', null)
            localStorage.setItem('username', null)
            if(("" + window.location).includes("/activate")){
                window.location.replace('/')
                return
            }
        }

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        this.setState({phone: ''})
        UserLogoutMutation(() => {
            window.location.replace('/')
        });
    }

    render() {
        let name = this.state.first_name === '' ? 'کاربر' : this.state.first_name;
        let icon_style = {
            color: 'white',
            fontSize: '20px',
            lineHeight: '2.5rem'
        };
        return (
            <div>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Navbar color="dark" dark expand="md">
                    <Link className="nav-link wall-logo" to="/">
                        سامانه وال
                    </Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.state.logged_in ?
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink disabled>{name} عزیز خوش آمدی </NavLink>
                                </NavItem>
                                <NavItem>

                                    <Link to="/create-product">
                                        <i className="material-icons"
                                           style={icon_style}>add_circle</i>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={"/profile/" + this.props.logged.id}>
                                        <i className="material-icons"
                                           style={icon_style}>person</i>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="" onClick={this.logout.bind(this)}>خروج</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled> شما {this.props.balance} اعتبار در سایت
                                        دارید </NavLink>
                                </NavItem>
                            </Nav> :
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/login/">ورود
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/signup/">ثبت نام
                                    </Link>
                                </NavItem>

                            </Nav>
                        }
                    </Collapse>
                </Navbar>

            </div>
        )
    }
}

export default createFragmentContainer(BaseNavbar, {
    logged: graphql`
        fragment BaseNavbar_logged on UserType{
            firstName
            id
            lastName
            phone
            balance
            activated
            addresses
        }
    `,

});