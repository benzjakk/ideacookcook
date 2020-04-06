import React, { Component } from "react";
import "../styles/headerstyles.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div class="login_regis">
          <div>เข้าสู่ระบบ</div>
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
    );
  }
}

export default Header;
