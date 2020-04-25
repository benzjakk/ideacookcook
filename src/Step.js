import React, {Component, useState} from "react";
import './step.css';
import {FaChevronRight} from 'react-icons/fa';
const upOrDown=(step,index)=>{
    if(index%2==1)
    return(
        <div className="steps">
            <div className="backkk"/>
            {/* <div className="backkk2"/> */}
            <div className="stepPic">
                {step.StepPic!=''? <img src={step.StepPic}/>:<div/>}
            </div>
            <div className="stepDescription">  
                <div className="St">{index<10? "0":""}{index}</div>              
                {step.Description}
            </div>
        </div>
    );
    else 
    return(
        <div className="steps">
            <div className="backkkk"/>
            {/* <div className="backkkk2"/> */}
            <div className="stepDescription">  
                <div className="St">{index<10? "0":""}{index}</div>              
                {step.Description}
            </div>
            <div className="stepPic">
                {step.StepPic!=''? <img src={step.StepPic}/>:<div/>}
            </div>
        </div>
    );
}
const STs=(props)=> {
    const listSTs = props.L.map((step,index) =>
    <div >
        {upOrDown(step,index+1)}
    </div>
    )
    return(
        <div className="step">
           <div className="middle"></div>
            {listSTs}
        </div>
    );
}

class Step extends Component {
    render(){
        return(
            <div className="bigStep">
                <STs L={this.props.L}/>
            </div>
        );
    }
}

export default Step;