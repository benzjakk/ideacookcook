import React, {useState} from "react";
import {FaDonate,FaCircle,FaChevronLeft,FaLine,FaFacebookSquare,FaInstagram} from 'react-icons/fa';
import {MdPhone} from 'react-icons/md';
import './chef-profile.css';
import CheckRating from './CheckRating';
import SW_Pages from './page_switch_Recipes';


function ChefProfile () {    
    const allRecipes=[
        {foodid:"f001",name:"ข้าวผัดกิมจิ",img:'url(/pic/food1.jpg)',cal:"high",nation:"Korean",time:90,rating:4.2,numOfSteps:8},
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
    let chefKnownName="chef_idea";//(20)
    let phoneNumber="0967631841";
    let chefRanking="15";///////////////??????//////////////
    const chefPic='url(/pic/chef1.jpg)';

    const [whatPage,setPage]=useState('All');//All Low Med High Reviews

    const isPage=(props)=>{
        if(props=="Recipes" && whatPage!="Reviews")return("isClicked");
        if (props==whatPage)return ("isClicked");
        else return("isNotClicked");
    }

    const isRecipesOrReviews=(page)=>{
        if(page!="Reviews")return(
            <div className="pageHeader">
                        <div className={isPage("All")} onClick={()=> setPage('All') }>
                            all
                        </div>
                        <div className={isPage("Low")} onClick={()=> setPage('Low') }>
                            low cal
                        </div>
                        <div className={isPage("Medium")} onClick={()=> setPage('Medium') }>
                            medium cal
                        </div>
                        <div className={isPage("High")} onClick={()=> setPage('High') }>
                            high cal
                        </div>
                        <div style={{position:"absolute",width:"70vw",transform:"translateY(1.1vmin)"}}>
                            <div className={whatPage}><FaCircle/></div> 
                        </div> 
            </div>                
             
        );
    }

    const Page_switch=(page)=>{
        if (page=="All")return(<div><SW_Pages page="all" L={allRecipes}/></div>);
        if (page=='Low')return(<div><SW_Pages page="low" L={allRecipes}/></div>);
        if (page=='Medium')return(<div><SW_Pages page="medium" L={allRecipes}/></div>);
        if (page=='High')return(<div><SW_Pages page="high" L={allRecipes}/></div>);
        if (page=="Reviews")return(<div><SW_Pages page="reviews" L={allReviews}/></div>);
    }

    const [aboutIsOpen,setArrow]=useState(false);

    return (             
        <div className="chef-profile" >
            <header></header>
            <section>
                <div className={aboutIsOpen? "dark" : "noDark"} onClick={()=>setArrow(false)}/>
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
                </div> 
                <div className="chef-profile-detail1">
                    <div className="chef-profile-bottom">                        
                        <div className="chef-profile-picture" style={{backgroundImage:chefPic}}></div>
                        <div className="chef-profile-bottom-top">
                            <div className="chef-profile-name">
                                <strong>{chefKnownName}</strong>
                            </div>
                            <div className="myRating">
                                {CheckRating(chefRating)}<p>{chefRating}</p>
                            </div>
                            <div className="R-R">
                                <strong>{numOfRecipes} recipes</strong>
                                <div style={{color:"grey",fontSize:"0.5vmin" , transform:"translateY(0.4vmin)"}}><FaCircle/></div>
                                <strong>{numOfReviews} reviews</strong>
                            </div>
                            </div>
                    </div>                    
                </div>
                <div className="RR">                                                                      
                    <div className={isPage("Recipes")} onClick={()=> setPage('All')}>
                        <p className="n">recipes</p>
                    </div>
                    <div className={isPage("Reviews")} onClick={()=> setPage('Reviews')}>
                        <p className="n">reviews</p>
                    </div>
                </div>
                {isRecipesOrReviews(whatPage)}                
                <div className="chef-profile-infoPages">                              
                    <div className="page_switch">{Page_switch(whatPage)}</div>   
                </div>
            </section>
        </div>
    );
}

export default ChefProfile;
