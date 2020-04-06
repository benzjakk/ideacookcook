import React, { Component } from "react";
import "./styles/headerstyles.css";
import Loginer from "./loginer.jsx";

class Header extends Component {
  state = {
    showLoginer: false,
  };
  openLoginer = () => {
    this.setState({ showLoginer: true });
    document.getElementById("loginer").openLoginer();
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <div class="login_regis">
            <div onClick={this.openLoginer}>เข้าสู่ระบบ</div>
            <div>สมัครสมาชิก</div>
          </div>
          <div class="mainheader">
            <div id="logo">
              <a href="index.html">
                <h1>
                  {" "}
                  IDEA<br></br>COOK<br></br>COOK{" "}
                </h1>
              </a>
            </div>
            <div>
              <input type="text" placeholder="ค้นหาสูตรอาหาร ..."></input>
            </div>
            <a href="food.html">
              <button type="button">
                {" "}
                <b>ค้นหา</b>{" "}
              </button>
            </a>
            <a href="inputrecipe.html">
              <button type="button">
                {" "}
                <b>เพิ่มสูตร</b>{" "}
              </button>
            </a>
          </div>
        </header>
        {this.state.showLoginer ? <Loginer id="loginer" /> : null}
      </React.Fragment>
    );
  }
}

export default Header;
