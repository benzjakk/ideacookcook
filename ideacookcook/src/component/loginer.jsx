import React, { Component } from "react";
import axios from "axios";
import "./styles/loginerstyles.css";

class Loginer extends Component {
  state = {
    showModal: false,
    showResult: false,
    signinStatus: false,
    currentMemID: null,
    email: "",
    psw: "",
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/signin",
        {
          email: this.state.email,
          password: this.state.psw,
        }
      )
      .then((res) => {
        if (res.data.description === "Successfully sign-in") {
          this.setState({
            signinStatus: true,
            currentUser: this.state.email,
            currentMemID: res.data.MemID,
          });
          console.log("Signin Success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.triggerUserCurrentUpdate();
    console.log(this.state.signinStatus);
    this.setState({ showResult: true });
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    return true;
  };
  render() {
    return (
      <div
        class="modal"
        style={{ display: this.state.showModal ? "block" : "none" }}
      >
        <span onClick={this.closeModal} class="close" title="Close Modal">
          &times;
        </span>
        <form class="modal-content animate" onSubmit={this.handleSubmit}>
          <div class="container1">
            {this.state.showResult ? (
              <div>
                <button
                  class="goodresult"
                  type="button"
                  style={{
                    display: this.state.signinStatus ? "block" : "none",
                  }}
                >
                  Signin Success
                </button>
                <button
                  class="badresult"
                  type="button"
                  style={{
                    display: this.state.signinStatus ? "none" : "block",
                  }}
                >
                  Oops something wrong<br></br> Please try again!!!
                </button>
              </div>
            ) : null}
            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={this.handleChange}
            />

            <button>Login</button>
          </div>

          <div class="container">
            <button type="button" onClick={this.closeModal} class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Loginer;
