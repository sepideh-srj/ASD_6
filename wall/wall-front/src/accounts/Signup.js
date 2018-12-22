import React, {Component} from 'react';
import SignUpUserMutation from "../mutations/UserSignUpMutation";
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import '../../styles/accounts/login.css';
import UserLoginMutation from "../mutations/UserLoginMutation";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            phone: '',
            phone_error: null,
        };
    }

    render() {
        return (
            <div className="content container">
                <div className="row">
                    <div className="col col-md-9 order-md-1">
                        <div className="login-form-container">
                            <Form>
                                <FormGroup row>
                                    <Label for="phone" sm={2}>شماره موبایل</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="phone"
                                               id="phone"
                                               valid={this.state.phone_error == null ? undefined : false}
                                               placeholder="شماره موبایل"
                                               onChange={(e) => this.setState({
                                                   phone: e.target.value,
                                                   phone_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.phone_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Button className="submit" outline color="primary"
                                        onClick={() => this._confirm()}>ثبت</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async _confirm() {
        const {phone} = this.state;
        SignUpUserMutation(phone, (response) => {
            if (response.ok) {
                this.props.router.push('/login/?number=' + phone);
            }
            else
                this.setState({
                    phone_error: response.errors.phone
                });
        })

    }

}

export default Login;
