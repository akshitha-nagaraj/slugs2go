import React, { useContext } from "react";

import { Link } from "react-router-dom";
import './confirmation.css';

export const Confirmation = () => {
    return (
        <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
                <div className="nav_bar_frame">
                    <Link to="/">
                        <img className="logo" src={require("../../assets/logo.jpeg")}/>
                    </Link>
                    <img className="cart" src={require("../../assets/blue.jpeg")}/>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className = "title">SlugsTOGO</div>
                    </Link>
                </div>

            <div className = "confirmation_container">
                    <div className = "text">THANK YOU!</div>
                    <img className="slug" src={require("../../assets/logo.jpeg")}/>
                    <div className = "bottom_text">Your Order has been Placed!</div>
                    <div className = "bottom_text">Pick it up from the Bistro at the selected time.</div>
            </div>
            
        </div>
    )

}