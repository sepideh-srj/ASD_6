import React from 'react';
import {Form, FormGroup, Input, Col, Label, FormFeedback, Button} from 'reactstrap';
import EditProfileMutation from "../mutations/EditProfileMutation";
import AddBalanceMutation from "../mutations/AddBalanceMutation";
import {ToastContainer, toast} from 'react-toastify';

import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            balance: '',
            firstName_error: null,
            lastName_error: null,
        };

        this.me = {}
    }

    render() {

 return <QueryRenderer
                environment={environment}
                query={ProfileInfoQuery}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            this.me = props.me;
                            return (
                                <div className="tab-body-wrapper">
                                    <ToastContainer/>
                                    <Col className="explanation" sm={12}>
                                        <span>اطلاعات خود را تکمیل کنید</span>
                                    </Col>
                    
                                    <Col sm={12}>
                    
                                        <Form>
                                            <FormGroup row>
                                                <Label for="firstName" sm={2}>نام</Label>
                                                <Col sm={10}>
                                                    <Input type="text" name="name"
                                                           id="firstName"
                                                           valid={this.state.firstName_error == null ? undefined : false}
                                                           placeholder={props.me.firstName || "نام"}
                                                           onChange={(e) => this.setState({
                                                               firstName: e.target.value,
                                                               firstName_error: null
                                                           })}
                                                    />
                                                </Col>
                                                <Col sm={2}/>
                                                <Col sm={10}>
                                                    <FormFeedback>
                                                        {this.state.firstName_error}
                                                    </FormFeedback>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="lastName" sm={2}>نام خانوادگی</Label>
                                                <Col sm={10}>
                                                    <Input type="text" name="lastName"
                                                           id="lastName"
                                                           valid={this.state.lastName_error == null ? undefined : false}
                                                           placeholder={props.me.lastName || "نام خانوادگی"}
                                                           onChange={(e) => this.setState({
                                                               lastName: e.target.value,
                                                               lastName_error: null
                                                           })}
                                                    />
                                                </Col>
                                                <Col sm={2}/>
                                                <Col sm={10}>
                                                    <FormFeedback>
                                                        {this.state.lastName_error}
                                                    </FormFeedback>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="phone" sm={2}>شماره موبایل</Label>
                                                <Col sm={10}>
                                                    <Input type="text" 
                                                           name="phone"
                                                           id="phone"
                                                           value={props.me.phone.substring(1)}
                                                           dir="rtl"
                                                           disabled
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="balance" sm={2}>اعتبار</Label>
                                                <Col sm={10}>
                                                    <Input type="text" 
                                                           name="balance"
                                                           id="balance"
                                                           placeholder={props.me.balance}
                                                           value={this.state.balance}
                                                           disabled
                                                    />
                                                </Col>
                                                <Button type="button" className="submit" outline color="success"
                                                    onClick={() => this._addBalance()}>افزایش اعتبار</Button>
                                            </FormGroup>
                    
                                            <Button type="button" className="submit" outline color="primary"
                                                    onClick={() => this._confirm()}>ثبت</Button>
                                        </Form>
                                    </Col>
                                </div>
                            )



                        }
                        return <div>Loading</div>
                    }}
            />
    }

    async _confirm() {
        const {firstName, lastName} = this.state;
        EditProfileMutation(firstName || this.me.firstName, lastName || this.me.lastName, (response) => {
            if (response.ok) {
                this.props.change_balance(0, 1, firstName || this.me.firstName)
                toast('تغییرات با موفقیت ذخیره شد.');
            }
            else
                this.setState({
                    firstName_error: response.errors.firstName,
                    lastName_error: response.errors.lastName,
                });
        })
    }

    async _addBalance() {
        AddBalanceMutation((response) => {
            if (response.ok) {
                this.setState({balance: ''+this.props.change_balance(10, 1)})
                toast('اعتبار شما افزایش یافت.');
            }
        })
    }
}

const ProfileInfoQuery = graphql`
    query EditProfileQuery{
        me{
            firstName
            lastName
            phone
            balance
        }
    }
`;

export default EditProfile