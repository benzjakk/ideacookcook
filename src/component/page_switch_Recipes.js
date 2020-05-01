import React,{Component} from "react";
import "../component/styles/page_switch_Recipes.css"
import {FaStream,FaStar,FaFeatherAlt} from 'react-icons/fa';
import CheckRating from '../component/CheckRating';
import {IoIosTime} from 'react-icons/io';
import TimeStamp from '../function/TimeStamp';
import {Link} from 'react-router-dom';

const RRR=(props)=> {
    
    if(props.page=='All'){
        if(props.L.length==0)
            return(
            <div style={{
                alignSelf:"center",
                color:"black",
                fontSize:"15px",
                padding:" 10px",
                textAlign:"center",
                width:"200px",
                margin:"10px"}}>no recipe found</div>
            );
        const listRcp = props.L.map((recipe) =>
            <Link className="pic" to={'/menu/'+recipe.RecipesID}>
                <div className="mybg"></div>
                <div className="imgBox">
                    {recipe.RecipesPic!=''?
                        <img className="img" src={recipe.RecipesPic}/>
                        : <div/>
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
            </Link>
        )
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="recipe-box">
                    {listRcp}
                </div>
                
            </div>
        );
    }

    else if(props.page!="Reviews"){          
        const valueToGet = props.page;
        const items = props.L.filter(item => item.Calories == valueToGet);
        if(items.length==0)
            return(
            <div style={{
                alignSelf:"center",
                color:"black",
                fontSize:"15px",
                padding:" 10px",
                textAlign:"center",
                width:"200px",
                margin:"10px"}}>no recipe found</div>
            );
        const listRcp = items.map((recipe) =>
            <Link className="pic" to={'/menu/'+recipe.RecipesID}>
                <div className="mybg"></div>
                <div className="imgBox">
                    {recipe.RecipesPic!=''?
                        <img className="img" src={recipe.RecipesPic}/>
                        : <div/>
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
            </Link>
        )
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="recipe-box">
                    {listRcp}
                    </div>
            </div>
        );
    }
    else{      
        const checkComment=(comment)=>{
            if(comment!="")return(<div className="comment"><FaFeatherAlt />{" : "} {comment}</div>);
            else return(null);
        }
        if(props.L.length==0)
            return(
            <div style={{
                alignSelf:"center",
                color:"black",
                fontSize:"15px",
                padding:" 10px",
                textAlign:"center",
                width:"200px",
                margin:"10px"}}>no review found</div>
            );
        const listRv = props.L.map((review) =>
        <div className="woohoo" style={{display:"flex",flexDirection:"column"}}>
            <div className="review-info">
            <Link to={'/menu/'+review.RecipesID}>
            {review.RecipesPic!=''?
                <img className="pic" src={review.RecipesPic}/>
                : <div className="pic"/>}
            </Link>
            <div class="info">
                <Link to={'/menu/'+review.RecipesID} class="fName">{review.RecipesName}</Link>
                <div className="myRating">
                    {CheckRating(review.Rating)}
                    {/* <p className="num">{review.Rating}</p> */}
                </div>
                {checkComment(review.Comment)}
            </div>
            </div>
            <div style={{padding:"0",display:"flex",flexDirection:"row",alignItems:"center",margin:"5px 0 30px 0"}}>
                    <div className="reviewBy">{review.KnownName}</div>
                    <div className="reviewBy">{"-"}</div>
                    <div className="reviewBy">{TimeStamp(review.TimeStamp)}</div>
            </div>
        </div>
        )
        return(
            // <div style={{
            //     display:"flex",
            //     flexDirection:"column",
            //     height:"calc(100vh - 295px)"
            // }}>
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
            // </div>
        );
    }
}

class SW_Pages extends Component {
    render() {
        return(
            <div style={this.props.page=="Reviews"?{alignSelf:"flex-start",display:"flex",flexDirection:"column",alignItems:"center"}:{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <RRR L={this.props.L} page={this.props.page} rated={this.props.rated}/>
            </div>
        );
    }
}

export default SW_Pages;