import React, { Component } from "react";
import Axios from "axios";
import defualtProPic from "../component/pic/anonymous.png";

class Editprofile extends Component {
  state = {
    Facebook: "",
    FirstName: "",
    Instagram: "",
    KnownName: "",
    LastName: "",
    Line: "",
    PhoneNo: "",
    ProfilePicture: defualtProPic,
  };

  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = async () => {
    await Axios.get(
      "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/data/" +
        localStorage.getItem("currentMemID")
    )
      .then((res) => {
        const restmp = res.data.data;
        console.log(restmp);
        this.setState({
          Facebook: restmp.Facebook,
          FirstName: restmp.FirstName,
          Instagram: restmp.Instagram,
          KnownName: restmp.KnownName,
          LastName: restmp.LastName,
          Line: restmp.Line,
          PhoneNo: restmp.PhoneNo,
        });
        if (restmp.ProfilePicture !== "") {
          this.setState({ ProfilePicture: restmp.ProfilePicture });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.patch(
      "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/UserData",
      {
        MemID: localStorage.getItem("currentMemID"),
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Instagram: this.state.Instagram,
        KnownName: this.state.KnownName,
        LastName: this.state.LastName,
        Line: this.state.Line,
      }
    )
      .then((res) => {
        console.log(res.data.description);
        if (res.data.description === "Successfully update data") {
          alert("Successfully update data");
          localStorage.setItem("currentUser", this.state.KnownName);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChangeFile = (event) => {
    this.setState({
      ProfilePicture: URL.createObjectURL(event.target.files[0]),
    });
  };
  handleUploadFile = async () => {
    if (this.state.ProfilePicture !== defualtProPic) {
      console.log("start upload");
      const fd = new FormData();
      fd.append(
        localStorage.getItem("currentMemID"),
        this.state.ProfilePicture
      );

      await Axios.patch(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/UserPhoto",
        fd
      )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("done upload");
    }
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
      <form className="modal-content container1 " onSubmit={this.handleSubmit}>
        <h2>แก้ไขโปรไฟล์</h2>
        <label>
          <b>Profile Picture</b>
        </label>
        <div style={{ display: "flex" }}>
          <img
            height="120"
            width="120"
            src={this.state.ProfilePicture}
            style={{ margin: "10px" }}
          />
          <input
            style={{ border: "0px" }}
            type="file"
            id="img"
            name="ProfilePicture"
            onChange={this.handleChangeFile}
          ></input>
          <button type="button" onClick={this.handleUploadFile}>
            Upload
          </button>
        </div>

        <label>
          <b>KnownName</b>
        </label>
        <input
          type="text"
          value={this.state.KnownName}
          name="KnownName"
          onChange={this.handleChange}
          required
        />

        <label>
          <b>FirstName</b>
        </label>
        <input
          type="text"
          value={this.state.FirstName}
          name="FirstName"
          onChange={this.handleChange}
          required
        />

        <label>
          <b>LastName</b>
        </label>
        <input
          type="text"
          value={this.state.LastName}
          name="LastName"
          onChange={this.handleChange}
          required
        />

        <label>
          <b>Phone Number</b>
        </label>
        <input
          type="text"
          value={this.state.PhoneNo}
          name="PhoneNo"
          onChange={this.handleChange}
          required
        />

        <label>
          <b>Facebook</b>
        </label>
        <input
          type="text"
          value={this.state.Facebook}
          name="Facebook"
          onChange={this.handleChange}
        />

        <label>
          <b>Instagram</b>
        </label>
        <input
          type="text"
          value={this.state.Instagram}
          name="Instagram"
          onChange={this.handleChange}
        />

        <label>
          <b>Line</b>
        </label>
        <input
          type="text"
          value={this.state.Line}
          name="Line"
          onChange={this.handleChange}
        />

        <button type="submit">Edit</button>
      </form>
    );
  }
}

export default Editprofile;
