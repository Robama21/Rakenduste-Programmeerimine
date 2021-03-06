import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header__logo" src="/pictures/logo.png" />
            </Link>
            <div className="header__buttons">
            <button>Login/Signup</button>
            <button>Cart</button>
            </div>
        </div>
    );
};

export default Header;