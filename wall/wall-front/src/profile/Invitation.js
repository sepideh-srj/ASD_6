import React from 'react';
import {Button, Col, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import InviteMutation from "../mutations/InviteMutation";

class Invitation extends React.Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            phone_error: null,
            message_class: 'hidden'
        }
    }

    render() {
        return (
            <div className="tab-body-wrapper">

                <Col className="explanation" sm={12}>
                    <span>شما از طریق کد دعوت</span>
                    <span>  {this.props.invitation_code}  </span>
                    <span>می توانید دوستانتان را به وال دعوت کنید.</span>
                </Col>

                <Col sm={12}>

                    <FormGroup>
                        <Label sm={2} for="phone">شماره موبایل</Label>
                        <Col sm={8}>
                            <Input className="ltr-input" type="phone" name="phone" id="phone"
                                   placeholder="۰۹۱۲۹۳۰۵۰۵۳"
                                   valid={this.state.phone_error == null ? undefined : false}
                                   value={this.state.phone}
                                   onChange={(e) => this.setState({
                                       phone: e.target.value,
                                       phone_error: null
                                   })}
                            />
                        </Col>
                        <Col sm={2}>
                            <Button outline color="primary" onClick={this._send.bind(this)}>ارسال
                                پیامک</Button>
                        </Col>
                        <Col sm={2}/>

                        <Col sm={10}>
                            <FormFeedback>
                                {this.state.phone_error}
                            </FormFeedback>
                        </Col>

                    </FormGroup>
                    <Col sm={2}/>
                    {this.state.phone_message === '' ? '' : <Col sm={10}>
                        <div className={"success-message " + this.state.message_class}>
                            پیامک ارسال شد
                        </div>
                    </Col>}

                </Col>
            </div>
        )
    }

    async _send() {
        InviteMutation(this.state.phone, (response) => {
            if (response.ok) {
                this.setState({phone: '', message_class: ''});
                setTimeout(() => {
                    this.setState({message_class: 'hidden'})
                }, 2000)
            }
            else
                this.setState({
                    name_error: response.errors.username,
                    password_error: response.errors.password,
                    phone_error: response.errors.phone,
                    invitation_error: response.errors.invitation,
                });
        })

    }
}

export default Invitation