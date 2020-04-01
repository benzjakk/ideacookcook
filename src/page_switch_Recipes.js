import React,{Component} from "react";
import "./page_switch_Recipes.css"

const RRR=(props)=> {
    const star=(s)=>{
        if(s==0)return("star0");
        if(s==1)return("star1");
        if(s==2)return("star2");
        if(s==3)return("star3");
        if(s==4)return("star4");
        if(s==5)return("star5");
    }

    if(props.page=="recipes"){    
        const listRcp = props.L.map((recipe) =>
            <div>
                <div className="pic" style={{backgroundImage:'url(/pic/food1.jpg)'}}>
                    <div class="info">                
                        <div className="fName">{recipe.name}</div>
                        <div>{recipe.cal} cal</div>
                    </div>
                </div>
            </div>)

        return(
            <div className="recipe-box">
                {listRcp}
            </div>
        );
    }
    else if(props.page=="reviews"){      
        const listRv = props.L.map((review) =>
        <div className="review-box">
            {/* <div className="a"/>
            <div className="b"/> */}
            <img className="pic"/>
            <div class="info">
                <div class="fName">{review.name}</div>
                <div className={star(review.rated)}></div>
                <div>{review.comment}</div>
                <div>- {review.by} -</div>
            </div>
        </div>)

        return(
            <div class="info">
                {listRv}
            </div>
        );
    }

    else{
        const listA = props.L.map((about) =>
        <div className="">
            <div>
            <div>{about.message}</div>
            <div>{about.contact}</div>
            <div>{about.joined}</div>
            </div>
        </div>)

        return(
            
            <div>
                {/* {listA} */}
            </div>
        );
    }
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