import React, {Component} from 'react';
import {Col, FormGroup, Label} from "reactstrap";

class CommentCard extends Component {

    render() {
        let {author, text} = this.props.comment;

        return (
            <FormGroup row>
                <Label for="author" sm={2}>{author.firstName.concat(' ' + author.lastName)}</Label>
                <Col sm={10}>
                    <Label for="text">{text}</Label>
                </Col>
            </FormGroup>
        )
    }
}

export default CommentCard;