import React, { Component } from "react";
import "../component/styles/RawNTool.css";
import { FaCarrot, FaCircle, FaToolbox, FaUtensilSpoon } from "react-icons/fa";

const Tools = (props) => {
  const listTs = props.L.map((tool, index) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="RNT" style={{ width: "250px" }}>
        <div className="index">{index + 1}</div>
        <div
          className="div"
          style={{
            maxWidth: "170px",
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          {tool}
        </div>
        {/* <div style={{width:"50px",textAlign:"center"}}>{tool.Quantity}</div> */}
      </div>
    </div>
  ));
  return (
    <div className="all">
      <FaUtensilSpoon className="iconnn" />
      <div className="headerrr">Tools</div>
      <div className="allTools">{listTs}</div>
    </div>
  );
};

const Raws = (props) => {
  const listRs = props.L.map((raw, index) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="RNT">
        <div className="index">{index + 1}</div>
        <div
          className="div"
          style={{ maxWidth: "120px", wordWrap: "break-word" }}
        >
          {raw.RawFood}
        </div>
        <div className="div" style={{ maxWidth: "70px", textAlign: "center" }}>
          {raw.Quantity}
        </div>
        <div className="div" style={{ maxWwidth: "100px", textAlign: "right" }}>
          {raw.Unit}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="all">
      <FaCarrot className="iconnn" />
      <div className="headerrr">Ingredients </div>
      <div className="allRaws">{listRs}</div>
    </div>
  );
};

class RawNTool extends Component {
  render() {
    return (
      <div className="bigRawNTool">
        <div className="RawNTool">
          <Tools L={this.props.Ts} />
          <Raws L={this.props.Rs} />
        </div>
      </div>
    );
  }
}

export default RawNTool;
