import React from "react";
import '../component/styles/CheckRating.css';
import {MdStarBorder,MdStarHalf,MdStar,} from 'react-icons/md';

const CheckRating=(rating)=>{
    if(rating==-1)rating=0;
    if(rating<0.5) return(<div><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<0.75) return(<div><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>)
    else if(rating<1.25) return(<div><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<1.75) return(<div><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<2.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<2.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<3.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<3.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<4.25) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarBorder className="myStar" /></div>);
    else if(rating<4.75) return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStarHalf className="myStar" /></div>);
    else return(<div><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /><MdStar className="myStar" /></div>);
}

export default CheckRating;
