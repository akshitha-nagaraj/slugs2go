import React from "react";
import { Link } from "react-router-dom";
import styles from './landing_page.css';

export const LandingPage = () => {
    return(
        <div className="page">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost"></link>
            <div className="nav_bar_frame">
                <div className = "title">SlugsTOGO</div>
            </div>

        
            <div className="main_frame">
                <div className="inner_frame">
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <a className = "restaurant_link" href="/bistro_order"><div className="restaurant_name">BISTRO</div></a>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">GLOBAL VILLAGE</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">BANANA JOES</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">MERRILL MARKET</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">UCEN CAFE</div>
                    </div>
                </div>
                
                <div className="inner_frame">
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">OAKES CAFE</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">STEVENSON CAFE</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">PERK - BE</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">PERK - E&M</div>
                    </div>
                    <div className="restaurant_frame">
                        <img className = "restaurant_picture" src="rectangle_placeholder.jpeg"/>
                        <div className="restaurant_name">PERK - PS</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

