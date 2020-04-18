import React,{Component} from "react";
import "./results.css"
import {FaStar,FaCircle} from "react-icons/fa";

const RSs=(props)=> {
    const newList = [...props.L];
    //Latest มาจาก back เรียงมาแล้ว
    if(props.SortBy == "Popularity"){
        newList.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
    }
    else if(props.SortBy == "Duration"){
        newList.sort((a, b) => (a.time > b.time) ? 1 : -1)
    }
    const listRSs = newList.map((food) =>
    <div className="food-box">
        <div className="fpBox"><div className="fp" style={{backgroundImage:food.img}}/></div>
        <div className="food-info">
            <div className="food-info-name">{food.name}</div>
            <div className="f-info">
                <div style={{color:"orange",fontSize:"1.8vmin",transform:"translateY(-0.2vmin)"}}><FaStar/></div> 
                <div style={{color:"rgb(170,5,5)"}}><strong>{food.rating}</strong></div>
                <div style={{color:"rgb(190, 190, 190)"}}><strong>({food.numOfReviews})</strong></div>
                <div style={{color:"rgb(190, 190, 190)",fontSize:"0.5vmin"}}><FaCircle/></div>
                <div style={{color:"rgb(190, 190, 190)"}}><strong>{food.cal} cal</strong></div>
            </div>
            <div className="f-info">
                <div className="time">{food.time} min</div>
                <div className="steps">{food.numOfSteps} steps</div>
            </div>
        </div>
    </div>
    )
    return(
        <div className="result-box">
            {listRSs}
        </div>
    );
}

class Results extends Component {
    render() {
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"}}>
            <RSs L={this.props.RSs} SortBy={this.props.SortBy}/>
            <div style={{fontSize:"12px",margin:"0 0 20px 0",textAlign:"center"}}>no more recipes found</div>
            </div>
        );
    }
}

export default Results;