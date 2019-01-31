import React, {Component} from 'react';
import UserLoginMutation from "../mutations/UserLoginMutation";
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import '../../styles/accounts/login.css';
import ResendCodeMutation from "../mutations/ResendCodeMutation";
import {ToastContainer, toast} from 'react-toastify';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
            phone: '',
            login_result: '',
            valid: undefined,
            input_disabled: false
        };
    }

    componentDidMount() {
        let phone = this.props.location.query.number;
        if (phone)
            this.setState({phone, input_disabled: true})
    }

    render() {
        return (
            <div className="content container">
                <ToastContainer/>
                <div className="row">

                    <div className="col col-md-9 order-md-1">
                        <div className="login-form-container">
                            <Form>
                                <FormGroup row>
                                    <Label for="phone" sm={2}>شماره موبایل</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input"
                                               disabled={this.state.input_disabled}
                                               type="text" name="phone"
                                               id="phone"
                                               placeholder="شماره موبایل"
                                               value={this.state.phone}
                                               onChange={(e) => this.setState({phone: e.target.value})}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>رمز عبور</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="password" name="password"
                                               id="password"
                                               valid={this.state.valid}
                                               placeholder="رمز عبور"
                                               onChange={(e) => this.setState({password: e.target.value})}
                                        />
                                    </Col>
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.login_result}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Button type="button" className="submit" outline color="primary"
                                        onClick={() => this._confirm()}>ورود</Button>
                                {/* <Button type="button" className="submit" outline color="success"
                                        onClick={() => this.resend()}>ارسال کد</Button> */}

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async _confirm() {
        const {phone, password} = this.state;
        UserLoginMutation(phone, password, (response) => {
            if (response.ok) {
                window.location.replace('/');
            }
            else
                this.setState({valid: false, login_result: response.errors.nonFieldErrors});
        })

    }

    async resend() {
        const {phone} = this.state;
        ResendCodeMutation(phone, (response) => {
            if (response.ok) {
                toast("کد ورود جدیدی برای شما ارسال شد.");
            }
            else
                toast(response.errors.nonFieldErrors[0]);
        })

    }

}

export default Login;
