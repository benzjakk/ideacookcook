import React,{Component} from "react";
import "./result.css";
import Results from "./results";
import axios from "axios";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPage:"Latest",
            Loaded:false,
            R:[],
            words:this.props.match.params.id
        };
    }
    componentDidMount=()=> {
        // axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListRecipesName',
        // {
        //     params:{'keyWord':this.state.words}
        // })
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListParameter',
        {
            params:{"Calories" : "Low",
            "Time" : 30,
            "RawFood" : ["คอหมู"],
            "Tool" : ["กระทะ"],
            "FoodNation" : "",
            "FoodType" : ""}
        })
        .catch((error)=>{
            console.log(error);
            this.setState({Loaded:true});
        });
        // axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListRecipesName',
        // {
        //     params:{'keyWord':this.state.words}
        // })
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListParameter',
        {
            params:{"Calories" : "Low",
            "Time" : 30,
            "RawFood" : ["คอหมู"],
            "Tool" : ["กระทะ"],
            "FoodNation" : "",
            "FoodType" : ""}
        })
        .then(res => {
            console.log(res.data);
            this.setState({R:res.data.data,Loaded:true});
        });
    }
    moveDot=()=>{
        if(this.state.isPage=="Latest")return("dot-left");
        else if(this.state.isPage=="Duration")return("dot-right");
        else return("dot-mid");
    }
    render() {
        console.log(this.state.Loaded)
        return(
            <div className="result">
                <header></header>
                <section>
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
                    {this.state.Loaded==true?
                    <div className="allResult">
                        <Results RSs={this.state.R} SortBy={this.state.isPage} words={this.state.words}/>
                    </div>
                    :<div style={{width:"100vw",textAlign:"center",fontSize:"50px",marginTop:"200px"}}>Loading...</div>}
                </section>
            </div>
        );
    }
}

export default Result;