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
    const tax = parseFloat((totalAmount * 0.0925).toFixed(2));
    const total = parseFloat((totalAmount + tax).toFixed(2));

    return(
        <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
                <div className="nav_bar_frame">
                    <Link to="/">
                        <img className="logo" src={require("../../assets/logo.jpeg")}/>
                    </Link>
                    <Link to="/bistro_cart">
                        <img className="cart" src={require("../../assets/shopping_cart.jpeg")}/>
                    </Link>
                    <div className = "title">SlugsTOGO</div>
                </div>
                
                <div className = "main_container">
                    <div className = "checkout_sub_container">
                        <div className = "heading">CHECKOUT</div>
                        <div className = "address">College Nine Rd, Santa Cruz, CA 95064</div>
                        <div className="line"></div>
                        <div className = "date"></div>
                        {/*
                        <div>
                            <label>Select an option:</label>
                             Dropdown element
                             <select>
                                Options
                                <option value="option1">15 Mins</option>
                                <option value="option2">30 Mins</option>
                                <option value="option3">45 Mins</option>
                                <option value="option3">60 Mins</option>
                            </select>  
                        </div>*/}

                        <div className = "orderTotal_container">                            
                            <div className = "orderTotal_price">SubTotal: ${totalAmount}</div>
                            <div className = "orderTotal_price">Tax:      ${tax}</div>
                            <div className = "orderTotal_price">Total:    ${total}</div>
                        </div>
                    </div>

                    <div className = "information_sub_container">
                        <div className = "heading">INFORMATION</div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"></input>
                        <label for="studentID">Email:</label>
                        <input type="text" id="studentID" name="studentID"></input>
                        <label for="PhoneNumber">Phone Number:</label>
                        <input type="text" id="PhoneNumber" name="PhoneNumber"></input>


                        <div className = "cards_container">Select a payment method: </div>
                        <button className = "card">
                            <img className="cardPicture" src={require("../../assets/payment_assets/credit.jpeg")}/>
                            <div classname="cardOptionName">Credit/Debit</div>
                        </button>
                        <button className = "card">
                            <img className="cardPicture" src={require("../../assets/payment_assets/venmo.jpeg")}/>
                            <div classname="cardOptionName">Venmo</div>
                        </button>
                        <button className = "card">
                            <img className="cardPicture" src={require("../../assets/payment_assets/slugpoints.png")}/>
                            <div classname="cardOptionName">SlugPoints/Flexi</div>
                        </button>

                    </div>
                </div>
        </div>
    )
}