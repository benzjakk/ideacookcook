import React, { Component } from "react";
import "./styles/headerstyles.css";
import Loginer from "./loginer.jsx";
import Register from "./register.jsx";
import Autocomplete from "./autocomplete";
import Axios from "axios";

class Header extends Component {
  state = {
    currentUser: null,
    currentMemID: null,
    recipeName: [""],
  };

  componentDidMount = () => {
    this.updateCurrentUser();
    this.updateData();
  };

  openLoginer() {
    window.Loginer.setState({ showModal: true, showResult: false });
  }
  openRegister() {
    window.Register.setState({ showModal: true, showResult: false });
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

  updateData = async () => {
    await Axios.get(
      "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/RecipesName"
    )
      .then((res) => {
        this.setState({ recipeName: res.data.data });
      })
      .catch((error) => {
        console.log(error);
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
              <Autocomplete suggestions={this.state.recipeName} />
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
