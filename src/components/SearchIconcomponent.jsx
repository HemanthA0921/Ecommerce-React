import React from "react";
import searchIcon from "../icons/search.png";
import "../styles/SearchIconComponent.css";

export const SearchIconcomponent = () => {
    return (
        <div className="component">
            <img className="vector" alt="search" src={searchIcon} />
        </div>
    );
}