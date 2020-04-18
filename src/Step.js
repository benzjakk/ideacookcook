import React, {Component, useState} from "react";
import './step.css';
import {FaChevronRight} from 'react-icons/fa';
const upOrDown=(step)=>{
    if(step.numOfSteps%2==1)
    return(
        <div className="steps">
            <div className="backkk"/>
            {/* <div className="backkk2"/> */}
            <div className="stepPic" style={{backgroundImage:step.pic}}/>
            <div className="stepDescription">  
                <div className="St">{step.numOfSteps<10? "0":""}{step.numOfSteps}</div>              
                {step.description}
            </div>
        </div>
    );
    else 
    return(
        <div className="steps">
            <div className="backkkk"/>
            {/* <div className="backkkk2"/> */}
            <div className="stepDescription">  
                <div className="St">{step.numOfSteps<10? "0":""}{step.numOfSteps}</div>              
                {step.description}
            </div>
            <div className="stepPic" style={{backgroundImage:step.pic}}/>
        </div>
    );
}
const STs=(props)=> {
    const listSTs = props.L.map((step) =>
    <div >
        {upOrDown(step)}
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