import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import '../../styles/profile/public_profile.css';
import {Form, FormGroup, Input, Col, Label, FormFeedback, Button} from 'reactstrap';
import SendMessageMutation from "../mutations/SendMessageMutation"
import {ToastContainer, toast} from 'react-toastify';
class PublicProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            message_error: null,
        };
    }

    async _confirm() {
        const {message} = this.state;
        if (message == ""){
            this.setState({message_error: "متن پیام نمیتواند خالی باشد!"})
            return
        }
        SendMessageMutation(message, this.props.user.id, (response) => {
            if (response.ok) {
                toast('پیام با موفقیت ارسال شد.');
            }
            else
                this.setState({
                    message_error: response.errors.firstName,
                });
        })
    }

    render() {
        return (
            <div className="container profile-container">
                <div className="row justify-content-center">
                    <div className=" col-md-9 col-lg-9 ">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">مشخصات کاربر</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>نام</td>
                                        <td>{this.props.user.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>نام خانوادگی</td>
                                        <td>{this.props.user.lastName}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <ToastContainer/>
                                <Col className="explanation" sm={12}>
                                        <span>پیام به کاربر</span>
                                    </Col>




                    <Col sm={12}>
                    
                    <Form>
                        <FormGroup row>
                            <Label for="message" sm={2}>متن پیام</Label>
                            <Col sm={10}>
                                <Input type="text" name="name"
                                       id="firstName"
                                       valid={this.state.message_error == null ? undefined : false}
                                       placeholder={"متن پیام"}
                                       onChange={(e) => this.setState({
                                           message: e.target.value,
                                           message_error: null
                                       })}
                                />
                            </Col>
                            <Col sm={2}/>
                            <Col sm={10}>
                                <FormFeedback>
                                    {this.state.message_error}
                                </FormFeedback>
                            </Col>
                        </FormGroup>
            <Button type="button" className="submit" outline color="primary"
                    onClick={() => this._confirm()}>ارسال</Button>
        </Form>
    </Col>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(PublicProfile, {
    user: graphql`
        fragment PublicProfile_user on UserType{
            id
            phone
            firstName
            lastName
        }
    `
})