import React,{Component} from "react";
import "./page_switch_Recipes.css"
import {FaStream,FaStar} from 'react-icons/fa';
import CheckRating from './CheckRating';
import {IoIosTime} from 'react-icons/io';

const RRR=(props)=> {
    
    if(props.page=='all'){
        const listRcp = props.L.map((recipe) =>
            <div className="pic">
                <div className="mybg"></div>
                <div className="imgBox">
                    <div className="img" style={{backgroundImage:recipe.img}}/>
                </div>
                <div className="content">
                    <h2>{recipe.name}</h2>
                    <div className="info">                            
                        <div className="icons">                                
                            <div className="myIcons"><FaStream /></div>
                            <div className="myIcons"><IoIosTime /></div> 
                            <div className="myIcons"><FaStar /></div>                               
                        </div>
                        <div className="afterIconsB">
                            <div>{recipe.numOfSteps}</div>
                            <div>{recipe.time}</div>
                            <div>{recipe.rating}</div>
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

    else if(props.page!="reviews"){          
        const valueToGet = props.page;
        const items = props.L.filter(item => item.cal == valueToGet);
        const listRcp = items.map((recipe) =>
        <div className="pic">
        <div className="mybg"></div>
        <div className="imgBox">
            <div className="img" style={{backgroundImage:recipe.img}}/>
        </div>
        <div className="content">
            <h2>{recipe.name}</h2>
            <div className="info">                            
                <div className="icons">                                
                    <div className="myIcons"><FaStream /></div>
                    <div className="myIcons"><IoIosTime /></div> 
                    <div className="myIcons"><FaStar /></div>                               
                </div>
                <div className="afterIconsB">
                    <div>{recipe.numOfSteps}</div>
                    <div>{recipe.time}</div>
                    <div>{recipe.rating}</div>
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
            <div className="pic" style={{backgroundImage:'url(/pic/food1.jpg)'}}/>
            <div class="info">
                <div class="fName">{review.name}</div>
                <div className="myRating">
                    {CheckRating(review.rated)}
                    <p className="num">{review.rated}</p>
                </div>
                {checkComment(review.comment)}
                <div className="reviewBy">- {review.by} -</div>
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
                <div style={{color:"grey",fontSize:"2vmin",margin:"3vmin",textAlign:"center"}}>no more reviews found</div>
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