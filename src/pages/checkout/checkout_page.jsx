import React, { useContext } from "react";
import { ShopContext } from "../../context/bistro_context";
// import { PRODUCTS } from "../../products";
// import { CartItem } from "../../bistro_cart_item";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import './checkout_page.css';

export const CheckoutPage = () => {

    const {getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const tax = totalAmount*0.925;
    const total = totalAmount+tax;

    return(
        <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
                <div className="nav_bar_frame">
                    <img className="logo" src=""/>
                    <div className = "title">SlugsTOGO</div>
                </div>
                
                <div className = "main_container">
                    <div className = "checkout_sub_container">
                        <div className = "heading">WELCOME TO THE BISTRO!</div>
                        <div className = "date"></div>
                        <div>
                            <label>Select an option:</label>
                            {/* Dropdown element */}
                            <select>
                                {/* Options */}
                                <option value="option1">15 Mins</option>
                                <option value="option2">30 Mins</option>
                                <option value="option3">45 Mins</option>
                                <option value="option3">60 Mins</option>
                            </select>
                        </div>

                        <div className = "orderTotal_container">                            
                            <div className = "orderTotal_price">SubTotal: ${totalAmount}</div>
                            <div className = "orderTotal_price">Tax:      ${tax}</div>
                            <div className = "orderTotal_price">Total:    ${total}</div>
                        </div>

                        <div className = "cards_container">Select a payment method: </div>
                        

                        <div className = "address">College Nine Rd, Santa Cruz, CA 95064</div>
                    </div>

                    <div className = "information_sub_container">
                        <div className = "heading">INFORMATION</div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"></input>
                        <label for="studentID">studentID:</label>
                        <input type="text" id="studentID" name="studentID"></input>
                        <label for="PhoneNumber">Phone Number:</label>
                        <input type="text" id="PhoneNumber" name="PhoneNumber"></input>
                    </div>
                </div>
        </div>
    )
}