import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    ProfilePicture: null,
    ProfilePictureURL: defualtProPic,
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
          this.setState({ ProfilePictureURL: restmp.ProfilePicture });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = async (event) => {
    document.getElementById("editbut").innerHTML = "Loading...";
    event.preventDefault();
    await Axios.patch(
      "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/UserData",
      {
        MemID: localStorage.getItem("currentMemID"),
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Instagram: this.state.Instagram,
        KnownName: this.state.KnownName,
        Facebook: this.state.Facebook,
        Line: this.state.Line,
      }
    )
      .then((res) => {
        console.log(res.data.description);
        if (res.data.description === "Successfully update data") {
          alert("Successfully update data");
          localStorage.setItem("currentUser", this.state.KnownName);
        } else {
          alert("Failed to update data!!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("editbut").innerHTML = "Edit";
  };

  handleUploadFile = async () => {
    document.getElementById("uploadbut").innerHTML = "Loading...";
    if (this.state.ProfilePicture !== null) {
      const fd = new FormData();
      fd.append("MemID", localStorage.getItem("currentMemID"));
      fd.append("Picture", this.state.ProfilePicture);
      await Axios.patch(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/UserPhoto",
        fd
      )
        .then((res) => {
          if (res.data.description === "Successfully add photo and url") {
            alert("Uploading Success");
          } else {
            alert("Failed to Upload!!!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("No choosen file.");
    }
    document.getElementById("uploadbut").innerHTML = "Upload";
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    return true;
  };
  handleChangeFile = (event) => {
    this.setState({
      ProfilePictureURL: URL.createObjectURL(event.target.files[0]),
      ProfilePicture: event.target.files[0],
    });
  };
  render() {
    if (localStorage.getItem("currentMemID") === null) {
      return <Redirect to="/" />;
    } else {
      return (
        <form
          className="modal-content container1 "
          onSubmit={this.handleSubmit}
        >
          <h2>แก้ไขโปรไฟล์</h2>
          <label>
            <b>Profile Picture</b>
          </label>
          <div style={{ display: "flex" }}>
            <img
              alt="defaultProPic"
              height="120"
              width="120"
              src={this.state.ProfilePictureURL}
              style={{ margin: "10px" }}
            />
            <input
              style={{ border: "0px" }}
              type="file"
              accept="image/*"
              id="img"
              name="ProfilePicture"
              onChange={this.handleChangeFile}
            ></input>
          </div>
          <button id="uploadbut" type="button" onClick={this.handleUploadFile}>
            Upload
          </button>
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

          <button type="submit" id="editbut">
            Edit
          </button>
        </form>
      );
    }
  }
}

export default Editprofile;
