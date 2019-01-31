import React, {Component} from 'react';
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import '../../styles/accounts/login.css';
import ActivateAccountMutation from "../mutations/ActivateAccountMutation";
import ResendCodeMutation from "../mutations/ResendCodeMutation";
import {ToastContainer, toast} from 'react-toastify';

class Activate extends Component {
    constructor() {
        super();

        this.state = {
            code: '',
            activate_result: '',
            valid: undefined
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
                                    <Label for="code" sm={2}>کد ارسال شده</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="code" name="code"
                                               id="code"
                                               valid={this.state.valid}
                                               placeholder="کد ارسالی"
                                               onChange={(e) => this.setState({code: e.target.value})}
                                        />
                                    </Col>
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.activate_result}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Button type="button" className="submit" outline color="primary"
                                        onClick={() => this._confirm()}>فعالسازی</Button>
                                <Button type="button" className="submit" outline color="success"
                                        onClick={() => this.resend()}>ارسال دوباره کد</Button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async _confirm() {
        const {code} = this.state;
        ActivateAccountMutation(code, (response) => {
            if (response.ok) {
                window.location.replace('/');
            }
            else
                this.setState({valid: false, activate_result: response.errors.nonFieldErrors});
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

export default Activate;
