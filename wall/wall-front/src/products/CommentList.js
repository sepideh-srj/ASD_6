import React, {Component} from 'react';
import CommentCard from "./CommentCard";
import {Button, Card, Col, Form, FormFeedback, Input} from "reactstrap";
import AddCommentMutation from "../mutations/AddCommentMutation";
import {toast} from "react-toastify";

class CommentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            comment_error: null,
            additional_comments: []
        };
    }

    render() {
        return (
            <Card className="Comments">
                <Col className="comments" sm={12}>
                    <span>نظرات</span>
                </Col>
                <Col sm={12}>
                    <Form>
                        {(this.props.comments.concat(this.state.additional_comments)).map((comment, key) => <CommentCard
                            key={key}
                            comment={comment}/>)}

                        <Input type="comment"
                               name="text"
                               id="comment"
                               placeholder={"نظر"}
                               valid={this.state.comment_error == null ? undefined : false}
                               onChange={(e) => this.setState({
                                   comment: e.target.value,
                                   comment_error: null
                               })}
                               value={this.state.comment}
                        />

                        <Button type="button" className="submit" outline color="primary"
                                onClick={() => this._confirm()}>ثبت</Button>
                        <Col sm={2}/>
                        <Col sm={10}>
                            <FormFeedback>
                                {this.state.comment_error}
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

export default CommentList