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

                {/* <div className="cell">
                                    <span>
                                        <Input type="text" 
                                                    name="text"
                                                    id="text"
                                                    placeholder={"متن"}
                                                    value={this.state.text}
                                                    disabled
                                            />
                                    </span>
                                    <span>
                                        <Button type="button" className="submit" outline color="success"
                                        onClick={() => this.send()}>ارسال</Button></span>
                                </div> */}

                <div className="table">
                    <ToastContainer/>
                    <div className="table-row header">
                        <div className="cell">وضعیت</div>
                        <div className="cell">نام مخاصب</div>
                        <div className="cell">پیام</div>
                    </div>
                    {this.props.messages.map(p =>{
                        let contact = p.sender
                        
                        let m = "دریافت شده"
                        if(contact.phone === this.props.phone){
                            contact = p.receiver
                            m = "فرستاده شده"
                        }
                        return    <div key={p.id} className="table-row">
                                <div className="cell">
                                    {m}
                                </div>
                                <div className="cell">
                                    {contact.firstName + ' ' + contact.lastName}
                                </div>
                                <div className="cell">
                                    {p.text}
                                </div>
                            </div>
                        }
                    )}
                </div>
            </div>
        )
    }
}