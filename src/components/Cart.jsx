import React from "react";
import "../styles/Cart.css";
import CartIcon from "../icons/cart.png";

export const Cart = () => {
    return (
        <div className="Cart">
            <img className="vector" alt="Cart" src={CartIcon} />
        </div>
    );
}