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
      </div>
    );
  }
}

export default Loginer;
