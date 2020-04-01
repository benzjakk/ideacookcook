import React, { Component } from 'react';

class Username extends Component {
   
    render() { 
        return ( 
            <div >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
         );
    }
}
 
export default Username;