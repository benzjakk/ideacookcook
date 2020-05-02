import React, {Component, useState} from "react";
import '../component/styles/step.css';


class Step extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            picNum:1,
            picpicNum:1
        };
    }
    picpic=(L)=>{
        
        if(L=="")return(null);
        if(typeof(L)=="string")return(<img className="imG" src={L}/>);
        const picss = L.map((pic,index) =>
            <img className={this.state.picpicNum==index+1?"imG":"img"} src={pic} onClick={()=>this.setState({picpicNum:index+1})}/>
        )
        return(<div className="picpic">{picss}</div>);
    }
    Pics=(L,picNum)=>{    
        if(L=="")return(
            <div className="backkkk">
                <div className="stepPic">
                    <div className="noPic">...No picture in this step...</div>
                </div> 
                <div className="bigpicpic">
                    <img className="img"/>
                    <img className="img"/>
                    <img className="img"/>
                    <img className="img"/>
                    <img className="img"/>
                    <img className="img"/>
                </div>
            </div>
        );
        if(typeof(L)=="string")return(
            <div className="backkkk">
                <div className="stepPic">
                    <img className="img" src={L}/>
                </div> 
                <div className="bigpicpic">
                    <img className="img"/>
                </div>
            </div>
        );
        // if(props.L.length!=0)
        return(
        <div className="backkkk">
            <div className="stepPic">
                <img className="img" src={L[this.state.picpicNum-1]}/>
            </div>
            <div className="bigpicpic">{this.picpic(L)}</div>
        </div>);
        
    }
    STs=()=> {
        const listSTs = this.props.L.map((step,index) =>
            <div 
                className={index+1==this.state.picNum?"isSteps":"steps"} 
                style={index%2==0?{}:{color:"rgb(170,5,5)"}}
                onClick={()=>this.setState({picNum:index+1,picpicNum:1})}>
               <div className="St">
                        {index+1<10? " 0":" "}{index+1}
                    </div>      
                <div className="stepDescription" >  
                    <strong>Step {index+1}</strong>
                    {step.Description}
                </div>         
            </div>
        )
        
        return(
            <div className="step">
                {listSTs}
            </div>
        );
    }
    render(){
        return(
            <div className="bigStep">
                <div style={{display:"flex",flexDirection:"row",margin:"0 20px"}}>                
                    {this.Pics(this.props.L[this.state.picNum-1].StepPic,this.state.picNum)}
                    {this.STs()}
                </div>
            </div>
        );
    }
}

export default Step;
