import React from "react";
import {Link} from 'react-router-dom';
import '../component/styles/food-chef.css';

const FoodChef=({chefName,message,numOfRecipes,chefRating,chefReviews,chefPic})=> {

    return ( 
        <div className="chef">
            <div className="chef-Top">
                <div className="chef-box-img">
                    <Link to="/chefProfile">
                        <img className="chef-img" src={chefPic}/>
                    </Link>
                </div>

                <div className="chef-name-active">
                    <div className="chef-name"><strong>{chefName}</strong></div>
                    <div>{message}</div>
                </div>

                <div className="more">
                    <div className="more-dot"  >
                        <strong>...</strong>
                    </div>
                </div>
            </div>

            <div className="chef-Bottom">
                <div className="chef-3inR">
                    <Link className="c1" to="/chefProfile">
                        <div className="c"><strong>{numOfRecipes}</strong></div>
                        <div className="c">recipes</div>
                    </Link>

                    <div className="space"> </div>

                    <Link className="c2" to="">
                        <div className="c"><strong>{chefRating}</strong></div>
                        <div className="c">rating</div>
                    </Link>

                    <div className="space"></div>
                    
                    <Link className="c3" to="">
                        <div className="c"><strong>{chefReviews}</strong></div>
                        <div className="c">reviews</div>
                    </Link>
                </div>
            </div>

        </div>
    );
}


export default FoodChef;