import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router';

export default class RequestList extends React.Component {

    componentDidMount() {
        window.scrollTo(0, this.props.position);
        if (this.props.message !== '')
            toast(this.props.message)
    }

    render() {
        return (
            <div className="tab-body-wrapper">
                <div className="table">
                    <ToastContainer/>
                    <div className="table-row header">
                        <div className="cell">عنوان محصول</div>
                    </div>
                    {this.props.requests.map(p =>
                            <div key={p.id} className="table-row">
                                <div className="cell">
                                    {p.title}
                                </div>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}