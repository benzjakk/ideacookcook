import React, { Component, useState, Fragment } from "react";
import "./styles/method.css";
import upload from "./pic/upload.png";

class method extends Component {
  state = {
    jsonMeths: [{ Description: "" }],
    methsPic: [],
    fileURL: [upload],
    editFileURL: [],
  };

  handleText = (i) => async (e) => {
    let jsonMeths = this.state.jsonMeths;
    let jsonMeth = {};

    jsonMeth.Description = e.target.value;
    jsonMeths[i] = jsonMeth;
    await this.setState({
      jsonMeths,
    });
    this.updateParent();
  };

  handleFile = (i) => async (e) => {
    console.log("changeFile");
    let editFileURL = [...this.state.editFileURL];
    let methsPic = [...this.state.methsPic];
    let fileURL = [...this.state.fileURL];
    methsPic[i] = e.target.files[0];
    editFileURL[i] = "";

    await this.setState({
      methsPic,
    });
    //console.log("methsPic", methsPic[i], "fileURL", fileURL[i]);

    if (methsPic[i]) {
      fileURL[i] = URL.createObjectURL(methsPic[i]);
    } else {
      fileURL[i] = upload;
    }

    await this.setState({
      editFileURL,
      fileURL,
    });
    this.updateParent();
  };

  handleDelete = (i) => async (e) => {
    e.preventDefault();
    let editFileURL = [
      ...this.state.editFileURL.slice(0, i),
      ...this.state.editFileURL.slice(i + 1),
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
      editFileURL,
      methsPic,
      fileURL,
      jsonMeths,
    });

    this.updateParent();
  };

  addMethod = async (e) => {
    e.preventDefault();
    let editFileURL = this.state.editFileURL.concat([""]);
    let jsonMeth = {};
    jsonMeth.Description = [""];
    let jsonMeths = this.state.jsonMeths.concat([jsonMeth]);
    let fileURL = this.state.fileURL.concat([upload]);
    await this.setState({
      editFileURL,
      fileURL,
      jsonMeths,
    });
  };

  updateParent = () => {
    if (this.props.mode == "edit") {
      this.props.updateParent(
        this.state.jsonMeths,
        this.state.methsPic,
        this.state.editFileURL
      );
    } else {
      this.props.updateParent(
        this.state.jsonMeths,
        this.state.methsPic,
        this.state.fileURL
      );
    }
  };

  addButton() {
    if (this.state.jsonMeths.length != 0) {
      if (
        this.state.jsonMeths[this.state.jsonMeths.length - 1].Description != ""
      ) {
        return (
          <button type="button" onClick={this.addMethod}>
            <b>เพิ่มขั้นตอน</b>
          </button>
        );
      } else return null;
    } else
      return (
        <button type="button" onClick={this.addMethod}>
          <b>เพิ่มขั้นตอน</b>
        </button>
      );
  }

  render() {
    //console.log(this.state.fileURL);
    return (
      <Fragment>
        {this.state.jsonMeths.map((jsonmeth, index) => (
          <span key={"span" + index}>
            <h3>ขั้นตอนที่ {index + 1}</h3>
            <button
              type="button"
              className="xbut"
              onClick={this.handleDelete(index)}
            >
              ลบขั้นตอนที่ {index + 1}
            </button>
            <textarea
              type="text"
              rows="7"
              onChange={this.handleText(index)}
              value={jsonmeth.Description}
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
                  style={{
                    margin: "10px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  height="150"
                  width="150"
                  src={
                    this.state.fileURL[index] != ""
                      ? this.state.fileURL[index]
                      : upload
                  }
                  id="pic"
                  name="file"
                />
              </div>
            </label>
          </span>
        ))}
        {this.addButton()}
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
