import React from 'react';
import {Form, FormGroup, Input, Col, Label, FormFeedback, Button} from 'reactstrap';
import EditProfileMutation from "../mutations/EditProfileMutation";
import AddBalanceMutation from "../mutations/AddBalanceMutation";
import AddAddressMutation from "../mutations/AddAddressMutation";
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
            password: '',
            cpassword: '',
            password_error: null,
            cpassword_error: null,
            firstName_error: null,
            lastName_error: null,
            address: '',
            additional_addresses: []
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
                                    <Label for="password" sm={2}>رمز عبور جدید</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="password"
                                               id="password"
                                               valid={this.state.password_error == null ? undefined : false}
                                               placeholder="رمز عبور جدید"
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
                                    <Label for="cpassword" sm={2}>تایید رمز عبور جدید</Label>
                                    <Col sm={10}>
                                        <Input className="ltr-input" type="text" name="cpassword"
                                               id="cpassword"
                                               valid={this.state.cpassword_error == null ? undefined : false}
                                               placeholder="تایید رمز عبور جدید"
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
                                    <Label for="balance" sm={2}>اعتبار</Label>
                                    <Col sm={10}>
                                        <Input type="text" 
                                                name="balance"
                                                id="balance"
                                                placeholder={props.me.balance}
                                                value={this.state.balance}
                                                disabled
                                        />
                                        <Button type="button" className="submit" outline color="success"
                                        onClick={() => this._addBalance()}>افزایش اعتبار</Button>
                                    </Col>
                                </FormGroup>
                                <div>
                                    <div>
                                        <p>{'آدرس ها:'}</p>
                                    </div>
                                    {(this.me.addresses.concat(this.state.additional_addresses)).map((address, key) => <div key={key}>
                                        <p>{address}</p>
                                    </div>)}
                                </div>

                                <FormGroup row>
                                    <Label for="address" sm={2}>آدرس</Label>
                                    <Col sm={10}>
                                        <Input type="text" 
                                                name="address"
                                                id="address"
                                                placeholder={"آدرس"}
                                                value={this.state.address}
                                                onChange={(e) => this.setState({
                                                    address: e.target.value,
                                                })}
                                        />
                                        <Button type="button" className="submit" outline color="success"
                                        onClick={() => this._addAddress()}>افزودن آدرس</Button>
                                    </Col>
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
        const {firstName, lastName, password, cpassword} = this.state;
        if (password !== cpassword){
            this.setState({cpassword_error: "تایید رمز عبور اشتباه است!"})
            return
        }
        EditProfileMutation(firstName || this.me.firstName, lastName || this.me.lastName, password, (response) => {
            if (response.ok) {
                this.props.change_balance(0, 1, firstName || this.me.firstName)
                toast('تغییرات با موفقیت ذخیره شد.');
            }
            else
                this.setState({
                    firstName_error: response.errors.firstName,
                    lastName_error: response.errors.lastName,
                    password_error: response.errors.password
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

    async _addAddress() {
        if(this.state.address == ''){
            toast('آدرس نمیتواند خالی باشد.')
            return
        }
        AddAddressMutation(this.state.address, (response) => {
            if (response.ok) {
                this.setState({additional_addresses: this.state.additional_addresses.concat([this.state.address]), address: ''})
                toast('آدرس اضافه شد.');
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
            addresses
        }
    }
`;

export default EditProfile