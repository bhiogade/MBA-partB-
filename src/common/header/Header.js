import React, { Component } from 'react';
import './Header.css';
import MovieLogo from "../../assets/logo.svg";
//import  './logo.svg';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
     console.log(this.props)
        return (
            <div>
                <header className="header">
                    <img src={MovieLogo} className="App-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                    {this.props.showBookShowButton ?
                        <div className="booknow-button">
                            <Link to={"/bookshow/" + this.props.id}>
                                <Button variant="contained" color="primary">Book Show</Button>
                            </Link>
                        </div>
                        : ""}
                </header>
            </div>
        )
    }
}
export default Header;