import React from 'react';
import {Category} from '../utils/constants';
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';
import Countdown from "react-countdown-now";
import AuctionList from "./AuctionList";
import SuggestPriceMutation from "../mutations/SuggestPriceMutation";

class AuctionProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            auction_confirm: false
        };
    }

    async auction() {
        SuggestPriceMutation(this.props.location.state.product.id, (response) => {
            if (response.ok) {
                this.props.router.push('/');
                toast('کالای مورد نظر خریده شد.');
            }
            else
                toast(response.errors.product || response.errors.nonFieldErrors[0])
        });
    }

    render() {
        let {image, title, address, category, subCategory, seller, auction} = this.props.location.state.product;
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
                                </div>

                                <div className="product-address">وقت باقی‌مانده:
                                    <Countdown
                                        date={new Date(parseInt(auction['deadline']))}
                                        intervalDelay={0}
                                    />
                                </div>

                                {<AuctionList auction={auction} is_seller={is_seller}
                                              change_balance={this.props.change_balance}/>}
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
                                    <span>{auction.basePrice}</span>
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