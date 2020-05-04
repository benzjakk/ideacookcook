import React, { Component } from "react";
import loadingPic from "./pic/loading-png-gif.gif";
class Loading extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          alignItems: "center",
          fontSize: "50px",
          marginTop: "200px",
          color: "rgb(170,5,5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={loadingPic} height="100" width="100"></img>
      </div>
    );
  }
}
export default Loading;
