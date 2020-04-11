import React,{Component} from "react";
import "./result.css";
import Results from "./results";
// import {FaCircle} from "react-icons/fa";

const allRecipes=[
    {foodid:"f001",name:"ข้าวผัดกิมจิ",img:'url(/pic/food1.jpg)',cal:"high",numOfReviews:19,time:90,rating:"4.2",numOfSteps:8},
    {foodid:"f002",name:"ข้าวผัดกิมจิอิอิอู้อู้ว้าวๆเยี่ยมยอดสุดๆไปเลยนะคะเนี่ย",img:'url(/pic/food1.jpg)',cal:"high",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f003",name:"food3",img:'url(/pic/food1.jpg)',cal:"high",numOfReviews:19,time:90,rating:4.5,numOfSteps:8},
    {foodid:"f004",name:"ข้าวผัดกิมจิข้าวผัดกิมจิข้าวผัดกิมจิข้าวผัดกิมจิ",img:'url(/pic/food1.jpg)',cal:"high",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f005",name:"food5",img:'url(/pic/food1.jpg)',cal:"high",numOfReviews:19,time:90,rating:3.1,numOfSteps:8},
    {foodid:"f006",name:"food6",img:'url(/pic/food1.jpg)',cal:"medium",numOfReviews:19,time:90,rating:"5.0",numOfSteps:8},
    {foodid:"f007",name:"food7",img:'url(/pic/food1.jpg)',cal:"medium",numOfReviews:19,time:90,rating:4.7,numOfSteps:8},
    {foodid:"f008",name:"food8",img:'url(/pic/food1.jpg)',cal:"medium",numOfReviews:19,time:90,rating:1.5,numOfSteps:8},
    {foodid:"f009",name:"food9",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f010",name:"food10",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:3.5,numOfSteps:8},
    {foodid:"f011",name:"food11",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f012",name:"food12",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f013",name:"food13",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:4.2,numOfSteps:8},
    {foodid:"f014",name:"food14",img:'url(/pic/food1.jpg)',cal:"low",numOfReviews:19,time:90,rating:4.2,numOfSteps:8}
];

class Result extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPage:"Latest"
        };
    }
    moveDot=()=>{
        if(this.state.isPage=="Latest")return("dot-left");
        else if(this.state.isPage=="Duration")return("dot-right");
        else return("dot-mid");
    }
    render() {
        return(
            <div className="result">
                <header></header>
                <section>
                    {/* <div className="resulttt">
                        <div className="big">Result</div>
                        <div className="small">here are your result</div>
                    </div> */}
                    <div className="pageHeader">
                        <div className={this.state.isPage=="Latest"? "isClicked":"isNotClicked"} onClick={()=>this.setState({isPage: "Latest"})}>
                            <strong>Latest</strong>
                        </div>
                        <div className={this.state.isPage=="Popularity"? "isClicked":"isNotClicked"} onClick={()=>this.setState({isPage: "Popularity"})}>
                            <strong>Popularity</strong>
                        </div>
                        <div className={this.state.isPage=="Duration"? "isClicked":"isNotClicked"} onClick={()=>this.setState({isPage: "Duration"})}>
                            <strong>Duration</strong>
                        </div>     
                    </div>
                    {/* <div style={{position:"absolute",transform:"translateY(18.6vmin)"}}>
                        <div className={this.moveDot()}><FaCircle/></div>
                    </div> */}
                    <div className="allResult">
                        <Results RSs={allRecipes}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Result;