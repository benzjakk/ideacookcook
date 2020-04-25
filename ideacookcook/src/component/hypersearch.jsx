import React, { Component } from "react";
import "./styles/hypersearchstyles.css";
import InputWithT from "./inputwithtag.jsx";
import axios from "axios";

class Hypersearch extends Component {
  state = {
    RawFoodTag: [],
    ToolTag: [],
    FoodTypeTag: [],
    FoodNationTag: [],
  };

  componentDidMount = () => {
    this.fetchTag();
  };

  fetchTag = async () => {
    await axios
      .get(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/Tag"
      )
      .then((res) => {
        const restmp = res.data.data;
        this.setState({
          FoodNationTag: restmp.FoodNationTag,
          RawFoodTag: restmp.RawFoodTag,
          ToolTag: restmp.ToolTag,
          FoodTypeTag: restmp.FoodTypeTag,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <section className="hypersearch">
        <h2>ค้นหาขั้นสูง</h2>
        <ul>
          <li>
            <p>วัตถุดิบ : </p>
            <InputWithT Tag={this.state.RawFoodTag} />
          </li>
          <li>
            <p>อุปกรณ์ : </p>
            <InputWithT Tag={this.state.ToolTag} />
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
            <input list="FoodTypeTag" />
            <datalist id="FoodTypeTag">
              {this.state.FoodTypeTag.map((tag, index) => {
                return <option value={tag} key={index}></option>;
              })}
            </datalist>
          </li>
          <li>
            <p>สัญชาติ : </p>
            <input list="FoodNationTag" />
            <datalist id="FoodNationTag">
              {this.state.FoodNationTag.map((tag, index) => {
                return <option value={tag} key={index}></option>;
              })}
            </datalist>
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
