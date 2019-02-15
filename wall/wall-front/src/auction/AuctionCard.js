import React, {Component} from 'react';
import {Col, FormGroup, Label} from "reactstrap";

class AuctionCard extends Component {

    render() {
        let {author, price} = this.props.auction;

        return (
            <FormGroup row>
                <Label for="author" sm={2}>{author.firstName.concat(' ' + author.lastName)}</Label>
                <Col sm={10}>
                    <Label for="price">{price} تومان</Label>
                </Col>
            </FormGroup>
        )
    }
}

export default AuctionCard;