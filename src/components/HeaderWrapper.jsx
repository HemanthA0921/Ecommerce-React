import React from "react";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { WishList } from "./WishList";
import { Cart } from "./Cart";
import { MyAccount } from "./MyAccount";
import "../styles/HeaderWrapper.css";

export const HeaderWrapper = ({ className }) => {
    return (
        <div className={`header-wrapper ${className}`}>
            <div className="frame-2">
                <Logo />
                <div className="frame-3">
                    <Header header="header-home-hover" />
                    <Header header="contact" />
                    <Header header="about" />
                    <Header header="sign-up" />
                </div>
            </div>
            <div className="frame-4">
                <SearchBar className="design-component-instance-node" property1="active"/>
                <div className="frame-5">
                    <WishList className="icon-instance-node"/>
                    <div className="icon-text">Wishlist</div>
                    <Cart className="icon-instance-node"/>
                    <div className="icon-text">Cart</div>
                    <MyAccount className="icon-instance-node"/>
                    <div className="icon-text">My Account</div>
                </div>
            </div>
        </div>
    );
};
