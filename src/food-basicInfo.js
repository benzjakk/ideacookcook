import React, {useState} from "react";
import './food-basicInfo.css';

const FoodBasicInfo=({foodName,foodPic,foodCost,foodRate,isfav})=> {
    const [isRed,setRed] = useState(isfav);
    const fav=()=>{
        setRed(!isRed);
    }
    
    let ratingStar="";

    const rate=()=>{
        if(foodRate>=0 && foodRate<0.25) ratingStar="star0";
        else if(foodRate<0.75) ratingStar="star0-5";
        else if(foodRate<1.25) ratingStar="star1";
        else if(foodRate<1.75) ratingStar="star1-5";
        else if(foodRate<2.25) ratingStar="star2";
        else if(foodRate<2.75) ratingStar="star2-5";
        else if(foodRate<3.25) ratingStar="star3";
        else if(foodRate<3.75) ratingStar="star3-5";
        else if(foodRate<4.25) ratingStar="star4";
        else if(foodRate<4.75) ratingStar="star4-5";
        else  ratingStar="star5";
    }

    rate();

    return(
        <div className="food-basicInfo">
            <img className="food-img" style={{backgroundImage:foodPic}}/>
            <div className="food-name"><strong>{foodName}</strong></div>
            <div className="Info">
                <div className="cost"><strong>{foodCost} ฿</strong></div>
                <div className="ratingStars">
                    <div className={ratingStar}/>
                    <div className="rating">{foodRate} / 5</div>
                    <div className={isRed? "heart-red" : "heart-white"} onClick={fav}></div>
                </div>
            </div>
        </div>
    );
}

export default FoodBasicInfo;
