import React,{Component} from "react";
import "./page_switch_Recipes.css"
import {FaStream,FaStar} from 'react-icons/fa';
import CheckRating from './CheckRating';
import {IoIosTime} from 'react-icons/io';

const RRR=(props)=> {
    
    if(props.page=='All'){
        const listRcp = props.L.map((recipe) =>
            <div className="pic">
                <div className="mybg"></div>
                <div className="imgBox">
                    {recipe.RecipesPic!=''?
                        <img className="img" src={recipe.RecipesPic}/>
                        : <div className="img" style={{background:"grey"}}/>
                    }
                </div>
                <div className="content">
                    <h2>{recipe.RecipesName}</h2>
                    <div className="info">                            
                        <div className="icons">                                
                            <div className="myIcons"><FaStream /></div>
                            <div className="myIcons"><IoIosTime /></div> 
                            <div className="myIcons"><FaStar /></div>                               
                        </div>
                        <div className="afterIconsB">
                            <div>{recipe.NoStep}</div>
                            <div>{recipe.Time}</div>
                            <div>{recipe.OverallRating}</div>
                        </div>
                        <div className="afterIconsA">
                            <div>steps</div>
                            <div>min</div>
                            <div>stars</div>
                        </div>
                </div>
                </div>      
            </div>
        )
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="recipe-box">
                    {listRcp}
                    <div style={{
                        alignSelf:"center",
                        color:"black",
                        fontSize:"15px",
                        padding:" 10px",
                        textAlign:"center",
                        width:"200px",
                        margin:"10px"}}>no more recipes found</div>
                </div>
                
            </div>
        );
    }

    else if(props.page!="Reviews"){          
        const valueToGet = props.page;
        const items = props.L.filter(item => item.Calories == valueToGet);
        const listRcp = items.map((recipe) =>
            <div className="pic">
                <div className="mybg"></div>
                <div className="imgBox">
                    {recipe.RecipesPic!=''?
                        <img className="img" src={recipe.RecipesPic}/>
                        : <div className="img" style={{background:"grey"}}/>
                    }
                </div>
                <div className="content">
                    <h2>{recipe.RecipesName}</h2>
                    <div className="info">                            
                        <div className="icons">                                
                            <div className="myIcons"><FaStream /></div>
                            <div className="myIcons"><IoIosTime /></div> 
                            <div className="myIcons"><FaStar /></div>                               
                        </div>
                        <div className="afterIconsB">
                            <div>{recipe.NoStep}</div>
                            <div>{recipe.Time}</div>
                            <div>{recipe.OverallRating}</div>
                        </div>
                        <div className="afterIconsA">
                            <div>steps</div>
                            <div>min</div>
                            <div>stars</div>
                        </div>
                </div>
                </div>      
            </div>
        )
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="recipe-box">
                    {listRcp}
                    <div style={{
                        alignSelf:"center",
                        color:"black",
                        fontSize:"15px",
                        padding:" 10px",
                        textAlign:"center",
                        width:"200px",
                        margin:"10px"}}>no more recipes found</div>
                    </div>
            </div>
        );
    }
    else{      
        const checkComment=(comment)=>{
            if(comment!="")return(<div className="comment">{comment}</div>);
            else return(null);
        }
        const listRv = props.L.map((review) =>
        <div className="review-info">
            {review.RecipesPic!=''?
                <img className="pic" src={review.RecipesPic}/>
                : <div className="pic" style={{backgroundColor:"grey"}}/>}
            <div class="info">
                <div class="fName">{review.RecipesName}</div>
                <div className="myRating">
                    {CheckRating(review.Rating)}
                    <p className="num">{review.Rating}</p>
                </div>
                {checkComment(review.Comment)}
                <div className="reviewBy">- {review.KnownName} -</div>
            </div>
        </div>
        )
        return(
            <div style={{
                display:"flex",
                flexDirection:"column",
                height:"calc(100vh - 295px)"
            }}>
            <div class="review-box">
                {listRv}
                <div style={{
                    color:"grey",
                    fontSize:"2vmin",
                    margin:"3vmin",
                    textAlign:"center"}}>
                    no more reviews found
                </div>
            </div>
            </div>
        );
    }
}

class SW_Pages extends Component {
    render() {
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <RRR L={this.props.L} page={this.props.page} rated={this.props.rated}/>
            </div>
        );
    }
}

export default SW_Pages;