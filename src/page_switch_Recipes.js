import React,{Component} from "react";
import "./page_switch_Recipes.css"
import {FaStream,FaStar} from 'react-icons/fa';
import {TiFlag} from 'react-icons/ti';
import {IoIosTime} from 'react-icons/io';
import {AiOutlineFire,AiFillFire} from 'react-icons/ai';

const RRR=(props)=> {
    const star=(s)=>{
        if(s==0)return("star0");
        if(s==1)return("star1");
        if(s==2)return("star2");
        if(s==3)return("star3");
        if(s==4)return("star4");
        if(s==5)return("star5");
    }

    const checkCal=(recipe,cal)=>{
        if(cal=='all'|| recipe.cal==cal)
            return(
                <div>
                <div className="pic">
                    <div className="picFront" style={{backgroundImage:recipe.img}}>
                    </div>
                    <div className="picBack">
                        <div className="name">{recipe.name}</div>
                        <div className="info">                            
                            <div className="icons">                                
                                <div className="myIcons"><FaStream /></div>
                                <div className="myIcons"><IoIosTime /></div>
                                <div className="myIcons"><FaStar /></div>                                
                            </div>
                            <div className="afterIconsA">
                                <div>{recipe.numOfSteps} steps</div>
                                <div>{recipe.time} min</div>
                                <div>{recipe.rating}</div>
                            </div>
                        </div>                        
                    </div>
                </div>
                </div>
            );
        else return(null);
    }

    if(props.page=="high" || props.page=="medium" || props.page=="low" || props.page=="all"){    
        const listRcp = props.L.map((recipe) =>
            <div>{checkCal(recipe,props.page)}</div>
        )
        return(
            <div className="recipe-box">
                {listRcp}
            </div>
        );
    }
    else if(props.page=="reviews"){      
        const listRv = props.L.map((review) =>
        <div className="review-box">
            <img className="pic"/>
            <div class="info">
                <div class="fName">{review.name}</div>
                <div className={star(review.rated)}></div>
                <div>{review.comment}</div>
                <div>- {review.by} -</div>
            </div>
        </div>
        )
        return(
            <div class="info">
                {listRv}
            </div>
        );
    }

    // else{
    //     const listA = props.L.map((about) =>
    //     <div className="">
    //         <div>
    //         <div>{about.message}</div>
    //         <div>{about.contact}</div>
    //         <div>{about.joined}</div>
    //         </div>
    //     </div>)

    //     return(
            
    //         <div>
    //             {listA}
    //         </div>
    //     );
    // }
}

class SW_Pages extends Component {
    render() {
        return(
            <div>
            <RRR L={this.props.L} page={this.props.page} rated={this.props.rated}/>
            </div>
        );
    }
}

export default SW_Pages;