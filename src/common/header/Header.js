import React, { Component } from 'react';
import './Header.css';
import MovieLogo from "../../assets/logo.svg";
//import  './logo.svg';

class Header extends Component {
 render() {
        return (
            <div className="header">
                <img src={MovieLogo} className="App-logo" alt="logo"  />
            </div>
        )
    }
}
export default Header;