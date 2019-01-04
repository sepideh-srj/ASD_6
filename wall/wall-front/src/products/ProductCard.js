import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router';

class ProductCard extends Component {

    render() {
        return (
            <Col xs="12" sm="6" md="4">
                <Link to={"/products/" + this.props.product.id}>
                    <Card className="product-card">
                        <div className="product-image-container">
                            <CardImg className="product-image" width="100%"
                                     src={
                                         (this.props.product.image === null || this.props.product.image === '') ?
                                             "/static/images/default_cover.jpg" :
                                             this.props.product.image

                                     }
                                     alt="تصویر محصول"/>
                        </div>
                        <CardBody>

                            <CardTitle>{this.props.product.title}</CardTitle>
                            <CardSubtitle>{this.props.product.address}</CardSubtitle>
                            <CardText className="description">{this.props.product.description}</CardText>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        )
            ;
    }
}

export default createFragmentContainer(ProductCard, {
    product: graphql`
        fragment ProductCard_product on ProductType{
            description
            address
            category
            id
            image
            prodYear
            title
        }
    `,

});