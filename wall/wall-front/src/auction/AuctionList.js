import React, {Component} from 'react';
import {Button, Card, Col, Form, FormFeedback, Input} from "reactstrap";
import AddCommentMutation from "../mutations/AddCommentMutation";
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

    render() {
        return (
            <Card>
                <Col sm={12}>
                    <span>قیمت های پیشنهادی</span>
                </Col>
                <Col sm={12}>
                    <Form>
                        {(this.props.auctions).map((auction, key) => <AuctionCard
                            key={key}
                            auction={auction}/>)}

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
                    </Form>
                </Col>
            </Card>
        );
    }

    async _confirm() {
        if (this.state.comment === '') {
            this.setState({comment_error: 'متن نظر نمی‌تواند خالی باشد!'});
            return;
        }

        if (this.state.comment_error) {
            return;
        }

        AddCommentMutation(this.state.comment, this.props.product.id, (response) => {
            if (response.ok) {
                toast('نظر شما با موفقیت ثبت شد.');
                this.setState({
                    comment: '',
                    comment_error: null,
                    additional_comments: this.state.additional_comments.concat(response.comment)
                })
            }
            else
                this.setState({
                    comment_error: response.errors.comment,
                });
        })
    }
}

export default AuctionList