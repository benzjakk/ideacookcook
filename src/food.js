import React,{Component} from "react";
import './food.css'
import FoodBasicInfo from "./food-basicInfo";
import Step from './Step';
import RawNTool from './RawNTool';
import axios from "axios";

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

class food extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPage:"Raw&Tool",
            match:this.props.match.params.id,
            Member:[],
            Data:[],
            Reviews:[],
            RawFood:[],
            Tools:[],
            Steps:[]
        };
    }

    thePage=()=>{
        if(this.state.isPage=="Raw&Tool")return(<div><RawNTool Rs={this.state.RawFood} Ts={this.state.Tools}/></div>);
        else if(this.state.isPage=="Steps")return(<div><Step L={this.state.Steps}/></div>);
    }

    componentDidMount=()=> {
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Menu/'+this.state.match)
        .then(res => {
            console.log(res.data.data);
            this.setState({
                Data:res.data.data,
                Reviews:res.data.data.review,
                Member:res.data.data.Member,
                RawFood:res.data.data.RawFood,
                Tools:res.data.data.Tool,
                Steps:res.data.data.Steps});
            console.log(this.state.RawFood);
        });
    }

    render(){   
        console.log(this.props)

    return (
        <div className="food">  
            <header></header>
            <section>                    
                <div style={{marginTop:"10px"}}/>
                <FoodBasicInfo
                    foodName={this.state.Data.RecipesName}
                    foodPic={this.state.Data.RecipesPic}
                    foodRate={this.state.Data.OverallRating}
                    time={this.state.Data.Time}
                    timeStamp={this.state.Data.TimeStamp}/* */
                    numOfSteps={this.state.Data.NoStep}
                    cal={this.state.Data.Calories}
                    foodType={this.state.Data.FoodType}
                    foodNation={this.state.Data.FoodNation}
                    description={this.state.Data.Description}/* */

                    chefPic={this.state.Member.ProfilePicture}
                    chefName={this.state.Member.KnownName}
                    numOfRecipes={this.state.Member.MenuNo}
                    chefID={this.state.Data.MemID}/* */

                    numOfReviews={this.state.Reviews.length}
                    allReviews={this.state.Reviews}

                    
                    myName="chef_idea"
                    myPic=""
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