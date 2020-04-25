import React,{Component} from "react";
import "./reviews.css"
import CheckRating from "./CheckRating";
import TimeStamp from "./TimeStamp";
import {Link} from 'react-router-dom';

const RVs=(props)=> {
    const listRVs = props.L.map((review) =>
    <div style={{display:"flex",flexDirection:'column'}}>
    <div className="review">
        <Link className="reviewerPic" to={'/Profile/'+review.MemID} style={{textDecoration:"none",color:"unset"}}>
            {review.ProfilePicture!=''?
            <img src={review.ProfilePicture}/>:
            <div style={{width:"100%",height:"100%",textAlign:"center",color:"black",fontSize:"14px",fontWeight:"700",textTransform:"uppercase",transform:"translateY(5px)"}}>{review.KnownName[0]}</div>}
        </Link>
        <div className="comment">
            <div className="s" style={{fontWeight:"bolder",display:"flex",flexDirection:"row"}}>
                <Link to={'/Profile/'+review.MemID} style={{textDecoration:"none",color:"unset"}}>{review.KnownName}</Link>
                <p style={{color:"grey",fontWeight:"400",fontSize:"13px",padding:"0",margin:'0 0 0 7px'}}>{TimeStamp(review.TimeStamp)}</p> 
            </div>
            {CheckRating(review.Rating)}
            <div className="s">{review.Comment}</div>
        </div>
    </div>
    </div>
    
    )
    return(
        <div className="reviews">
            {listRVs}
        </div>
    );
}

class Reviews extends Component {
    render() {
        return(
            <div>
                <RVs L={this.props.RVs}/>
            </div>
        );
    }
}

export default Reviews;