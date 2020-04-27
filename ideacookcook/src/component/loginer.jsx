import React, { Component } from "react";
import axios from "axios";
import "./styles/loginerstyles.css";

class Loginer extends Component {
  state = {
    showModal: false,
    showResult: false,
    signinStatus: false,
    currentMemID: null,
    currentUser: null,
    profilePicture: null,
    email: "",
    psw: "",
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .get(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/signin",
        {
          params: { email: this.state.email, password: this.state.psw },
        }
      )
      .then((res) => {
        if (res.data.description === "Successfully sign-in") {
          console.log(res.data);
          this.setState({
            signinStatus: true,
            currentMemID: res.data.data.MemID,
            currentUser: res.data.data.KnownName,
            profilePicture: res.data.data.ProfilePicture,
          });
          localStorage.setItem("currentUser", this.state.currentUser);
          localStorage.setItem("currentMemID", this.state.currentMemID);
          localStorage.setItem("profilePicture", this.state.profilePicture);
          console.log("Signin Success");
          window.location.pathname = "/";
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
        className="modal"
        style={{ display: this.state.showModal ? "block" : "none" }}
      >
        <span onClick={this.closeModal} className="close" title="Close Modal">
          &times;
        </span>
        <form className="modal-content animate" onSubmit={this.handleSubmit}>
          <div className="container1">
            {this.state.showResult ? (
              <div>
                <button
                  className="goodresult"
                  type="button"
                  style={{
                    display: this.state.signinStatus ? "block" : "none",
                  }}
                >
                  Signin Success
                </button>
                <button
                  className="badresult"
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

          <div className="container">
            <button
              type="button"
              onClick={this.closeModal}
              className="cancelbtn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Loginer;
