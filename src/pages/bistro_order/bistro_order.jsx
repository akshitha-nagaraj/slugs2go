import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './bistro_order.css';
import { ShopContext } from "../../context/bistro_context.jsx";
// import { ShoppingCart } from phosphor-react;
import { PRODUCTS } from "../../products.js";
import { Product } from "./product.jsx";

export const BistroOrder = () => {
    const { cartItems } = useContext(ShopContext);
    return(
        <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
            <div className="nav_bar_frame">
                <Link to="/">
                    <img className="logo" src={require("../../assets/logo.jpeg")}/>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className = "title">SlugsTOGO</div>
                </Link>
                {/* <a className = "cartIcon" href="/bistro_cart">cart</a> */}
                <Link to="/bistro_cart">Go to Cart</Link>
            </div>
            <div className="bistro">BISTRO</div>
            <div className="line"></div>
            <div className="main_frame">
                <div className="food_title">SALAD</div>
                <div className="food_category">
                    <div className="food_item"> 
                        {PRODUCTS.map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}



// function Bistro_Order() {
//     return(
//         <div className="page">
//             <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
//             <div className="nav_bar_frame">
//                 <div className = "title">SlugsTOGO</div>
//             </div>
//             <div className="bistro">BISTRO</div>
//             <div className="line"></div>
//             <div className="main_frame">
//                 <div className="food_title">SALAD</div>
//                 <div className="food_category">
//                     <div className="food_item">
//                         <img className = "food_picture" src="rectangle_placeholder.jpeg"/>
//                         <div className = "item_name">Salad 1</div>
//                         <div className = "item_price">$14</div>
//                         <div className="buttons">
//                             <button onClick={sayHello} className="add_cart_button">ADD TO CART</button>
//                             <button onClick={sayHello} className="customize_button">CUSTOMIZE</button>
//                         </div>
//                     </div>
//                     <div className="food_item">
//                         <img className = "food_picture" src="rectangle_placeholder.jpeg"/>
//                         <div className = "item_name">Salad 1</div>
//                         <div className = "item_price">$14</div>
//                         <div className="buttons">
//                             <button onClick={sayHello} className="add_cart_button">ADD TO CART</button>
//                             <button onClick={sayHello} className="customize_button">CUSTOMIZE</button>
//                         </div>
//                     </div>
//                     <div className="food_item">
//                         <img className = "food_picture" src="rectangle_placeholder.jpeg"/>
//                         <div className = "item_name">Salad 1</div>
//                         <div className = "item_price">$14</div>
//                         <div className="buttons">
//                             <button onClick={sayHello} className="add_cart_button">ADD TO CART</button>
//                             <button onClick={sayHello} className="customize_button">CUSTOMIZE</button>
//                         </div>
//                     </div>
//                     <div className="food_item">
//                         <img className = "food_picture" src="rectangle_placeholder.jpeg"/>
//                         <div className = "item_name">Salad 1</div>
//                         <div className = "item_price">$14</div>
//                         <div className="buttons">
//                             <button onClick={sayHello} className="add_cart_button">ADD TO CART</button>
//                             <button onClick={sayHello} className="customize_button">CUSTOMIZE</button>
//                         </div>
//                     </div>
//                     <div className="food_item">
//                         <img className = "food_picture" src="rectangle_placeholder.jpeg"/>
//                         <div className = "item_name">Salad 1</div>
//                         <div className = "item_price">$14</div>
//                         <div className="buttons">
//                             <button onClick={sayHello} className="add_cart_button">ADD TO CART</button>
//                             <button onClick={sayHello} className="customize_button">CUSTOMIZE</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
//  }

function sayHello() {
    alert("You clicked me!");
}