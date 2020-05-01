import React, {useState,Component} from "react";
import {FaDonate,FaCircle,FaChevronLeft,FaLine,FaFacebookSquare,FaInstagram, FaPhone} from 'react-icons/fa';
import {MdPhone} from 'react-icons/md';
import '../page/styles/chef-profile.css';
import CheckRating from '../component/CheckRating';
import SW_Pages from '../component/page_switch_Recipes';
import axios from "axios";
import Loading from '../component/Loading';

let numOfRecipes="56";
    let numOfReviews="72";
    let chefRating="4.2";
    let chefKnownName="chef_idea012345678";//(18)
    let phoneNumber="0967631841";
    let chefRanking="15";
    const chefPic='url(/pic/chef1.jpg)';

const isPage=(props,page)=>{
        if(props=="Recipes" && page!="Reviews")return("isClicked");
        if (props==page)return ("isClicked");
        else return("isNotClicked");
}

class ChefProfile extends Component {    
    constructor(props) {
        super(props);
        this.state={
            page:"All",
            contactIsOpen:false,
            Data:this.props.match.params.id,
            Profile:[],
            Recipes:[],
            Reviews:[],
            Loaded:false
        };
    }   
    componentDidMount=()=> {
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/Profile/'+ this.state.Data)
        .then(res => {
            console.log(res.data.data);
            this.setState({
                Profile:res.data.data,
                Recipes:res.data.data.Recipes,
                Reviews:res.data.data.Review,
                Loaded:true
            });
            console.log(this.state.Recipes);
            console.log(this.state.Reviews);
        });
    }
    isRecipesOrReviews=()=>{
        if(this.state.page!="Reviews")return(
            <div className="pageHeader">
                        <div className={isPage("All",this.state.page)} onClick={()=> this.setState({page:"All"})}>
                            all
                        </div>
                        <div className={isPage("Low",this.state.page)} onClick={()=> this.setState({page:"Low"}) }>
                            low cal
                        </div>
                        <div className={isPage("Medium",this.state.page)} onClick={()=> this.setState({page:"Medium"}) }>
                            medium cal
                        </div>
                        <div className={isPage("High",this.state.page)} onClick={()=> this.setState({page:"High"}) }>
                            high cal
                        </div>
                        <div style={{position:"absolute",width:"400px",transform:"translateY(1.1vmin)"}}>
                            <div className={this.state.page}><FaCircle/></div> 
                        </div> 
            </div>                
             
        );
    }

    Page_switch=()=>{
        if (this.state.page!="Reviews")return(<div className="page_switch">
            <SW_Pages page={this.state.page} L={this.state.Recipes}/></div>);
        else if (this.state.page=="Reviews")return(<div className="page_switch"><SW_Pages page={this.state.page} L={this.state.Reviews}/></div>);
    }

    setArrow=(a)=>{
        this.setState({aboutIsOpen:a})
    }

    render(){
    return (             
        <div className="chef-profile" >
            <header></header>
            {!this.state.Loaded?<Loading/>:            
            <section>
                <div className="chef-profile-bottom">
                        <div className="chef-profile-picture">                        
                            {this.state.Profile.ProfilePicture!=''?
                                <img src={this.state.Profile.ProfilePicture}/>:
                                <div style={{
                                    width:"100%",
                                    height:"100%",
                                    textAlign:"center",
                                    color:"black",
                                    fontSize:"56px",
                                    fontWeight:"700",
                                    textTransform:"uppercase",
                                    transform:"translateY(20px)"}}>
                                        {(""+ this.state.Profile.KnownName)[0]}
                                </div>
                            }
                        </div>
                        <div className="chef-profile-bottom-top">
                            <div className="chef-profile-name">
                                <strong>{this.state.Profile.KnownName}</strong>
                            </div>
                            <div className="myRating">
                                {CheckRating(this.state.Profile.AvgRating)}
                                <p>{this.state.Profile.AvgRating}</p>
                            </div>
                            <div className="R-R">
                                <strong>{this.state.Recipes.length} recipes</strong>
                                <div style={{color:"grey",fontSize:"4px" , transform:"translateY(4px)"}}><FaCircle/></div>
                                <strong>{this.state.Reviews.length} reviews</strong>
                            </div>
                        </div>
                        <div className="moreContact" onClick={()=>this.setState({contactIsOpen:!this.state.contactIsOpen})}>
                            <div className="b">...</div>
                            {this.state.contactIsOpen?<div className="contact">
                                {this.state.Profile.Facebook.length!=0?
                                    <div className="c">
                                        <div>{this.state.Profile.Facebook}</div> 
                                        <FaFacebookSquare className="contact-icon"/>
                                        </div>:null}
                                {this.state.Profile.Instagram.length!=0?
                                    <div className="c">
                                        <div>{this.state.Profile.Instagram}</div> 
                                        <FaInstagram className="contact-icon"/>
                                    </div>:null}
                                {this.state.Profile.Line.length!=0?
                                    <div className="c">
                                        <div>{this.state.Profile.Line}</div> 
                                        <FaLine className="contact-icon"/>
                                    </div>:null}
                                {this.state.Profile.PhoneNo.length!=0?<div className="c"><div>{this.state.Profile.PhoneNo}</div> <FaPhone className="contact-icon"/></div>:null}
                            </div>:null}
                        </div>
                        
                </div>
                <div className="RR">                                                                      
                    <div className={isPage("Recipes",this.state.page)} onClick={()=> this.setState({page:"All"})}>
                        <p className="n">recipes</p>
                    </div>
                    <div className={isPage("Reviews",this.state.page)} onClick={()=> this.setState({page:"Reviews"})}>
                        <p className="n">reviews</p>
                    </div>
                </div>
                {this.isRecipesOrReviews(this.state.page)}                                 */}
                {this.Page_switch()}  

                {/* <div className={aboutIsOpen? "dark" : "noDark"} onClick={()=>setArrow(false)}/>
                <div className={aboutIsOpen? "aboutOpen" : "aboutClose"}>
                        <div className="arrow" onClick={()=> setArrow(!aboutIsOpen)}><FaChevronLeft className={aboutIsOpen? "right" : "left"}/> </div>
                        <div className="about-info">
                            <div className="socialMedia">
                                <div className="contact-icon"><MdPhone/></div>                              
                                <div className="contact-icon"><FaDonate/></div>
                                <div className="contact-icon"><MdPhone/></div>
                            </div>
                            <div className="socialMedia">                                
                                <div className="contact-icon"><FaInstagram/></div>
                                <div className="contact-icon"><FaLine/></div>
                                <div className="contact-icon"><FaFacebookSquare/></div>
                            </div>
                        </div>
                </div>  */}
                
            </section>}
        </div>
    );
    }
}

export default ChefProfile;
