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
            more:false,
            Del:[],
            Del2:[],
            L:[],
            editing:false,
            editIndex:"",
            rate:0,
            comment:""
        };
    }
    goDel=(index)=>{
        this.setState({L: this.state.L.filter((x,i) => i != index ),run:false,more:false})
        this.props.delete(index)
    }
    
    goEdit=(index)=>{
        this.setState({run:false,more:false})
        this.props.edit(index,this.state.rate,this.state.comment)
    }
    change=(event)=>{
        this.setState({comment:event.target.value});
    }
    edit=()=>{
        return(
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",position:"relative"}}>
                        <div className="ratehere">
                            Rate here :
                            <div className="TheRate">
                                <div style={{position:"absolute"}}>{CheckRating(this.state.rate)}</div>
                                <div className="rrrrr" style={{width:"13px"}} onClick={()=>{(this.state.rate != 1) ? this.setState({rate:1}) : this.setState({rate:0})}}></div>
                                <div className="rrrrr" style={{width:"13px"}} onClick={()=>{(this.state.rate != 2) ? this.setState({rate:2}) : this.setState({rate:0})}}></div>
                                <div className="rrrrr" style={{width:"13px"}} onClick={()=>{(this.state.rate != 3) ? this.setState({rate:3}) : this.setState({rate:0})}}></div>
                                <div className="rrrrr" style={{width:"13px"}} onClick={()=>{(this.state.rate != 4) ? this.setState({rate:4}) : this.setState({rate:0})}}></div>
                                <div className="rrrrr" style={{width:"13px"}} onClick={()=>{(this.state.rate != 5) ? this.setState({rate:5}) : this.setState({rate:0})}}></div>
                            </div>
                            <div className={this.state.Rate>0?"button":"butto"} onClick={()=>{this.goEdit(this.state.editIndex)}}><FaPaperPlane/></div>
                        </div>
                        <textarea className="myComment" onChange={this.change}>{this.state.comment}</textarea>
                    </div>
        );
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
        {!(this.state.editing&&this.state.editIndex==index)?
        <div className="comment">
            <div className="s" style={{fontWeight:"bolder",display:"flex",flexDirection:"row"}}>
                <Link to={'/Profile/'+review.MemID} style={{textDecoration:"none",color:"unset"}}>{review.KnownName}</Link>
                <p style={{color:"grey",fontWeight:"400",fontSize:"13px",padding:"0",margin:'0 0 0 7px'}}>{review.TimeStamp=="now"?"now":TimeStamp(review.TimeStamp)}</p> 
            </div>
            {CheckRating(review.Rating)}
            <div className="s">{review.Comment}</div>
            <div className="del" onClick={()=>this.setState({more:!this.state.more})} style={review.MemID==this.props.myID?{visibility:"visible"}:{visibility:"hidden"}}><div>...</div></div>
            <div className="goDel" style={review.MemID==this.props.myID&&this.state.more?{visibility:"visible"}:{visibility:"hidden"}} onClick={()=>this.goDel(index)}>delete</div>
            <div className="goDel" 
                style={review.MemID==this.props.myID&&this.state.more?{visibility:"visible",transform:"translateY(25px)"}:{visibility:"hidden"}} 
                onClick={()=>this.setState({
                    editing:true,
                    editIndex:index,
                    rate:review.Rating,
                    comment:review.Comment
                    })}>
                edit
            </div>
        </div>:
        this.edit()
        }
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
            this.setState({
                run:true,
                L:this.props.RVs,
                editing:false,
                editIndex:"",
                rate:0,
                comment:""})
        }
        return(
            <div>
                {this.RVs(this.state.L)}
            </div>
        );
    }
}

export default Reviews;
