import React, {Component} from "react";
import './food-basicInfo.css';
import CheckRating from './CheckRating';
import Reviews from './reviews';
import {FaPaperPlane, FaCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class FoodBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            Rate:"0"
        };
    }

    render(){
    return(
        <div className="food-basicInfo">
            <div className="food-img" >
                {this.props.foodPic!=''?
                    <img src={this.props.foodPic}/>
                    :<div/>
                }
            </div>
            <div className="Info">
                <div className="food-name"><strong>{this.props.foodName}</strong></div>
                <div style={{display:"flex",flexDirection:"row",height:"25px",marginLeft:"1px"}}>
                    {CheckRating(this.props.foodRate)}
                    <p style={{
                        position:"absolute",
                        backgroundColor:"rgb(170,5,5)",
                        transform:"translate(100px,-7px)",
                        padding:"1px 8px",
                        marginLeft:"10px",
                        fontSize:"12px",
                        fontWeight:"600",
                        color:"white",
                        borderRadius:"10px"}}>{this.props.foodRate}</p>
                </div>
                <div style={{
                    color:"black",
                    fontWeight:"500",
                    margin:"10px 0 5px 0",
                    marginLeft:"2px"
                    }}>
                    <div style={{fontSize:"13px"}}>
                        {this.props.time} min
                        <FaCircle className="maDot"/>
                        {this.props.numOfSteps} steps
                    </div>
                    <div style={{fontSize:"13px"}}>
                        {this.props.cal} calorie
                        <FaCircle className="maDot"/>
                        {this.props.foodType}
                        <FaCircle className="maDot"/>
                        {this.props.foodNation}
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
                        <div className="numOfRecipes">{this.props.numOfRecipes} recipes</div>
                    </div>                    
                    <Link className="more" to={'/Profile/'+this.props.chefID} style={{textDecoration:"none",color:"unset"}}>more</Link>
                </div>
                <div style={{
                    fontSize:"17px",
                    fontWeight:"bolder"
                }}>{this.props.numOfReviews} review{this.props.numOfReviews>1?"s":""}</div>
                <div className="allReviews">
                    <Reviews RVs={this.props.allReviews}/>
                </div>
                <div style={{display:"flex",flexDirection:"row" ,marginTop:"10px"}}>
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
                                    {this.props.myName[0]}
                            </div>
                        }
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <div className="ratehere">
                            Rate here :
                            <div className="TheRate">
                                <div style={{position:"absolute"}}>{CheckRating(this.state.Rate)}</div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != "1") ? this.setState({Rate:"1"}) : this.setState({Rate:"0"})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != "2") ? this.setState({Rate:"2"}) : this.setState({Rate:"0"})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != "3") ? this.setState({Rate:"3"}) : this.setState({Rate:"0"})}}></div>
                            <   div className="rrrrr" onClick={()=>{(this.state.Rate != "4") ? this.setState({Rate:"4"}) : this.setState({Rate:"0"})}}></div>
                                <div className="rrrrr" onClick={()=>{(this.state.Rate != "5") ? this.setState({Rate:"5"}) : this.setState({Rate:"0"})}}></div>
                            </div>
                            <div className="button"><FaPaperPlane/></div>
                        </div>
                        <textarea className="myComment" placeholder="type your comment here"></textarea>
                        
                    </div>
                </div>

            </div>
        </div>
    );
    }
}

export default FoodBasicInfo;
