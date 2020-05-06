import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerSatatus: false,
      showModal: false,
      showResult: false,
      email: "",
      psw: "",
      name: "",
      surname: "",
      aka: "",
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

  handleSubmit = async (event) => {
    document.getElementById("regisbut").innerHTML = "Loading...";
    event.preventDefault();
    await axios
      .post(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/CreateUser",
        {
          email: this.state.email,
          password: this.state.psw,
          FirstName: this.state.name,
          LastName: this.state.surname,
          KnownName: this.state.aka,
          PhoneNo: this.state.phonenum,
          Facebook: this.state.facebook,
          Instagram: this.state.ig,
          Line: this.state.line,
        }
      )
      .then((res) => {
        console.log(res.data.description);
        if (res.data.description === "Successfully created") {
          this.setState({ registerSatatus: true });
          alert("Registration Success");
          window.location.pathname = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ showResult: true });
    console.log(this.state.registerSatatus);
    document.getElementById("regisbut").innerHTML = "Register";
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
                    display: this.state.registerSatatus ? "block" : "none",
                  }}
                >
                  Register Success
                </button>
                <button
                  className="badresult"
                  type="button"
                  style={{
                    display: this.state.registerSatatus ? "none" : "block",
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
              placeholder="Required"
              name="email"
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
              <b>FirstName</b>
            </label>
            <input
              maxLength="30"
              type="text"
              placeholder="Requied"
              name="name"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>LastName</b>
            </label>
            <input
              maxLength="30"
              type="text"
              placeholder="Requied"
              name="surname"
              required
              onChange={this.handleChange}
            />

            <label>
              <b>KnownName</b>
            </label>
            <input
              maxLength="20"
              type="text"
              placeholder="Requied"
              name="aka"
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
              pattern="[0-9]{9,10}"
              onChange={this.handleChange}
            />

            <label>
              <b>Facebook</b>
            </label>
            <input
              maxLength="50"
              type="text"
              placeholder="Not Required "
              name="facebook"
              onChange={this.handleChange}
            />

            <label>
              <b>Instagram</b>
            </label>
            <input
              maxLength="50"
              type="text"
              placeholder="Not Required "
              name="ig"
              onChange={this.handleChange}
            />

            <label>
              <b>Line</b>
            </label>
            <input
              maxLength="50"
              type="text"
              placeholder="Not Required "
              name="line"
              onChange={this.handleChange}
            />

            <button type="submit" id="regisbut">
              Register
            </button>
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
export default Register;
