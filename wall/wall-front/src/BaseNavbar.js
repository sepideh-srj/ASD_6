import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
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
            this.setState({
                logged_in: true,
                first_name: this.props.logged.firstName,
                phone: this.props.logged.phone
            });
            localStorage.setItem('username', this.props.logged.id);
            this.props.change_balance(this.props.logged.balance, 0, this.props.logged.firstName);
        } else {
            localStorage.setItem('username', null)
        }

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        UserLogoutMutation((r) => {
            window.location.replace('/')
        });
    }

    render() {
        let name = this.props.name === '' ? 'کاربر' : this.props.name;
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
        }
    `,

});