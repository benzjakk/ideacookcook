import React, {useState} from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './chef-profile.css';
import SW_Pages from './page_switch_Recipes';


function ChefProfile () {    
    const allRecipes=[
        {foodid:"f001",name:"food1",cal:1800},
        {foodid:"f002",name:"food2",cal:750},
        {foodid:"f003",name:"food3",cal:2500},
        {foodid:"f001",name:"food1",cal:1800},
        {foodid:"f002",name:"food2",cal:750},
        {foodid:"f003",name:"food3",cal:2500},
        {foodid:"f001",name:"food1",cal:1800},
        {foodid:"f002",name:"food2",cal:750},
        {foodid:"f003",name:"food3",cal:2500},
        {foodid:"f001",name:"food1",cal:1800},
        {foodid:"f002",name:"food2",cal:750},
        {foodid:"f003",name:"food3",cal:2500}
    ];

    const allReviews=[
        {foodid:"f003",name:"food3",rated:5,comment:"this is one of my favorites!!",by:"PakSaeRoi"},
        {foodid:"f002",name:"food2",rated:5,comment:"i love it",by:"JoYiSung"},
        {foodid:"f001",name:"food1",rated:4,comment:"good",by:"GuenwonLovelove"}
    ]

    const allAbout=[
        {message:"i love cooking more than my life.",contact:"096xxxxxxx",joined:"28-3-2020"}
    ]
    
    let chefName="chef_idea" ;//(15)
    let message="eieiwowwowhoohoo ";//(80)
    let numOfRecipes="56";
    let chefRating="4.8";
    let chefRanking="15";///////////////??????//////////////
    const chefPic='url(/pic/chef1.jpg)';

    const [whatPage,setPage]=useState('Recipes');

    const openPage=(props)=>{
        if (props==whatPage)return ("isClicked");
        else return("isNotClicked");
    }

    const Page_switch=(page)=>{
        if (page=="About")return(<div><SW_Pages page="about" L={allAbout}/>pageAbout</div>);
        if (page=='Recipes')return(<div><SW_Pages page="recipes" L={allRecipes}/>pageRecipes</div>);
        if (page=="Reviews")return(<div><SW_Pages page="reviews" L={allReviews}/>pageReviews</div>);
    }

    return (             
        <div className="chef-profile">
            {/* <header></header> */}
            <section>
                <div className="chef-profile-detail1">
                     {/* coversize=68*20  */}
                     <div className="coverPic" style={{backgroundImage:chefPic}}>
                         <div className="chef-cover-pic" style={{backgroundImage:chefPic}}/>
                     </div>                    
                     <div className="chef-profile-bottom">                        
                        <div className="chef-profile-picture" style={{backgroundImage:chefPic}}/>
                        <div className="chef-profile-bottom-top">
                            <div>
                                <div className="chef-profile-name"><strong>{chefName}</strong></div>
                                <div className="RR">
                                <div className="R1"><p><strong>{numOfRecipes}</strong> rcp</p></div>
                                    <div className="R2"><p><strong>{chefRating}</strong> #</p></div>
                                </div>
                            </div>
                            <div>
                                <div className="chef-profile-message">{message}</div>
                                <div className="donate">donate</div>
                            </div>
                        </div>
                     </div>
                     <div className="chef-cover-pic2" />
                    
                </div>                
                <div className="space"/>
                <div className="chef-profile-infoPages">
                    <div className="pageHeader">
                        <div className={openPage("About")} onClick={()=> setPage('About') }> <strong>About</strong></div>
                        <div className={openPage("Recipes")} onClick={()=> setPage('Recipes') }> <strong>Recipes</strong></div>
                        <div className={openPage("Reviews")} onClick={()=> setPage('Reviews') }> <strong>Reviews</strong></div>
                    </div>                    
                    <div className="page_switch">{Page_switch(whatPage)}</div>
                </div>
            </section>
        </div>
    );
}

export default ChefProfile;