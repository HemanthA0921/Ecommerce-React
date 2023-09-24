import PropTypes from "prop-types";
import React from "react";
import "../styles/Header.css";

export const Header = ({ header }) => {
    return (
        <div className={`header ${header}`}>
            {["header-about-hover", "header-contact-hover", "header-home-hover", "header-sign-up-hover"].includes(header) && (
                <>
                    <div className="div">
                        {header === "header-home-hover" && <>Home</>}

                        {header === "header-contact-hover" && <>Contact</>}

                        {header === "header-about-hover" && <>About</>}

                        {header === "header-sign-up-hover" && <>Sign Up</>}
                    </div>
                </>
            )}

            {["about", "contact", "home", "sign-up"].includes(header) && (
                <div className="home-2">
                    {header === "home" && <>Home</>}

                    {header === "contact" && <>Contact</>}

                    {header === "about" && <>About</>}

                    {header === "sign-up" && <>Sign Up</>}
                </div>
            )}
        </div>
    );
};

Header.propTypes = {
    header: PropTypes.oneOf([
        "header-contact-hover",
        "contact",
        "home",
        "about",
        "header-about-hover",
        "header-home-hover",
        "header-sign-up-hover",
        "sign-up",
    ]),
};

