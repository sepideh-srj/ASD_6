import React, {Component} from 'react';
import {Col, FormGroup, Label} from "reactstrap";

class AuctionCard extends Component {

    render() {
        let {user, price} = this.props.price;

        return (
            <FormGroup row>
                <Label for="author" sm={2}>{user.firstName.concat(' ' + user.lastName)}</Label>
                <Col sm={10}>
                    <Label for="price">{price} تومان</Label>
                </Col>
            </FormGroup>
        )
    }
}

export default AuctionCard;