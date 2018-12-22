import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import '../../styles/profile/public_profile.css';

class PublicProfile extends React.Component {

    render() {
        return (
            <div className="container profile-container">
                <div className="row justify-content-center">
                    <div className=" col-md-9 col-lg-9 ">

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">مشخصات کاربر</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>نام</td>
                                        <td>{this.props.user.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>نام خانوادگی</td>
                                        <td>{this.props.user.lastName}</td>
                                    </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(PublicProfile, {
    user: graphql`
        fragment PublicProfile_user on UserType{
            firstName
            lastName
        }
    `
})