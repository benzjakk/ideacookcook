import React,{Component} from "react";
import './food.css'
import FoodBasicInfo from "./food-basicInfo";
import FoodChef from "./food-chef";
import TopReviews from "./topReviews";

class food extends Component {
    render(){
    let foodName="ข้าวผัดกิมจิ" ;
    let foodPic="/pic/food1.jpg"; 
    let foodCost="80" ;
    let foodRate="4.52"; 
    let isfav=false ;

    let chefName="chef_idea" 
    let message="eieiwowwowhoohoo"
    let numOfRecipes="56"
    let chefRating="4.8"
    let chefReviews="15"
    let chefPic="pic/chef1.jpg"

    return (
        <div className="food">  
            <header></header>
            <section>                    
                <FoodBasicInfo 
                    foodName={foodName}
                    foodPic={foodPic}
                    foodCost={foodCost}
                    foodRate={foodRate} 
                    isfav={isfav}
                />

                <div className="space"/>

                <FoodChef 
                    chefName={chefName}
                    message={message}
                    numOfRecipes={numOfRecipes}
                    chefRating={chefRating}
                    chefReviews={chefReviews}
                    chefPic={chefPic}
                />

                <div className="space"/>
                <div className="tutorial">about food</div>
                <div className="space"/>
                {/* <FoodTutorial /> */}
                <TopReviews />
                
            </section>
        </div>
    );
    }
}

export default food;