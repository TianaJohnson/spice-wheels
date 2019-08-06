import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {

    render() {
        return (
            <div className="header-main">
                <h3 className="header-contact-number">(612)444-6125</h3>
                <h1 className="header-title"> Spice Wheels </h1>
                <br />
                <div className="header-nav">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <br/>
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                    <br/>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    <br/>
                    <Link className="nav-link" to="/Store">
                        Store
                    </Link>
                    <br/>
                    <Link className="nav-link" to="/Custom">
                        Custom
                    </Link>
                    
                </div>
                {/* link to home, about, custom, store, contact */}

            <br/>

            </div>
        )
    }

}

export default Header;
