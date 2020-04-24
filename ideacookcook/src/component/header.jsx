import React, { Component } from "react";
import "./styles/headerstyles.css";
import Loginer from "./loginer.jsx";
import Register from "./register.jsx";

class Header extends Component {
  state = {
    currentUser: null,
    currentMemID: null,
  };

  componentDidMount = () => {
    this.updateCurrentUser();
  };

  openLoginer() {
    window.Loginer.setState({ showModal: true });
  }
  openRegister() {
    window.Register.setState({ showModal: true });
  }

  handleLogout = async () => {
    await localStorage.removeItem("currentUser");
    await localStorage.removeItem("currentMemID");
    this.updateCurrentUser();
  };

  updateCurrentUser = async () => {
    await this.setState({
      currentUser: localStorage.getItem("currentUser"),
      currentMemID: localStorage.getItem("currentMemID"),
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          {this.state.currentUser ? (
            <div className="login_regis">
              <a href="/editprofile">
                <div>{this.state.currentUser}</div>
              </a>
              <div onClick={this.handleLogout}>Logout</div>
            </div>
          ) : (
            <div className="login_regis">
              <div onClick={this.openLoginer}>เข้าสู่ระบบ</div>
              <div onClick={this.openRegister}>สมัครสมาชิก</div>
            </div>
          )}

          <div className="mainheader">
            <div id="logo">
              <a href="/">
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
        <Loginer
          triggerUserCurrentUpdate={this.updateCurrentUser}
          ref={(Loginer) => {
            window.Loginer = Loginer;
          }}
        />
        <Register
          ref={(Register) => {
            window.Register = Register;
          }}
        />
      </React.Fragment>
    );
  }
}

export default Header;
