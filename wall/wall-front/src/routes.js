import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Login from './accounts/Login';
import Activate from './accounts/Activate';
import Signup from './accounts/Signup';
import ProductListQueryRenderer from './products/ProductListQueryRenderer';
import BaseNavbarQueryRenderer from "./BaseNavbarQueryRenderer";
import CreateProduct from "./products/CreateProduct";
import ProductRenderer from "./products/ProductRenderer";
import UserProfile from "./profile/UserProfile";
import PublicProfileRenderer from "./public/PublicProfileRenderer";
import EditProfile from "./profile/EditProfile";
import RequestListRenderer from "./profile/RequestListRenderer";

export default (
    <Route path="/" components={BaseNavbarQueryRenderer}>
        <IndexRoute components={ProductListQueryRenderer}/>

        <Route path="/signup" components={Signup}/>
        <Route path="/login" components={Login}/>
        <Route path="/activate" components={Activate}/>

        <Route path="/create-product" components={CreateProduct}/>
        <Route path="/products/:id" components={ProductRenderer}/>

        <Route path="/profile/:username" components={UserProfile}>
            <IndexRoute components={EditProfile}/>
            <Route path='/bought/:username' components={RequestListRenderer}/>
            <Route path='/selling/:username' components={RequestListRenderer}/>

        </Route>
        <Route path="/public/:username" components={PublicProfileRenderer}/>
    </Route>
);