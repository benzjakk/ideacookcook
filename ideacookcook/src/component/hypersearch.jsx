import React, { Component } from "react";
import "./styles/hypersearchstyles.css";
import InputWithT from "./inputwithtag.jsx";
import axios from "axios";

class Hypersearch extends Component {
  state = {
    Calories: "All",
    Time: 0,
    RawFood: [],
    Tool: [],
    FoodNation: "",
    FoodType: "",
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
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/Tag"
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

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name != "Time" || value >= 0) {
      this.setState({ [name]: value });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let tmpurl = "";
    tmpurl = tmpurl + this.state.Calories + "-";
    tmpurl = tmpurl + this.state.Time + "-";
    this.state.RawFood.map((rawfood, i) => {
      if (i == 0) {
        tmpurl = tmpurl + rawfood;
      } else {
        tmpurl = tmpurl + "," + rawfood;
      }
    });
    tmpurl = tmpurl + "-";
    this.state.Tool.map((tool, i) => {
      if (i == 0) {
        tmpurl = tmpurl + tool;
      } else {
        tmpurl = tmpurl + "," + tool;
      }
    });
    tmpurl = tmpurl + "-";
    tmpurl = tmpurl + this.state.FoodNation + "-";
    tmpurl = tmpurl + this.state.FoodType;
    console.log(tmpurl);
    window.location.href = "/result/2" + tmpurl;
  };

  updateRawFood = (childData) => {
    this.setState({ RawFood: childData });
  };
  updateTool = (childData) => {
    this.setState({ Tool: childData });
  };

  render() {
    //console.log(this.state.RawFoodTag);
    return (
      <section className="hypersearch">
        <h2>ค้นหาขั้นสูง</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <p>วัตถุดิบ : </p>
              <InputWithT
                //Tag={["หม้ออัดแรงดัน", "หม้อ"]}
                Tag={this.state.RawFoodTag}
                updateParent={this.updateRawFood}
              />
            </li>
            <li>
              <p>อุปกรณ์ : </p>
              <InputWithT
                Tag={this.state.ToolTag}
                updateParent={this.updateTool}
              />
            </li>
            <li>
              <p>ระยะเวลา : </p>
              <input
                min="1"
                max="999999"
                required={true}
                type="number"
                name="Time"
                className="Time"
                onChange={this.handleChange}
                value={this.state.Time}
              ></input>
              <p>นาที ( 0 = ไม่ระบุ )</p>
            </li>
            <li>
              <p>ประเภท : </p>
              <input
                list="FoodTypeTag"
                name="FoodType"
                onChange={this.handleChange}
              />
              <datalist id="FoodTypeTag">
                {this.state.FoodTypeTag.map((tag, index) => {
                  return <option value={tag} key={index}></option>;
                })}
              </datalist>
            </li>
            <li>
              <p>สัญชาติ : </p>
              <input
                list="FoodNationTag"
                name="FoodNation"
                onChange={this.handleChange}
              />
              <datalist id="FoodNationTag">
                {this.state.FoodNationTag.map((tag, index) => {
                  return <option value={tag} key={index}></option>;
                })}
              </datalist>
            </li>
            <li>
              <p>แคลลอรี่ : </p>
              <select name="Calories" onChange={this.handleChange}>
                <option value={"All"}>ทั้งหมด</option>
                <option value={"Low"}>ต่ำ</option>
                <option value={"Medium"}>ปานกลาง</option>
                <option value={"High"}>สูง</option>
              </select>
            </li>
            <button>ค้นหา</button>
          </ul>
        </form>
      </section>
    );
  }
}

export default Hypersearch;
