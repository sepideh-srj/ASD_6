import React, {Component} from 'react';
import {Button, Card, Col, Form, FormFeedback, Input} from "reactstrap";
import SuggestPriceMutation from "../mutations/SuggestPriceMutation";
import AddBalanceMutation from "../mutations/AddBalanceMutation";
import {toast} from "react-toastify";
import AuctionCard from "./AuctionCard";

class AuctionList extends Component {

    constructor(props) {
        super(props);

        let auction = Object.assign({}, props.auction);
        auction.prices = JSON.parse(auction.prices);

        this.state = {
            price: '',
            price_error: null,
            auction
        };
    }

    render() {
        return (
            <Card>
                <Col sm={12}>
                    <span>قیمت های پیشنهادی</span>
                </Col>
                <Col sm={12}>
                    <Form>
                        {this.state.auction.prices.map((price, key) => <AuctionCard
                            key={key}
                            price={price}/>)}

                        {
                            this.props.is_seller ? null :
                                <div>
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
                                            onClick={() => this._confirm()}>ثبت</Button>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.price_error}
                                        </FormFeedback>
                                    </Col>
                                </div>
                        }
                    </Form>
                </Col>
            </Card>
        );
    }

    async _addBalance(amount) {
        AddBalanceMutation(amount, (response) => {
            if (response.ok) {
                this.setState({balance: '' + this.props.change_balance(amount, 1)});
                toast('اعتبار شما افزایش یافت.');
            }
        })
    }

    async _confirm() {
        let {price, price_error, auction} = this.state;
        let balance = localStorage.getItem('balance');

        if (price === '') {
            this.setState({price_error: 'قیمت نمی‌تواند خالی باشد!'});
            return;
        } else if (parseInt(price) < auction['basePrice']) {
            this.setState({price_error: 'باید حداقل قیمت پایه را پیشنهاد دهید!'});
            return;
        } else if (balance < auction['basePrice']) {
            toast('لطفا حساب خود را شارژ کنید.');
            return;
        }

        if (price_error) {
            return;
        }

        SuggestPriceMutation(auction.id, price, (response) => {
                if (response.ok) {
                    toast('قمیت پیشنهادی شما با موفقیت ثبت شد.');

                    let index = null;
                    auction.prices.map((price, key) => {
                        if (price['user'].phone === localStorage.getItem('phone')) {
                            index = key;
                        }
                    });

                    if (index != null) {
                        auction.prices[index]['price'] = price;

                        this.setState({auction});
                    } else {
                        this._addBalance(Math.floor(-0.1 * auction['basePrice']));

                        auction.prices.push({
                            'user': {
                                'id': localStorage.getItem('username'),
                                'phone': localStorage.getItem('phone'),
                                'balance': localStorage.getItem('balance'),
                                'firstName': localStorage.getItem('firstName'),
                                'lastName': localStorage.getItem('lastName')
                            },
                            'price': price
                        })
                    }

                    this.setState({
                        price: '',
                        price_error: null
                    });
                }
                else
                    this.setState({
                        price_error: response.errors.price,
                    });
            }
        )
    }
}

export default AuctionList