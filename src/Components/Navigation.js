//imr
import React from 'react';
import logo from "../logo.svg"
import "./navigation.css"

//sfc
const Navigation = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;