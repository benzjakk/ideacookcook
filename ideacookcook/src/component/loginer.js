import React, { Component } from "react";
import { useState } from "react";

class Loginer extends Component {
  render() {
    const [isOpen, setOpen] = useState(true);
    return (
      <div
        id="id01"
        class="modal"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <span
          onclick={() => setOpen(!isOpen)}
          class="close"
          title="Close Modal"
        >
          &times;
        </span>
        <form class="modal-content animate" action="/action_page.php">
          <div class="container1">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div class="container">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >
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
