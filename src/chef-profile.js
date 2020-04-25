import React, {useState,Component} from "react";
import {FaDonate,FaCircle,FaChevronLeft,FaLine,FaFacebookSquare,FaInstagram} from 'react-icons/fa';
import {MdPhone} from 'react-icons/md';
import './chef-profile.css';
import CheckRating from './CheckRating';
import SW_Pages from './page_switch_Recipes';
import axios from "axios";

const allRecipes=[
    {foodid:"f002",name:"ข้าวผัดกิมจิอิอิอุ้วๆว้าวว้าวเยี่ยมยอดสุดๆไปเลยนะคะเนี่ย",img:'url(/pic/food1.jpg)',cal:"high",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f003",name:"food3",img:'url(/pic/food1.jpg)',cal:"high",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f004",name:"ข้าวผัดกิมจิข้าวผัดกิมจิข้าวผัดกิมจิข้าวผัดกิมจิข้าวผัดกิมจิ",img:'url(/pic/food1.jpg)',cal:"high",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f005",name:"food5",img:'url(/pic/food1.jpg)',cal:"high",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f006",name:"food6",img:'url(/pic/food1.jpg)',cal:"medium",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f007",name:"food7",img:'url(/pic/food1.jpg)',cal:"medium",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f008",name:"food8",img:'url(/pic/food1.jpg)',cal:"medium",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f009",name:"food9",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f010",name:"food10",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f011",name:"food11",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f012",name:"food12",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f013",name:"food13",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
    {foodid:"f014",name:"food14",img:'url(/pic/food1.jpg)',cal:"low",nation:"Korean",time:90,rating:4.2,numOfSteps:8}
];

const allReviews=[
    {foodid:"f003",name:"food3",rated:5,comment:"this is one of my favorites!!",by:"PakSaeRoi"},
    {foodid:"f002",name:"food2",rated:5,comment:"i really really really really really really really really really really  really really really really really really really really like it",by:"JoYiSung"},
    {foodid:"f001",name:"food1",rated:4,comment:"good",by:"GuenwonLovelove"},
    {foodid:"f005",name:"food5",rated:3,comment:"",by:"daeJangguem"}
]

const allAbout=[
    {message:"i love cooking more than my life.",contact:"096xxxxxxx",joined:"28-3-2020"}
]

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
            aboutIsOpen:"false",
            Data:this.props.match.params.id,
            Profile:[],
            Recipes:[],
            Reviews:[]
        };
    }   
    componentDidMount=()=> {
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/Profile/'+ this.state.Data)
        .then(res => {
            console.log(res.data.description);
            this.setState({
                Profile:res.data.data,
                Recipes:res.data.data.Recipes,
                Reviews:res.data.data.Review});
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
        if (this.state.page!="Reviews")return(<div className="page_switch"><SW_Pages page={this.state.page} L={this.state.Recipes}/></div>);
        // if (this.state.page=='Low')return(<div className="page_switch"><SW_Pages page="low" L={this.state.Recipes}/></div>);
        // if (this.state.page=='Medium')return(<div className="page_switch"><SW_Pages page="medium" L={this.state.Recipes}/></div>);
        // if (this.state.page=='High')return(<div className="page_switch"><SW_Pages page="high" L={this.state.Recipes}/></div>);
        else if (this.state.page=="Reviews")return(<div className="page_switch"><SW_Pages page={this.state.page} L={this.state.Reviews}/></div>);
    }

    setArrow=(a)=>{
        this.setState({aboutIsOpen:a})
    }

    render(){
    return (             
        <div className="chef-profile" >
            <header></header>            
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
                </div>
                <div className="RR">                                                                      
                    <div className={isPage("Recipes",this.state.page)} onClick={()=> this.setState({page:"All"})}>
                        <p className="n">recipes</p>
                    </div>
                    <div className={isPage("Reviews",this.state.page)} onClick={()=> this.setState({page:"Reviews"})}>
                        <p className="n">reviews</p>
                    </div>
                </div>
                {this.isRecipesOrReviews(this.state.page)}                
                {/* <div className="chef-profile-infoPages">                               */}
                    {this.Page_switch()}  
                {/* </div> */}

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
                
            </section>
        </div>
    );
    }
}

export default ChefProfile;
