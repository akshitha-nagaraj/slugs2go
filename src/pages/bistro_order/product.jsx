import React, { useContext } from "react";
import { ShopContext } from "../../context/bistro_context";

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return(
        <div className= "product">
            <img className = "food_picture" src={productImage}/>
                <div className = "item_name">{productName}</div>
                    <div className = "item_price">${price}</div>
                        <div className="buttons">
                            {/* <button onClick={sayHello} className="add_cart_button">ADD TO CART</button> */}
                            {/* <button onClick={sayHello} className="customize_button">CUSTOMIZE</button> */}
                            <button className="add_cart_button"  onClick={() => addToCart(id)} >
                                ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}
                            </button>
                        </div>
        </div>
    );
};