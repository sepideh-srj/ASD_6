import React, {Component} from 'react';
import {Button, Card, Col, Form, FormFeedback, Input} from "reactstrap";
import SuggestPriceMutation from "../mutations/SuggestPriceMutation";
import {toast} from "react-toastify";
import AuctionCard from "./AuctionCard";

class AuctionList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            price: '',
            price_error: null
        };
    }

    componentDidMount(){
        alert(JSON.stringify(this.props))
    }

    render() {
        return (
            <Card>
                <Col sm={12}>
                    <span>قیمت های پیشنهادی</span>
                </Col>
                <Col sm={12}>
                    <Form>
                        {(JSON.parse(this.props.auction.prices)).map((price, key) => <AuctionCard
                            key={key}
                            price={price}/>)}

                        <Input type="auction"
                               name="text"
                               id="auction"
                               placeholder={"قیمت (تومان)"}
                               valid={this.state.price_error == null ? undefined : false}
                               onChange={(e) => this.setState({
                                   price: e.target.value,
                                   price_error: null
                               })}
                               value={this.state.price}
                        />

                        <Button type="button" className="submit" outline color="primary"
                                disabled={this.props.is_seller}
                                onClick={() => this._confirm()}>ثبت</Button>
                        <Col sm={2}/>
                        <Col sm={10}>
                            <FormFeedback>
                                {this.state.price_error}
                            </FormFeedback>
                        </Col>
                    </Form>
                </Col>
            </Card>
        );
    }

    async _confirm() {
        if (this.state.price === '') {
            this.setState({price_error: 'قیمت نمی‌تواند خالی باشد!'});
            return;
        }

        if (this.state.price_error) {
            return;
        }
        
        SuggestPriceMutation(this.props.auction.id, this.state.price, (response) => {
            if (response.ok) {
                toast('قمیت پیشنهادی شما با موفقیت ثبت شد.');
                this.setState({
                    price: '',
                    price_error: null
                })
            }
            else
                this.setState({
                    price_error: response.errors.price,
                });
        })
    }
}

export default AuctionList