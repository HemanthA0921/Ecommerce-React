import React from "react";
import "../styles/WishList.css";
import WishlistIcon from "../icons/favorite.png";

export const WishList = () => {
    return (
        <div className="wishlist">
            <img className="vector" alt="Wishlist" src={WishlistIcon} />
        </div>
    );
}