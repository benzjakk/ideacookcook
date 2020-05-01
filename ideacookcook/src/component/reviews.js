import React,{Component} from "react";
import "../component/styles/reviews.css"
import CheckRating from "../component/CheckRating";
import TimeStamp from "../function/TimeStamp";
import {Link} from 'react-router-dom';


class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state={
            run:false,
            del:false,
            Del:[],
            Del2:[],
            L:[]
        };
    }
    goDel=(index)=>{
        this.setState({L: this.state.L.filter((x,i) => i != index ),run:false,del:false})
        this.props.delete(index)
    }
  RVs=(L)=> {
    const listRVs = L.map((review,index) =>
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
                <p style={{color:"grey",fontWeight:"400",fontSize:"13px",padding:"0",margin:'0 0 0 7px'}}>{review.TimeStamp=="now"?"now":TimeStamp(review.TimeStamp)}</p> 
            </div>
            {CheckRating(review.Rating)}
            <div className="s">{review.Comment}</div>
            <div className="del" onClick={()=>this.setState({del:!this.state.del})} style={review.MemID==this.props.myID?{visibility:"visible"}:{visibility:"hidden"}}><div>...</div></div>
            <div className="goDel" style={review.MemID==this.props.myID&&this.state.del?{visibility:"visible"}:{visibility:"hidden"}} onClick={()=>this.goDel(index)}>delete</div>
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

    render() {
        if(!this.state.run&&this.props.RVs.length!=0){
            this.setState({run:true,L:this.props.RVs})
        }
        return(
            <div>
                {this.RVs(this.state.L)}
            </div>
        );
    }
}

export default Reviews;