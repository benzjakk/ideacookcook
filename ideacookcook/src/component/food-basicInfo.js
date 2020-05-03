import React, {Component} from "react";
import '../component/styles/food-basicInfo.css';
import CheckRating from '../component/CheckRating';
import Reviews from '../component/reviews';
import {FaPaperPlane, FaCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import axios from "axios";


class FoodBasicInfo extends Component {
    constructor(props) {
        super(props);        
        this.goDel = this.goDel.bind(this);////delete and real time ui changing(offline)////
        this.state={
            Rate:0,
            checkCommentedischecked:false,
            Commented:false,
            Comment:"",
            isChef:false,
            Editing:false,
            edited:false,
            ////real time ui changing(offline)////
            Reviews:[],
            numOfReviews:0,
            foodRate:0,
            sureDel:false
        };
    }

    goDelRecipe=()=>{
        console.log(this.props.foodID)
        axios.delete('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Recipes',
        {
            data:{"RecipesID":this.props.foodID}
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    goComment=()=>{
        if(this.state.Rate!=0){
            axios.post('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/CreateComment',
            {
                "RecipesID":this.props.foodID,
                "MemID":this.props.myID,
                "Comment":this.state.Comment,
                "Rating":this.state.Rate
            })
            this.setState({
                Commented:true,
                foodRate:this.state.foodRate * this.state.numOfReviews / (this.state.numOfReviews+1) + this.state.Rate / (this.state.numOfReviews+1),
                numOfReviews:this.state.numOfReviews+1
            });
            this.state.Reviews.push({
                Comment: this.state.Comment,
                KnownName: this.props.myName,
                MemID: this.props.myID,
                ProfilePicture: this.props.myPic,
                Rating: this.state.Rate,
                TimeStamp:"now"
            });
        }
        
        else{
            
        }

        
    }
    handleChange=(event)=>{
        this.setState({Comment:event.target.value});
    }

    checkCommented=()=> {
        if(this.props.chefID==this.props.myID){
            this.setState({isChef:true})
            return(true);
        }
        for (const [index, value] of this.props.allReviews.entries()) {
            if(value.MemID==this.props.myID)this.setState({Commented:true})
        }
    }

    goDel=(index)=>{
        axios.delete('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Comment',
            {data:{
                "RecipesID":this.props.foodID,
                "MemID":this.props.myID}
            })
            .catch((error)=>{
                console.log(error);
            });
        this.setState({
            Commented:false,
            foodRate:(this.state.foodRate * this.state.numOfReviews - this.state.Reviews[index].Rating) / (this.state.numOfReviews-1),
            numOfReviews:this.state.numOfReviews-1,
            Rate:0
        });        
        this.setState({Reviews: this.state.Reviews.filter((x,i) => i != index )})
    }

    goEdit=(index,newRate,newComment)=>{
        this.setState({Editing:true,edited:false})
        axios.patch('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Comment',
                {
                    "RecipesID":this.props.foodID,
                    "MemID":this.props.myID,
                    "Comment":newComment,
                    "Rating":newRate
                })
            .then(res => {
                    this.setState({edited:true,Editing:false})
            });
        this.setState({foodRate:(this.state.foodRate * this.state.numOfReviews - this.state.Reviews[index].Rating + newRate )/ (this.state.numOfReviews)})
        this.state.Reviews[index].Rating=newRate;
        this.state.Reviews[index].Comment=newComment;
        this.state.Reviews[index].TimeStamp="now";
        this.setState({Reviews:this.state.Reviews})
    }

    render(){
        {
            if(!this.state.checkCommentedischecked &&this.props.allReviews!=null&&this.state.Reviews.length==0) 
            {
                this.checkCommented();
                this.setState({
                    checkCommentedischecked:true,
                    Reviews:this.props.allReviews,
                    numOfReviews:this.props.numOfReviews,
                    foodRate:this.props.foodRate
                });
            }
        }

    return(
        <div className="bigFoodInf">
        <div className="food-basicInfo">
            <div className="food-img" >
                {this.props.foodPic!=''?
                    <img src={this.props.foodPic}/>
                    :<div/>
                }
                <div className="infoja">
                    <Link className="tag" to={'/result/2'+'All-'+this.props.time+'----'}><div className="maDot"/>{this.props.time} min</Link>
                    <Link className="tag" to={'/result/2'+this.props.cal+'-0----'}><div className="maDot"/>{this.props.cal} calorie</Link>
                    <Link className="tag" to={'/result/2'+'All-0----'+this.props.foodType}><div className="maDot"/>{this.props.foodType}</Link>
                    <Link className="tag" to={'/result/2'+'All-0---'+this.props.foodNation+'-'}><div className="maDot"/>{this.props.foodNation}</Link>
                </div>
            </div>
            <div className="Info">
                <div className="delR" 
                    style={this.state.isChef?{visibility:"visible"}:{visibility:"hidden"}} 
                    onClick={()=>this.setState({sureDel:!this.state.sureDel})}>
                        <div>x</div>
                </div>
                <div className="sureDel"
                style={this.state.sureDel?{visibility:"visible"}:{visibility:"hidden"}}>
                    Are you sure to delete this recipe? 
                    <div className="div" onClick={()=>this.setState({sureDel:false})}>no</div> 
                    <Link to={'/Profile/'+this.props.chefID} className="div" onClick={()=>this.goDelRecipe()}>yes</Link>
                    </div> 
                <div className="food-name"><strong>{this.props.foodName}</strong></div>
                <div style={{display:"flex",flexDirection:"row",height:"25px",marginLeft:"1px",position:"relative"}}>
                    {CheckRating(this.state.foodRate)}
                    <p style={{
                        position:"absolute",
                        backgroundColor:"rgb(170,5,5)",
                        transform:"translate(100px,-7px)",
                        padding:"1px 8px",
                        marginLeft:"10px",
                        fontSize:"12px",
                        fontWeight:"600",
                        color:"white",
                        borderRadius:"10px"}}>{this.state.foodRate.toFixed(2)}</p>
                </div>
                <div style={{
                    color:"black",
                    fontWeight:"500",
                    margin:"10px 0 5px 0",
                    marginLeft:"2px"
                    }}>
                    <div className="foodDescription">
                        {this.props.description}
                    </div>
                </div>
                
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    padding:"10px 0",
                    height:"50px",
                    position:"relative"}}>
                    <Link className="chefPic" to={'/Profile/'+this.props.chefID} style={{textDecoration:"none",color:"unset"}}>
                        {this.props.chefPic!=''?
                            <img src={this.props.chefPic}/>
                            :<div style={{width:"100%",height:"100%",textAlign:"center",color:"black",fontSize:"14px",fontWeight:"700",textTransform:"uppercase",transform:"translateY(5px)"}}>{this.props.chefName[0]}</div>
                        }
                    </Link>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        padding:"0 10px",
                        justifyContent:"center"}}>
                        <Link className="chefName" to={'/Profile/'+this.props.chefID} style={{textDecoration:"none",color:"unset"}}>{this.props.chefName}</Link>
                        <div className="numOfRecipes">{this.props.numOfRecipes} recipe{this.props.numOfRecipes>1?"s":""}</div>
                    </div>                    
                    <Link className="more" to={'/Profile/'+this.props.chefID} style={{textDecoration:"none",color:"unset"}}>more</Link>
                </div>
                <div style={{
                    fontSize:"17px",
                    fontWeight:"bolder"
                }}>{this.state.numOfReviews} review{this.state.numOfReviews>1?"s":""}</div>
                <div className="allReviews" style={this.state.Commented||this.state.isChef||this.props.myName==""?{height:"335px"}:{}}>
                    <Reviews RVs={this.state.Reviews} myID={this.props.myID} delete={this.goDel} edit={this.goEdit}/>
                </div>
                <div style={{display:"flex",flexDirection:"row" ,width:"fit-content",marginTop:"10px"}}>
                    <div className="myPic">
                        {this.props.myPic!=''?
                            <img src={this.props.myPic}/>
                            :<div style={{
                                width:"100%",
                                height:"100%",
                                textAlign:"center",
                                color:"black",
                                fontSize:"14px",
                                fontWeight:"700",
                                textTransform:"uppercase",
                                transform:"translateY(5px)"}}>
                                    {this.props.myName==""?
                                        "u":this.props.myName[0]}
                            </div>
                        }
                    </div>
                    {!(this.state.Commented||this.state.isChef||this.props.myName=="")?
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",position:"relative"}}>
                        <div className="ratehere">
                            Rate here :
                            <div className="TheRate">
                                <div style={{position:"absolute"}}>{CheckRating(this.state.Rate)}</div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != 1) ? this.setState({Rate:1}) : this.setState({Rate:0})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != 2) ? this.setState({Rate:2}) : this.setState({Rate:0})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != 3) ? this.setState({Rate:3}) : this.setState({Rate:0})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != 4) ? this.setState({Rate:4}) : this.setState({Rate:0})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != 5) ? this.setState({Rate:5}) : this.setState({Rate:0})}}></div>
                            </div>
                            <div className={this.state.Rate>0?"button":"butto"} onClick={()=>{this.goComment()}}><FaPaperPlane/></div>
                        </div>
                        <textarea className="myComment" placeholder="type your comment here" onChange={this.handleChange}></textarea>
                    </div>
                    :
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",position:"relative"}}>
                        <div className="myComment" style={{paddingTop:"5px",paddingBottom:0,backgroundColor:"rgb(247, 247, 247)",fontSize:"14px"}}>
                            {this.state.isChef?
                                "you can not review your own recipes":
                                this.state.Commented?
                                    this.state.Editing?this.state.edited?"edited":"we are editing your review...":
                                    "you already reviewed this rescipe":
                                    "Please sign in before making a review"
                            }
                        </div>
                    </div>
                    }
                </div>

            </div>
        </div>
        </div>
    );
    }
}

export default FoodBasicInfo;
