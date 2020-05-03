import React, { Component, useState, Fragment } from "react";
import "./styles/method.css";
import upload from "./pic/upload.png";

class method extends Component {
  state = {
    meths: [""],
    jsonMeths: [{ Description: "" }],
    methsPic: [],
    fileURL: [upload],
  };

  handleText = (i) => async (e) => {
    let meths = this.state.meths;
    let jsonMeths = this.state.jsonMeths;
    let jsonMeth = {};
    meths[i] = e.target.value;
    jsonMeth.Description = e.target.value;
    jsonMeths[i] = jsonMeth;
    await this.setState({
      meths,
      jsonMeths,
    });
    this.updateParent();
  };

  handleFile = (i) => async (e) => {
    let methsPic = [...this.state.methsPic];
    let fileURL = [...this.state.fileURL];
    methsPic[i] = e.target.files[0];

    await this.setState({
      methsPic,
    });
    if (methsPic[i]) {
      fileURL[i] = URL.createObjectURL(methsPic[i]);
    } else {
      fileURL[i] = upload;
    }

    await this.setState({
      fileURL,
    });
    this.updateParent();
  };

  handleDelete = (i) => async (e) => {
    e.preventDefault();
    let meths = [
      ...this.state.meths.slice(0, i),
      ...this.state.meths.slice(i + 1),
    ];
    let methsPic = [
      ...this.state.methsPic.slice(0, i),
      ...this.state.methsPic.slice(i + 1),
    ];
    let fileURL = [
      ...this.state.fileURL.slice(0, i),
      ...this.state.fileURL.slice(i + 1),
    ];
    let jsonMeths = [
      ...this.state.jsonMeths.slice(0, i),
      ...this.state.jsonMeths.slice(i + 1),
    ];
    await this.setState({
      meths,
      methsPic,
      fileURL,
      jsonMeths,
    });

    this.updateParent();
  };

  addMethod = async (e) => {
    e.preventDefault();
    let meths = this.state.meths.concat([""]);
    let jsonMeth = {};
    jsonMeth.Description = "";
    let jsonMeths = this.state.jsonMeths.concat([jsonMeth]);
    let fileURL = this.state.fileURL.concat([upload]);
    await this.setState({
      meths,
      fileURL,
      jsonMeths,
    });
  };

  updateParent = () => {
    this.props.updateParent(this.state.jsonMeths, this.state.methsPic);
  };

  render() {
    return (
      <Fragment>
        {this.state.meths.map((meth, index) => (
          <span key={"span" + index}>
            <h3>ขั้นตอนที่ {index + 1}</h3>
            <button type="button" id="xbut" onClick={this.handleDelete(index)}>
              ลบขั้นตอนที่ {index + 1}
            </button>
            <textarea
              type="text"
              rows="7"
              onChange={this.handleText(index)}
              value={meth}
            />

            <input
              key={"input" + index}
              type="file"
              id={index}
              name={index}
              accept="image/*"
              className="inputFile"
              onChange={this.handleFile(index)}
            ></input>
            <label key={"label" + index} htmlFor={index}>
              <div key={"choose" + index} className="dropZone">
                เพิ่มภาพประกอบ
                <img
                  style={{ margin: "10px" }}
                  height="150"
                  width="150"
                  src={this.state.fileURL[index]}
                  id="pic"
                  name="file"
                />
              </div>
            </label>
          </span>
        ))}
        {this.state.meths[this.state.meths.length - 1] !== "" ? (
          <button type="button" onClick={this.addMethod}>
            <b>เพิ่มขั้นตอน</b>
          </button>
        ) : null}
      </Fragment>
    );
  }
}

export default method;

/*<div>
        <hr />
        <li>
                <p>ขั้นตอนการทำ  </p>                
        </li>
        <textarea rows = "5" cols = "70" >
                
        </textarea>
        <li>
                <p>อัพโหลดรูปภาพ</p>
                <input type="file" id="img" name="img" accept="image/*"></input>
        </li>
        <hr />
        </div>*/
