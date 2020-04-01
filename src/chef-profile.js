import React, {useState} from "react";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import {FaCircle} from 'react-icons/fa';
import {MdStarBorder,MdStarHalf,MdStar,} from 'react-icons/md';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaAccessibleIcon } from "react-icons/fa";
import './chef-profile.css';
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
        {foodid:"f002",name:"food2",rated:5,comment:"i love it",by:"JoYiSung"},
        {foodid:"f001",name:"food1",rated:4,comment:"good",by:"GuenwonLovelove"}
    ]

    const allAbout=[
        {message:"i love cooking more than my life.",contact:"096xxxxxxx",joined:"28-3-2020"}
    ]
    let numOfRecipes="56";
    let numOfReviews="72";
    let chefRating="4.2";
    let chefKnownName="chef_idea";//(20)
    let chefRanking="15";///////////////??????//////////////
    const chefPic='url(/pic/chef1.jpg)';

    const CheckRating=(rating)=>{
        if(rating<0.5) return(<div><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<0.75) return(<div><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>)
        else if(rating<1.25) return(<div><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<1.75) return(<div><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<2.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<2.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<3.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<3.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<4.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /></div>);
        else if(rating<4.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /></div>);
        else return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /></div>);
    }

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
                            <strong>All</strong>
                            <div className="dot"><FaCircle/></div>
                        </div>
                        <div className={isPage("Low")} onClick={()=> setPage('Low') }>
                            <strong>Low calorie</strong>
                            <div className="dot"><FaCircle/></div>
                        </div>
                        <div className={isPage("Medium")} onClick={()=> setPage('Medium') }>
                            <strong>Medium calorie</strong>
                            <div className="dot"><FaCircle/></div>
                        </div>
                        <div className={isPage("High")} onClick={()=> setPage('High') }>
                            <strong>High calorie</strong>
                            <div className="dot"><FaCircle/></div>
                        </div>
            </div>        
        );
        else return(<div className="noPageHeader"/>)
    }

    const Page_switch=(page)=>{
        if (page=="All")return(<div><SW_Pages page="all" L={allRecipes}/></div>);
        if (page=='Low')return(<div><SW_Pages page="low" L={allRecipes}/></div>);
        if (page=='Medium')return(<div><SW_Pages page="medium" L={allRecipes}/></div>);
        if (page=='High')return(<div><SW_Pages page="high" L={allRecipes}/></div>);
        if (page=="Reviews")return(<div><SW_Pages page="reviews" L={allReviews}/></div>);
    }

    return (             
        <div className="chef-profile">
            {/* <header></header> */}
            <section>
                <div className="chef-profile-detail1">
                     {/* coversize=68*20  */}
                     <div className="coverPic" style={{backgroundImage:chefPic}}>
                         <div className="chef-cover-pic" style={{backgroundImage:chefPic}}/>
                         <div className="ratingShadow"/>
                     </div>                    
                     <div className="chef-profile-bottom">                        
                        <div className="chef-profile-picture" style={{backgroundImage:chefPic}}>
                            
                        </div>
                        <div className="chef-profile-bottom-top">
                            {/* <div> */}
                                <div className="chef-profile-name">
                                    <strong>{chefKnownName}</strong>
                                    {/* <div className="myRating">
                                        <p>{chefRating}</p>
                                        <FaStar className="myStar"/>
                                    </div> */}
                                </div>
                                <div className="myRating">
                                    {CheckRating(chefRating)}<p>{chefRating}</p>
                                    {/* {chefFirstName} {chefLastName} */}
                                </div>
                                <div className="RR">                                                                      
                                    <div className={isPage("Recipes")} onClick={()=> setPage('All')}><p>{numOfRecipes}</p> <p className="n">recipes</p></div>
                                    <div className={isPage("Reviews")} onClick={()=> setPage('Reviews')}><p>{numOfReviews}</p> <p className="n">reviews</p></div>
                                    
                                </div>
                                {/* <div className="donate"><FaDonate/></div>   */}
                            </div>
                                
                                
                        {/* </div> */}
                     </div>
                     <div className="chef-cover-pic2" />
                    
                </div>                
                <div className="chef-profile-infoPages">
                    {isRecipesOrReviews(whatPage)}            
                    <div className="page_switch">{Page_switch(whatPage)}</div>
                    
                </div><div className="bottom"></div>
            </section>
        </div>
    );
}

export default ChefProfile;