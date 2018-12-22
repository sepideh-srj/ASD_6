import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Login from './accounts/Login';
import Signup from './accounts/Signup';
import BaseNavbarQueryRenderer from "./BaseNavbarQueryRenderer";
import UserProfile from "./profile/UserProfile";
import PublicProfileRenderer from "./public/PublicProfileRenderer";
import EditProfile from "./profile/EditProfile";

export default (
    <Route path="/" components={BaseNavbarQueryRenderer}>
        <IndexRoute components={()=><div/>}/>

        <Route path="/signup" components={Signup}/>
        <Route path="/login" components={Login}/>

        <Route path="/profile/:username" components={UserProfile}>
            <IndexRoute components={EditProfile}/>

        </Route>
        <Route path="/public/:username" components={PublicProfileRenderer}/>
    </Route>
);