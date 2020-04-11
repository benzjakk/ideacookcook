import React, { Component } from "react";

class Editprofile extends Component {
  state = {};
  render() {
    return (
      <div class="modal-content container1 " action="/action_page.php">
        <h2>แก้ไขโปรไฟล์</h2>
        <label for="propic">
          <b>Profile Picture</b>
        </label>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="current name" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="current" name="psw" required />

        <label for="email">
          <b>E-mail</b>
        </label>
        <input type="text" placeholder="current" name="email" required />

        <label for="name">
          <b>Name</b>
        </label>
        <input type="text" placeholder="current" name="name" required />

        <label for="sirname">
          <b>Sirname</b>
        </label>
        <input type="text" placeholder="current" name="sirname" required />

        <label for="phonenum">
          <b>Phone Number</b>
        </label>
        <input type="text" placeholder="current" name="phonenum" required />

        <label for="facebook">
          <b>Facebook</b>
        </label>
        <input type="text" placeholder="current " name="facebook" />

        <label for="ig">
          <b>Instagram</b>
        </label>
        <input type="text" placeholder="current " name="ig" />

        <label for="line">
          <b>Line</b>
        </label>
        <input type="text" placeholder="current " name="line" />

        <button type="submit">Edit</button>
      </div>
    );
  }
}

export default Editprofile;
