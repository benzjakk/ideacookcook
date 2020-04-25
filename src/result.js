import React,{Component} from "react";
import "./result.css";
import Results from "./results";
import axios from "axios";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPage:"Latest",
            R:[],
            words:this.props.match.params.id
        };
    }
    componentDidMount=()=> {
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListRecipesName',
        {
            'keyword':this.state.words
        })
        // axios.post('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListParameter',
        // {
        //     "Calories" : "Low",
        //     "Time" : 30,
        //     "RawFood" : ["คอหมู"],
        //     "Tool" : ["กระทะ"],
        //     "FoodNation" : "v",
        //     "FoodType" : ""
        // })
        // .catch((error)=>{
        //     console.log(error);
        // });
        .then(res => {
            console.log(res.data);
            this.setState({R:res.data.data});
        });
    }
    moveDot=()=>{
        if(this.state.isPage=="Latest")return("dot-left");
        else if(this.state.isPage=="Duration")return("dot-right");
        else return("dot-mid");
    }
    render() {
        // console.log(this.props)
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
                    <div className="allResult">
                        <Results RSs={this.state.R} SortBy={this.state.isPage} words={this.state.words}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Result;