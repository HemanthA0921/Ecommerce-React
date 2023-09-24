import React from "react";
import "../styles/MyAccount.css";
import myAccount from "../icons/user_profile.png";

export const MyAccount = () => {
    return (
        <div className="MyAccount">
            <img className="vector" alt="MyAccount" src={myAccount} />
        </div>
    );
}