import React, {Component} from 'react';
import SignUpUserMutation from "../mutations/UserSignUpMutation";
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import '../../styles/accounts/login.css';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            phone: '',
            phone_error: null,
            password: '',
            password_error: null,
            cpassword: '',
            cpassword_error: null
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
                                <FormGroup row>
                                    <Label for="password" sm={2}>رمز عبور</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="password"
                                               id="password"
                                               valid={this.state.password_error == null ? undefined : false}
                                               placeholder="رمز عبور"
                                               onChange={(e) => this.setState({
                                                   password: e.target.value,
                                                   password_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.password_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="cpassword" sm={2}>تایید رمز عبور</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="cpassword"
                                               id="cpassword"
                                               valid={this.state.cpassword_error == null ? undefined : false}
                                               placeholder="تایید رمز عبور"
                                               onChange={(e) => this.setState({
                                                   cpassword: e.target.value,
                                                   cpassword_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.cpassword_error}
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
        const {phone, password, cpassword} = this.state;
        if (password !== cpassword){
            this.setState({cpassword_error: "تایید رمز عبور اشتباه است!"})
            return
        }
        SignUpUserMutation(phone, password, (response) => {
            if (response.ok) {
                this.props.router.push('/login/?number=' + phone);
            }
            else
                this.setState({
                    phone_error: response.errors.phone,
                    password_error: response.errors.password
                });
        })

    }

}

export default Signup;
