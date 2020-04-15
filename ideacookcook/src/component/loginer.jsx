import React, { Component } from "react";
import "./styles/loginerstyles.css";

class Loginer extends Component {
  state = {
    showModal: false,
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  handleSubmit = () => {
    console.log("submit");
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
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
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
