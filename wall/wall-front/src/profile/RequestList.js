import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';

export default class RequestList extends React.Component {

    componentDidMount() {
        window.scrollTo(0, this.props.position);
        if (this.props.message !== '')
            toast(this.props.message)
        // alert(JSON.stringify(this.props.products))
    }

    render() {
        return (
            <div className="tab-body-wrapper">
                <div className="table">
                    <ToastContainer/>
                    <div className="table-row header">
                        <div className="cell">عنوان محصول</div>
                        <div className="cell">دسته‌بندی</div>
                        <div className="cell">درخواست دهنده</div>
                        <div className="cell">وضعیت درخواست</div>
                        <div className="cell">رد</div>
                        <div className="cell">تایید</div>
                    </div>
                    {/* {this.props.products.edges.map(product =>
                        product.node.borrowRequests.edges.map((req) =>
                            <div key={req.node.id} className="table-row">
                                <div className="cell">
                                    {req.node.product.title}
                                </div>
                                <div className="cell">
                                    {req.node.product.category}
                                </div>
                                <Link to={`/public/${req.node.borrower.id}`}>
                                    {req.node.borrower.firstName ?
                                        <div className="cell">
                                            {req.node.borrower.firstName} {req.node.borrower.lastName}
                                        </div> :
                                        <div className="cell">
                                            {req.node.borrower.id}
                                        </div>
                                    }
                                </Link>
                                <div className="cell">
                                    {req.node.state}
                                </div>
                            </div>
                        )
                    )} TODO*/}
                </div>
            </div>
        )

    }
}