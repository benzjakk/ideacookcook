import React,{Component} from "react";
import "./reviews.css"
import CheckRating from "./CheckRating";

const RVs=(props)=> {
    const listRVs = props.L.map((review) =>
    <div className="review">
        <div className="reviewerPic" style={{backgroundImage:review.pic}}/>
        <div className="comment">
            <div style={{fontWeight:"bolder"}}>{review.reviewBy}</div>
            {CheckRating(review.rated)}
            <div>{review.comment}</div>
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