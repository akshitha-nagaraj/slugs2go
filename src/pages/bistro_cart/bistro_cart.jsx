import React, { useContext } from "react";
import { ShopContext } from "../../context/bistro_context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./bistro_cart_item";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './bistro_cart.css';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const tax = parseFloat((totalAmount * 0.0925).toFixed(2));
  const total = parseFloat((totalAmount + tax).toFixed(2));

  const navigate = useNavigate();

  return (
      <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
            <div className="nav_bar_frame">
              <Link to="/">
                <img className="logo" src={require("../../assets/logo.jpeg")}/>
              </Link>
              <img className="blue" src={require("../../assets/blue.jpeg")}/>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="title">SlugsTOGO</div>
              </Link>
            </div>
            
            <div className = "leftRightContainer">
              <div className = "foodBox">
                {/*<div className="cart"> */}
                  {PRODUCTS.map((product) => {
                    if (cartItems[product.id] > 0) {
                      <div className = "text">Your Cart Items:</div>
                      return <CartItem data={product} />;
                    }
                  })}
                {/*</div>*/}
              </div>
              
              <div className = "rightSizeBoxCheckout">
                {totalAmount <= 0 ? (
                  <h1> Your Shopping Cart is Empty</h1>
                ) : (
                  <div>
                    <div className = "priceBox">
                      <div className="checkout">
                        <div className = "orderTotal_price">SubTotal: ${totalAmount}</div>
                        <div className = "orderTotal_price">Tax:      ${tax}</div>
                        <div className="line"></div>
                        <div className = "orderTotal_price">Total:    ${total}</div>
                      </div>
                    </div>
                    <div className = "mybuttons">
                      <button onClick={() => navigate("/bistro_order")}> Continue Shopping </button>
                      <button onClick={() => navigate("/checkout_page")}> Checkout </button>
                    </div>
                  </div>
                )}
              </div>  
            </div>
    </div>  
    );
};