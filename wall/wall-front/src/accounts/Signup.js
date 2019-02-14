import React, {Component} from 'react';
import SignUpUserMutation from "../mutations/UserSignUpMutation";
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import '../../styles/accounts/login.css';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            first_name_error: null,
            last_name: '',
            last_name_error: null,
            phone: '',
            phone_error: null,
            password: '',
            password_error: null,
            cpassword: '',
            cpassword_error: null,
            invitationCode: '',
            invitation_error: null,
        };
    }

    componentDidMount() {
        let invitationCode = this.props.location.query.invitation_code;

        if (invitationCode)
            this.setState({invitationCode})
    }

    render() {
        return (
            <div className="content container">
                <div className="row">
                    <div className="col col-md-9 order-md-1">
                        <div className="login-form-container">
                            <Form>
                                <FormGroup row>
                                    <Label for="first_name" sm={2}>*نام</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="first_name"
                                               id="first_name"
                                               valid={this.state.first_name_error == null ? undefined : false}
                                               placeholder="نام"
                                               onChange={(e) => this.setState({
                                                   first_name: e.target.value,
                                                   first_name_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.first_name_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="last_name" sm={2}>*نام خانوادگی</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="last_name"
                                               id="last_name"
                                               valid={this.state.last_name_error == null ? undefined : false}
                                               placeholder="نام خانوادگی"
                                               onChange={(e) => this.setState({
                                                   last_name: e.target.value,
                                                   last_name_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.last_name_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="phone" sm={2}>*شماره موبایل</Label>
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
                                    <Label for="password" sm={2}>*رمز عبور</Label>
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
                                    <Label for="cpassword" sm={2}>*تایید رمز عبور</Label>
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
                                <FormGroup row>
                                    <Label for="invitation" sm={2}>کد دعوت</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="invitation"
                                               id="invitation"
                                               value={this.state.invitationCode}
                                               valid={this.state.invitation_error == null ? undefined : false}
                                               placeholder="کد دعوت"
                                               onChange={(e) => this.setState({
                                                   invitationCode: e.target.value,
                                                   invitation_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.invitation_error}
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
        const {first_name, last_name, phone, password, cpassword, invitationCode} = this.state;
        let hasError = false
        if (password !== cpassword){
            this.setState({cpassword_error: "تایید رمز عبور اشتباه است!"})
            hasError = true
        }
        if(first_name == ''){
            this.setState({first_name_error: 'نام نمیتواند خالی باشد.'})
            hasError = true
        }
        if(last_name == ''){
            this.setState({last_name_error: 'نام خانوادگی نمیتواند خالی باشد.'})
            hasError = true
        }
        if(hasError){
            return
        }
        SignUpUserMutation(first_name, last_name, phone, password, invitationCode, (response) => {
            if (response.ok) {
                this.props.router.push('/login/?number=' + phone);
            }
            else
                this.setState({
                    phone_error: response.errors.phone,
                    password_error: response.errors.password,
                    invitation_error: response.errors.invitationCode,
                });
        })

    }

}

export default Signup;
