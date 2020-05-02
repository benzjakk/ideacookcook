import React, { Component } from "react";
import "./styles/headerstyles.css";
import Loginer from "./loginer.jsx";
import Register from "./register.jsx";
import Autocomplete from "./autocomplete";
import Axios from "axios";
import editpic from "./pic/editprofile.png";
import logoutpic from "./pic/logout.png";
import TimeStamp from "../function/TimeStamp";

class Header extends Component {
  state = {
    currentUser: null,
    currentMemID: null,
    recipeName: [""],
    userInput: "",
  };

  refreshPage() {
    window.location.reload(false);
  }

  componentDidMount = () => {
    this.updateCurrentUser();
    this.updateData();
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

  updateUserInput = (childData) => {
    this.setState({ userInput: childData });
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
    this.refreshPage();
  };

  handleSearch = async () => {
    console.log(this.state.userInput);
    window.location.href = "/result/1" + this.state.userInput;
  };

  render() {
    return (
      <React.Fragment>
        <header>
          {this.state.currentUser ? (
            <div className="login_regis">
              <a href={"/Profile/" + localStorage.getItem("currentMemID")}>
                <div>{this.state.currentUser}</div>
              </a>
              <a href="/editprofile">
                <img height="30" width="30" src={editpic} alt="สุขภาพ"></img>
              </a>
              <img
                height="30"
                width="30"
                src={logoutpic}
                alt="สุขภาพ"
                onClick={this.handleLogout}
              ></img>
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
              <Autocomplete
                updateParent={this.updateUserInput}
                suggestions={this.state.recipeName}
              />
            </div>

            <button type="submit" onClick={this.handleSearch}>
              {" "}
              <b>ค้นหา</b>{" "}
            </button>

            <a href="/upload">
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
