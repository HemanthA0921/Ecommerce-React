import React from "react";
import "../styles/Logo.css";

export const Logo = ({ divClassName }) => {
    return (
        <div className="logo">
            <div className={`text-wrapper ${divClassName}`}>Exclusive</div>
        </div>
    );
};
