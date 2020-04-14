import React, { Component } from "react";
import "./styles/hypersearchstyles.css";
import InputWithT from "./inputwithtag.jsx";

class Hypersearch extends Component {
  state = {};
  render() {
    return (
      <section class="hypersearch">
        <h2>ค้นหาขั้นสูง</h2>
        <ul>
          <li>
            <p>ราคา : </p>
            <select>
              <option value={1}>น้อยกว่า 100</option>
              <option value={2}>100 - 500</option>
              <option value={3}>มากกว่า 500</option>
            </select>
            <p>บาท </p>
          </li>
          <li>
            <p>วัตถุดิบ : </p>
            <InputWithT />
          </li>
          <li>
            <p>อุปกรณ์ : </p>
            <InputWithT />
          </li>
          <li>
            <p>ระยะเวลา : </p>
            <select>
              <option value={1}>น้อยกว่า 1 </option>
              <option value={2}>1 - 3</option>
              <option value={3}>มากกว่า 3 </option>
            </select>
            <p>ชั่วโมง </p>
          </li>
          <li>
            <p>ประเภทอาหาร : </p>
            <select>
              <option value={1}>คาว</option>
              <option value={2}>หวาน</option>
              <option value={3}>ทะเล</option>
            </select>
          </li>
          <li>
            <p>สัญชาติ : </p>
            <input type="text"></input>
          </li>
          <li>
            <p>แคลลอรี่ : </p>
            <select>
              <option value={1}>ต่ำ</option>
              <option value={2}>ปานกลาง</option>
              <option value={3}>สูง</option>
            </select>
          </li>
          <button>ค้นหา</button>
        </ul>
      </section>
    );
  }
}

export default Hypersearch;
