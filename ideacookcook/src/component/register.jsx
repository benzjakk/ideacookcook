import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      uname: "",
      psw: "",
      email: "",
      name: "",
      surname: "",
      phonenum: "",
      facebook: "",
      ig: "",
      line: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = (e) => {
    console.log("submit");
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });

    return true;
  }

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
              placeholder="Required"
              name="uname"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Required"
              name="psw"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>E-mail</b>
            </label>
            <input
              type="text"
              placeholder="Required"
              name="email"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Requied"
              name="name"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Surname</b>
            </label>
            <input
              type="text"
              placeholder="Requied"
              name="surname"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Phone Number</b>
            </label>
            <input
              type="text"
              placeholder="Required"
              name="phonenum"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>Facebook</b>
            </label>
            <input
              type="text"
              placeholder="Not Required "
              name="facebook"
              onChange={this.handleChange}
            />

            <label>
              <b>Instagram</b>
            </label>
            <input
              type="text"
              placeholder="Not Required "
              name="ig"
              onChange={this.handleChange}
            />

            <label>
              <b>Line</b>
            </label>
            <input
              type="text"
              placeholder="Not Required "
              name="line"
              onChange={this.handleChange}
            />

            <button>Register</button>
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
