import React, { Component } from "react";

import axios from "axios";
const Eiei=(props)=>{
    const eiei2=props.L.map((person) =>
    <div>{person.KnownName}</div>
    );
    return(
        <div>{eiei2}</div>
    );
}
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            persons:[]
        };
    }

    componentDidMount=()=> {
        axios.get('https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListRecipesName',{'keyword':'นรก'})
        .then(res => {
            console.log(res.data.data);
            this.setState({persons:res.data.data});
        });
    }
    

    render(){
        return(
            <ul>                                
                {this.state.persons.KnownName}
                {/* <Eiei L={this.state.persons}/> */}
            </ul>
        );
    }
}

export default List;