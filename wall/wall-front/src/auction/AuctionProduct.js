import React from 'react';
import {Category} from '../utils/constants';
import ProductRemoveMutation from "../mutations/ProductRemoveMutation";
import BuyProductMutation from "../mutations/BuyProductMutation";
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';

class AuctionProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            remove_confirm: false
        };

        this.p = {
            id: '123',
            description: 'salam',
            address: 'tehran',
            category: 'DIGITAL_GOODS',
            subCategory: 'MOBILE_PHONE',
            image: null,
            seller: {
                firstName: 'Alireza',
                lastName: 'Naeiji',
                id: '1'
            },
            prodYear: 1393,
            price: 1100,
            comments: [{
                text: 'salam',
                author: {
                    firstName: 'Alireza',
                    lastName: 'Naeiji'
                }
            },],
            title: 'boooooook',
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
        let seller_button = null;
        let auction_button = null;
        let {id, image, title, address, category, subCategory, description, seller, comments, price} = this.p;
        let is_seller = seller.id === localStorage.getItem('username');

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
                                </div>g
                                <div className="product-description">{description}</div>
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
                                <div className="product-seller">قیمت پایه:
                                    <span>   </span>
                                    <span>{price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuctionProduct;