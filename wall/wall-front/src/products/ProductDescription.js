import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Category} from '../utils/constants';
import {Button} from 'reactstrap';
import ProductRemoveMutation from "../mutations/ProductRemoveMutation";
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';

class ProductDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            remove_confirm: false
        }
    }

    async remove_product() {
        ProductRemoveMutation(this.props.product.id, (response) => {
            if (response.ok) {
                this.props.router.push('/')
            }
            else
                toast(response.errors.product || response.errors.nonFieldErrors[0])
        });
    }

    async buy(){

    }

    render() {
        let button_text = 'خرید';
        let button_state = false;
        let is_owner = false;
        let owner_button = null;
        if (is_owner) {
            if (this.state.remove_confirm)
                owner_button = <div>
                    <Button
                        color='primary'
                        onClick={() => this.setState({remove_confirm: false})}>بازگشت
                    </Button>
                    <Button
                        color='danger'
                        onClick={this.remove_product.bind(this)}>حذف
                    </Button>
                </div>;
            else
                owner_button = <Button outline color="primary"
                                       onClick={() => (this.setState({remove_confirm: true}))}>حذف
                    محصول</Button>;
        }
        return (
            <div className="content container">
                <ToastContainer/>
                <div className="row">
                    <div className="col col-md-12 order-md-1">
                        <div className="product-description">
                            <img className="product-image"
                                 src={this.props.product.image || "/static/images/default_cover.jpg"}/>
                            <div className="right-side">
                                <div className="product-title">{this.props.product.title}</div>
                                <div className="product-address">آدرس:
                                    <span> {this.props.product.address}</span>
                                </div>
                                <div className="product-category">دسته‌بندی:
                                    <span> {Category[this.props.product.category].value}</span>
                                </div>
                                <div className="product-description">{this.props.product.description}</div>
                            </div>
                            <div className="bottom-part">
                                <div className="product-owner">صاحب محصول:
                                    <span>   </span>
                                    <Link to={`/public/${this.props.product.owner.id}`}>
                                        {this.props.product.owner.firstName ?
                                            <span>{this.props.product.owner.firstName} {this.props.product.owner.lastName}</span> :
                                            <span>{this.props.product.owner.id}</span>
                                        }
                                    </Link>

                                </div>
                                {
                                    (is_owner ? owner_button :
                                            this.props.code === "" ? "" :
                                                <Button outline color="primary"
                                                        disabled={button_state}
                                                        onClick={this.buy.bind(this)}>{button_text}</Button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(ProductDescription, {
    product: graphql`
        fragment ProductDescription_product on ProductType{
            id
            description
            address
            category
            image
            owner{
                firstName
                lastName
                id
            }
            prodYear
            title
        }
    `
});