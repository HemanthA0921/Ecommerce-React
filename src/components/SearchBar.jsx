import React from "react";
import "../styles/SearchBar.css";
import { SearchIconcomponent } from "./SearchIconcomponent";

export const SearchBar = ({property1}) => {
    return (
        <div className={`search-component-set ${property1}`}>
            {property1 === "active" && (
                <div className="frame">
                    <p className="text-wrapper">What are you looking for?</p>
                    <SearchIconcomponent />
                </div>
            )}
        </div>
    );
};
