import React, { Component } from "react";
import "./styles/loginerstyles.css";

class Register extends Component {
  state = {
    showModal: false,
  };
  closeModal = () => {
    this.setState({ showModal: false });
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
        <form class="modal-content animate" action="/action_page.php">
          <div class="container1">
            <label for="uname">
              <b>Username</b>
            </label>
            <input type="text" placeholder="Required" name="uname" required />

            <label for="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Required" name="psw" required />

            <label for="email">
              <b>E-mail</b>
            </label>
            <input type="text" placeholder="Required" name="email" required />

            <label for="name">
              <b>Name</b>
            </label>
            <input type="text" placeholder="Requied" name="name" required />

            <label for="sirname">
              <b>Sirname</b>
            </label>
            <input type="text" placeholder="Requied" name="sirname" required />

            <label for="phonenum">
              <b>Phone Number</b>
            </label>
            <input
              type="text"
              placeholder="Required"
              name="phonenum"
              required
            />

            <label for="facebook">
              <b>Facebook</b>
            </label>
            <input type="text" placeholder="Not Required " name="facebook" />

            <label for="ig">
              <b>Instagram</b>
            </label>
            <input type="text" placeholder="Not Required " name="ig" />

            <label for="line">
              <b>Line</b>
            </label>
            <input type="text" placeholder="Not Required " name="line" />

            <button type="submit">Register</button>
          </div>

          <div class="container">
            <button type="button" onClick={this.closeModal} class="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
