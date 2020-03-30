import React from "react";
// import './food.css'
function Test() {
    // const sayHello=()=> {
    //     console.log("hello");
    // }
    return (
        <div>  
            <header></header>
            <section>    
            <a href="index.html"><img className="food-img" src="pic/food1.jpg" alt="food1" /></a>
            <div className="food-basicInfo">
                <h1>ข้าวผัดกิมจิ</h1>
            </div>
            <div className="chef">
                    <div className="chef-L">
                        <div className="chef-box-img">
                            <img className="chef-img" src="pic/chef1.jpg" alt="chef1" />
                        </div>
                        <div className="chef-name-active">
                            <div className="chef-name"><strong>chef_idea</strong></div>
                            <div>Active 10 minutes ago</div>
                            
                        </div>
                        <div className="more">
                            <div className="more-dot"  >
                                <strong>...</strong>
                            </div>
                        </div>
                    </div>
                    <div className="chef-R">
                        <div className="chef-3inR">
                            <div className="c1" onclick="window.location='chef-profile.html'">
                                <div className="c"><strong>56</strong></div>
                                <div className="c">recipes</div>
                            </div>
                            <div className="stick"> </div>
                            <div className="c2" onclick="window.location='chef-profile.html'">
                                <div className="c"><strong>4.8</strong></div>
                                <div className="c">rating</div>
                            </div>
                            <div className="stick"></div>
                            <div className="c3" onclick="window.location='chef-profile.html'">
                                <div className="c"><strong>15</strong></div>
                                <div className="c">rank</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="tutorial">about food</div>
            <div className="review">reviews</div>
            </section>
            {/* <h1>Hello React</h1>
            <button onClick={sayHello}>hello</button> */}
        </div>
    );
}

export default Test;