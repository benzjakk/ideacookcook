import Moment from "moment";

const TimeStamp=(t)=>{
    var a='';
    if(t.substring(4,7)=='Jan')a='01';
    else if (t.substring(4,7)=='Feb')a='02';
    else if (t.substring(4,7)=='Mar')a='03';
    else if (t.substring(4,7)=='Apr')a='04';
    else if (t.substring(4,7)=='May')a='05';
    else if (t.substring(4,7)=='Jun')a='06';
    else if (t.substring(4,7)=='Jul')a='07';
    else if (t.substring(4,7)=='Aug')a='08';
    else if (t.substring(4,7)=='Sep')a='09';
    else if (t.substring(4,7)=='Oct')a='10';
    else if (t.substring(4,7)=='Nov')a='11';
    else if (t.substring(4,7)=='Dec')a='12';
    return Moment(t.substring(11,15)+a+t.substring(8,10),"YYYYMMDD").fromNow();
}

export default TimeStamp;