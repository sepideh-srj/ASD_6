import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Category} from '../utils/constants';
import {Button} from 'reactstrap';
// import RequestBorrowMutation from "../mutations/RequestBorrowMutation";
import ProductRemoveMutation from "../mutations/ProductRemoveMutation";
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';

class ProductDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            borrow_state: 'none',
            remove_confirm: false
        }
    }

    componentDidMount() {
        this.setState({
            borrow_state: this.props.product.state
        })
    }

    async request_borrow() {
        RequestBorrowMutation(this.props.product.id, (response) => {
            if (response.ok) {
                this.props.change_balance(response.user.balance);
                this.setState({borrow_state: 'REQUESTED'})
            }
            else
                toast(response.errors.product || response.errors.nonFieldErrors[0])
        })
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

    render() {
        let button_text = 'درخواست خرید';
        let button_state = false;
        let is_requested = (this.state.borrow_state === 'REQUESTED');
        let is_owner = (this.state.borrow_state === 'OWNER');
        if (is_requested) {
            button_text = 'در حال بررسی درخواست';
            button_state = true;
        }
        let owner_button = null;
        if (is_owner) {
            if (this.state.remove_confirm)
                owner_button = <div>
                    <Button color='primary' onClick={() => this.setState({remove_confirm: false})}>بازگشت </Button>
                    <Button color='danger' onClick={this.remove_product.bind(this)}>حذف </Button>
                </div>;
            else
                owner_button = <Button outline color="primary"
                                       onClick={() => (this.setState({remove_confirm: true}))}>حذف کتاب</Button>;
        }
        return (
            <div className="content container">
                <ToastContainer/>
                <div className="row">
                    <div className="col col-md-12 order-md-1">
                        <div className="product-desc">
                            <img className="product-image"
                                 src={this.props.product.image || "/static/images/default_cover.jpg"}/>
                            <div className="right-side">
                                <div className="product-title">{this.props.product.title}</div>
                                <div className="product-city">شهر:
                                    <span> {this.props.product.city}</span>
                                </div>
                                <div className="product-category">دسته‌بندی:
                                    <span> {Category[this.props.category.genre].value}</span>
                                </div>
                                <div className="product-description">{this.props.product.description}</div>
                            </div>
                            <div className="bottom-part">
                                <div className="lender">صاحب محصول:
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
                                                        onClick={this.request_borrow.bind(this)}>{button_text}</Button>
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
            city
            category
            image
            owner{
                firstName
                lastName
                id
            }
            proYear
            title
            state
        }
    `
});