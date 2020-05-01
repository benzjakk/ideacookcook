import React, { Component, useState, Fragment } from "react";
import "./method.css";
import upload from "./logo192.png";

class method extends Component {
  state = {
    meths: [""],
    methsPic: [],
    fileURL: [],
  };

  handleText = (i) => (e) => {
    let meths = [...this.state.meths];
    meths[i] = e.target.value;
    this.setState({
      meths,
    });
  };

  handleFile = (i) => (e) => {
    let methsPic = [...this.state.methsPic];
    let fileURL = [...this.state.fileURL];
    methsPic[i] = e.target.files[0];

    this.setState({
      methsPic,
    });
    if (methsPic[i]) {
      fileURL[i] = URL.createObjectURL(methsPic[i]);
    } else {
      fileURL[i] = upload;
    }

    this.setState({
      fileURL,
    });
  };

  handleDelete = (i) => (e) => {
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
    this.setState({
      meths,
      methsPic,
      fileURL,
    });
  };

  addMethod = (e) => {
    e.preventDefault();
    let meths = this.state.meths.concat([""]);
    this.setState({
      meths,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.meths.map((meth, index) => (
          <span key={"span" + index}>
            <h2>ขั้นตอนที่ {index+1}</h2>
            <button id="xbut" onClick={this.handleDelete(index)}>
              ลบขั้นตอนที่ {index+1}
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
                Choose File
                <img src={this.state.fileURL[index]} id="pic" name="file" />
              </div>
            </label>

            
          </span>
        ))}
        <button onClick={this.addMethod}>Add more method</button>
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
