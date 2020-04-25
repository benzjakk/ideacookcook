import React, { Component } from "react";

class Editprofile extends Component {
  state = {};
  render() {
    return (
      <div className="modal-content container1 " action="/action_page.php">
        <h2>แก้ไขโปรไฟล์</h2>
        <label>
          <b>Profile Picture</b>
        </label>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="current name" name="uname" required />

        <label>
          <b>Password</b>
        </label>
        <input type="password" placeholder="current" name="psw" required />

        <label>
          <b>E-mail</b>
        </label>
        <input type="text" placeholder="current" name="email" required />

        <label>
          <b>Name</b>
        </label>
        <input type="text" placeholder="current" name="name" required />

        <label>
          <b>Sirname</b>
        </label>
        <input type="text" placeholder="current" name="sirname" required />

        <label>
          <b>Phone Number</b>
        </label>
        <input type="text" placeholder="current" name="phonenum" required />

        <label>
          <b>Facebook</b>
        </label>
        <input type="text" placeholder="current " name="facebook" />

        <label>
          <b>Instagram</b>
        </label>
        <input type="text" placeholder="current " name="ig" />

        <label>
          <b>Line</b>
        </label>
        <input type="text" placeholder="current " name="line" />

        <button type="submit">Edit</button>
      </div>
    );
  }
}

export default Editprofile;
