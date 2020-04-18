import React,{Component} from "react";
import './food.css'
import FoodBasicInfo from "./food-basicInfo";
import Step from './Step';
import RawNTool from './RawNTool';

const allReviews=[
    {reviewBy:"Samy",pic:"url(/pic/user1.jpg)",rated:4,comment:"ooh ooh"},
    {reviewBy:"pk",pic:"url(/pic/user2.jpg)",rated:3,comment:""},
    {reviewBy:"B.",pic:"url(/pic/user3.jpg)",rated:4,comment:"wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow"},
    {reviewBy:".บะละเบ้น",pic:"url(/pic/user4.jpg)",rated:5,comment:"this is the best thing in my life"}
];

const allSteps=[
    {
          numOfSteps:1,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn vmsdkfn rjv;msorikvjm;skdfvmskd;jfnv;jkv",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:2,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:3,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn vmsdflkjvm;dsfkjvmsd;lkfvm;dfklmsdkl",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:4,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn vmsdflkjvm;dsfkjvmsd;lkfvm;dfklmsdkl vmsdkfn rjv;v",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:5,
        description:"vm;dfklmsdkl vmsdkfn rjv;msorikvjm;skdfvmskd;jfnv;jkv",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:6,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn vmsdflkjkfn rjv;msorikvjm;skdfvmskd;jfnv;jkv",
        pic:"url(/pic/food1.jpg)"
    },
    {
        numOfSteps:7,
        description:"wkfjwsifjmcsdkfnvmlskdfvmdskfn vmsdflkjvm;dsfkjvmsd;lk;jfnv;jkv",
        pic:"url(/pic/food1.jpg)"
    }
];

const allRaws=[
    {name:"หมูสามชั้น",quantity:"2",unit:"กรัม"},
    {name:"น้ำตาลทรายอิอิอิอิvbvbvbvbvbvbvbvbvbvbvbvbอิอิอิอิ",quantity:"2",unit:"กิโลกรัม"},
    {name:"ผักชี",quantity:"2",unit:"กรัม"},
    {name:"มะขือเทศ",quantity:"2",unit:"กรัม"},
    {name:"น้ำปลา",quantity:"2",unit:"กรัม"},
    {name:"หมูสามชั้น",quantity:"2",unit:"กรัม"},
    {name:"น้ำตาลทราย",quantity:"2",unit:"กรัม"},
    {name:"ผักชี",quantity:"2",unit:"กรัม"},
    {name:"มะขือเทศ",quantity:"2",unit:"กรัม"},
    {name:"น้ำปลา",quantity:"2",unit:"กรัม"}

];


let foodName="Kaopad-Kimchi" ;
const foodPic='url(/pic/food1.jpg)'; 
let time="80" ;
let foodRate=4.52; 
let numOfSteps=8 ;
let cal="medium";
let foodType="ผัด";
let foodNation="Korean";

let chefName="chef_idea"; 
let numOfRecipes="56";
let chefPic='url(/pic/chef1.jpg)';

class food extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPage:"Raw&Tool"
        };
    }

    thePage=()=>{
        if(this.state.isPage=="Raw&Tool")return(<div><RawNTool Rs={allRaws} Ts={allRaws}/></div>);
        else if(this.state.isPage=="Steps")return(<div><Step L={allSteps}/></div>);
    }

    render(){   

    return (
        <div className="food">  
            <header></header>
            <section>                    
                <div style={{marginTop:"10px"}}/>
                <FoodBasicInfo
                    foodName={foodName}
                    foodPic={foodPic}
                    foodRate={foodRate}
                    time={time}
                    numOfSteps={numOfSteps}
                    cal={cal}
                    foodType={foodType}
                    foodNation={foodNation}

                    chefPic={chefPic}
                    chefName={chefName}
                    numOfRecipes={numOfRecipes}

                    numOfReviews={5}
                    allReviews={allReviews}
                />
                <div className="pageHeader">
                    <div className={this.state.isPage=="Raw&Tool"? "isClicked":"isNotClicked"} onClick={()=>this.setState({isPage: "Raw&Tool"})}>
                        <strong>Tools {"&"} Ingredients</strong>
                    </div>
                    <div className={this.state.isPage=="Steps"? "isClicked":"isNotClicked"} onClick={()=>this.setState({isPage: "Steps"})}>
                        <strong>Steps</strong>
                    </div>     
                </div>
                {this.thePage()}                
            </section>
        </div>
    );
    }
}

export default food;