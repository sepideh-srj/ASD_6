import React from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import AddRequestMutation from "../mutations/AddRequestMutation";
import {Category} from '../utils/constants';
import AddressMenu from './AddressMenu'

class CreateProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            title_error: null,
            disabled: false
        };

    }

    render() {
        let logged_in = localStorage.getItem('logged');
        if (logged_in === 'false')
            window.location.replace('/');
        return (
            <div className="content container">
                <div className="row">

                    <div className="col col-md-9 order-md-1">
                        <div className="login-form-container">
                            <Form>
                                <FormGroup row>
                                    <Label for="title" sm={2}>عنوان</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="title" id="title"
                                               valid={this.state.title_error == null ? undefined : false}
                                               placeholder="عنوان"
                                               onChange={(e) => this.setState({
                                                   title: e.target.value,
                                                   title_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.title_error ? this.state.title_error[0] : ''}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Button className="submit" outline color="primary"
                                        disabled={this.state.disabled}
                                        onClick={() => this._confirm()}>ثبت</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async _confirm() {
        const {title} = this.state;
        AddRequestMutation(title, (response) => {
            if (response.ok) {
                window.location.replace('/');
            }
            else
                this.setState({
                    title_error: response.errors.title,
                });
        })
    }
    
}

export default CreateProduct;
