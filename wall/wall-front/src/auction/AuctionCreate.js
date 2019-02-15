import React from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import AddAuctionMutation from "../mutations/AddAuctionMutation";
import {Category} from '../utils/constants';
import { toast } from 'react-toastify';

class AuctionCreate extends React.Component {
    constructor() {
        super();

        this.state = {
            basePrice: '',
            basePrice_error: null,
            days: 1,
            days_error: null,
            productId: null
        };
    }

    componentDidMount() {
        let id = this.props.location.query.id;
        this.setState({productId: id});
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
                                    <Label for="title" sm={2}>قیمت پایه</Label>
                                    <Col sm={10}>
                                        <Input type="number" name="base_price" id="base_price"
                                               valid={this.state.basePrice_error == null ? undefined : false}
                                               placeholder="تومان"
                                               onChange={(e) => this.setState({
                                                   basePrice: e.target.value,
                                                   basePrice_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.basePrice_error ? this.state.basePrice_error[0] : ''}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="days" sm={2}>حداکثر روزهای مزایده</Label>
                                    <Col sm={10}>
                                        <Input type="number" name="days" id="days"
                                               valid={this.state.days_error == null ? undefined : false}
                                               placeholder="روز"
                                               onChange={(e) => this.setState({
                                                   days: e.target.value,
                                                   days_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.days_error}
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
        const {basePrice, days, productId} = this.state;
        AddAuctionMutation(basePrice, days, productId, (response) => {
            if (response.ok) {
                toast('ساخته شد.')
            }
            else
                this.setState({
                    basePrice_error: response.errors.basePrice,
                    days_error: response.errors.deadline,
                });
        })
    }

}

export default AuctionCreate;
