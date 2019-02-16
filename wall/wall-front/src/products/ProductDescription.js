import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Category} from '../utils/constants';
import {Button} from 'reactstrap';
import ProductRemoveMutation from "../mutations/ProductRemoveMutation";
import BuyProductMutation from "../mutations/BuyProductMutation";
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';
import CommentList from "./CommentList";

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

    async buy() {
        BuyProductMutation(this.props.product.id, (response) => {
            if (response.ok) {
                this.props.router.push('/');
                toast('کالای مورد نظر خریده شد.');
            }
            else
                toast(response.errors.product || response.errors.nonFieldErrors[0])
        });
    }

    render() {
        let button_text = 'خرید';
        let button_state = false;
        let seller_button = null;
        let auction_button1 = null;
        let {image, title, address, category, subCategory, description, seller, auction, comments, price} = this.props.product;
        let is_seller = seller.id === localStorage.getItem('username');
        let logged_in = localStorage.getItem('logged') === 'true';


        alert(JSON.stringify(auction));

        if (is_seller) {
            if (this.state.remove_confirm)
                seller_button = <div>
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
                seller_button = <Button outline color="primary"
                                        onClick={() => (this.setState({remove_confirm: true}))}>حذف محصول</Button>;

            auction_button1 = <Button outline color="primary"
                                      onClick={() => this.props.router.push({
                                          pathname: '/create-auction/',
                                          search: '',
                                          state: {product: this.props.product}
                                      })}>گذاشتن مزایده</Button>;

        }

        let auction_button2 = <Button outline color="primary"
                                      onClick={() => this.props.router.push({
                                          pathname: '/product-auction/',
                                          search: '',
                                          state: {product: this.props.product}
                                      })}>دیدن مزایده</Button>;

        return (
            <div className="content container">
                <ToastContainer/>
                <div className="row">
                    <div className="col col-md-12 order-md-1">
                        <div className="product-description">
                            <img className="product-image"
                                 src={image || "/static/images/default_cover.jpg"}/>
                            <div className="right-side">
                                <div className="product-title">{title}</div>
                                <div className="product-address">آدرس:
                                    <span> {address}</span>
                                </div>
                                <div className="product-category">دسته‌بندی:
                                    {Category[category] && Category[category].sub[subCategory] &&
                                    <span> {Category[category].value.concat(' > ' + Category[category].sub[subCategory].value)}</span>
                                    }
                                </div>
                                <div className="product-description">{description}</div>
                                {<CommentList comments={comments} product={this.props.product}/>}
                            </div>
                            <div className="bottom-part">
                                <div className="product-seller">صاحب محصول:
                                    <span>   </span>
                                    <Link to={`/public/${seller.id}`}>
                                        {seller.firstName ?
                                            <span>{seller.firstName} {seller.lastName}</span> :
                                            <span>{seller.id}</span>
                                        }
                                    </Link>

                                </div>
                                <div className="product-seller">قیمت:
                                    <span>   </span>
                                    <span>{price}</span>
                                </div>
                                <div className="row">
                                    <div className="product-auction-btn">
                                        {
                                            (logged_in ?
                                                (auction ? auction_button2 : (is_seller ? auction_button1 : null)) : null)
                                        }
                                    </div>
                                    <div>
                                        {
                                            (is_seller ? seller_button :
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
            subCategory
            image
            seller{
                firstName
                lastName
                id
            }
            prodYear
            price
            comments{
                text
                author{
                    firstName
                    lastName
                }
            }
            title
            auction{
                id
                basePrice
                deadline
                prices
                # {
                #     price
                #     user{
                #         firstName
                #         lastName
                #         phone
                #     }
                # }
            }
        }
    `
});