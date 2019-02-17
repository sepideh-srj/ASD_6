import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Login from './accounts/Login';
import Activate from './accounts/Activate';
import Signup from './accounts/Signup';
import ProductListQueryRenderer from './products/ProductListQueryRenderer';
import BaseNavbarQueryRenderer from "./BaseNavbarQueryRenderer";
import CreateProduct from "./products/CreateProduct";
import CreateRequest from "./products/CreateRequest";
import ProductRenderer from "./products/ProductRenderer";
import UserProfile from "./profile/UserProfile";
import PublicProfileRenderer from "./public/PublicProfileRenderer";
import EditProfile from "./profile/EditProfile";
import BoughtListRenderer from "./profile/BoughtListRenderer";
import SellingListRenderer from "./profile/SellingListRenderer";
import RequestListRenderer from "./profile/RequestListRenderer";
import MessageRenderer from "./profile/MessageRenderer";
import AuctionCreate from "./auction/AuctionCreate";
import Invitation from "./profile/Invitation";
import AuctionProduct from "./auction/AuctionProduct";

export default (
    <Route path="/" components={BaseNavbarQueryRenderer}>
        <IndexRoute components={ProductListQueryRenderer}/>

        <Route path="/signup" components={Signup}/>
        <Route path="/login" components={Login}/>
        <Route path="/activate" components={Activate}/>

        <Route path="/create-product" components={CreateProduct}/>
        <Route path="/create-request" components={CreateRequest}/>
        <Route path="/products/:id" components={ProductRenderer}/>

        <Route path="/create-auction/" components={AuctionCreate}/>
        <Route path="/product-auction/" components={AuctionProduct}/>

        <Route path="/profile/:username" components={UserProfile}>
            <IndexRoute components={EditProfile}/>
            <Route path='invitation' components={Invitation}/>
            <Route path='/bought/:username' components={BoughtListRenderer}/>
            <Route path='/selling/:username' components={SellingListRenderer}/>
            <Route path='/request/:username' components={RequestListRenderer}/>
            <Route path='/message/:username' components={MessageRenderer}/>

        </Route>
        <Route path="/public/:username" components={PublicProfileRenderer}/>
    </Route>
);