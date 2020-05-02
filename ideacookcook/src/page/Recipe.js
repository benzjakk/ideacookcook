import React, { Component } from "react";
import "../component/styles/Recipe.css";
import Met from "../component/method";
import InputWithT from "../component/inputwithtag.jsx";
import axios from "axios";
import upload from "../component/pic/upload.png";
import InputRawFood from "../component/inputRawfood.jsx";
class Recipe extends Component {
  state = {
    RecipesName: "",
    Description: "",
    Time: 0,
    Calories: "Low",
    FoodType: "",
    FoodNation: "",
    RawFood: [{ RawFood: "", Quantity: 0, Unit: "" }],
    Tool: [""],
    Steps: [{ Description: "" }],
    RecipesPicURL: upload,
    RecipesPic: null,
    methsPic: [],
    RawFoodTag: [],
    ToolTag: [],
    FoodTypeTag: [],
    FoodNationTag: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem("currentMemID")) {
      this.uploadText();
    } else {
      alert("กรุณา Login ");
    }
  };

  uploadText() {
    axios
      .post(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/CreateRecipes",
        {
          MemID: localStorage.getItem("currentMemID"),
          RecipesName: this.state.RecipesName,
          Description: this.state.Description,
          Time: parseInt(this.state.Time),
          Calories: this.state.Calories,
          FoodType: this.state.FoodType,
          FoodNation: this.state.FoodNation,
          RawFood: this.state.RawFood,
          Tool: this.state.Tool,
          Steps: this.state.Steps,
        }
      )
      .then((res) => {
        console.log(res.data.description);
        this.uploadPic(res.data.RecipesID);
      })
      .catch((error) => {
        console.log(error);
        alert("Something wrong");
      });
  }

  uploadPic(recipeID) {
    const fd = new FormData();
    fd.append("RecipesID", recipeID);
    fd.append("Pic", this.state.RecipesPic);
    axios
      .post(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/RecipesPic",
        fd
      )
      .then((res) => {
        console.log(res);
        this.uploadStepPic(recipeID);
      })
      .catch((error) => {
        console.log(error);
        alert("Something wrong");
      });
  }

  uploadStepPic(recipeID) {
    this.state.methsPic.map(async (methspic, index) => {
      if (methspic) {
        const fd = new FormData();
        fd.append("RecipesID", recipeID);
        fd.append("StepOrder", index + 1);
        fd.append("Pic", methspic);
        await axios
          .post(
            "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/StepPic",
            fd
          )
          .then((res) => {
            console.log(res, methspic);
            console.log("Upload Success");
          })
          .catch((error) => {
            console.log(error);
            alert("Something wrong");
          });
      }
    });
  }

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
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name != "Time" || value > -1) {
      this.setState({ [name]: value });
    }

    return true;
  };
  handleChangeFile = (event) => {
    if (event.target.files[0]) {
      this.setState({
        RecipesPicURL: URL.createObjectURL(event.target.files[0]),
        RecipesPic: event.target.files[0],
      });
    } else {
      this.setState({
        RecipesPicURL: upload,
        RecipesPic: null,
      });
    }
  };

  updateMeths = (meths, methsPic) => {
    this.setState({ Steps: meths, methsPic: methsPic });
  };

  updateTools = (tools) => {
    this.setState({ Tool: tools });
  };
  test = (e) => {
    console.log(e.target.value);
  };

  updateRawFood = (rawfood) => {
    this.setState({ RawFood: rawfood });
  };
  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <section className="inputrecipe">
          <h2>* กรุณา Login ก่อน upload *</h2>
          <h2>* กรุณากรอก Tag ตามที่ระบุเพื่อประสิทธิภาพในการค้นหา *</h2>
        </section>
        <section className="inputrecipe">
          <h1>ลงสูตรอาหาร</h1>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <p>ชื่อเมนูอาหาร : </p>
                <input
                  required={true}
                  type="text"
                  className="input1"
                  name="RecipesName"
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <p>คำอธิบาย : </p>
              </li>
              <textarea
                required={true}
                rows="5"
                cols="70"
                name="Description"
                onChange={this.handleChange}
              ></textarea>
              <li className="recipesPic">
                <p>รูปภาพปกเมนูอาหาร</p>
                <img
                  alt="RecipesPic"
                  height="200"
                  width="200"
                  src={this.state.RecipesPicURL}
                  style={{ margin: "10px" }}
                />
                <input
                  required={true}
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={this.handleChangeFile}
                ></input>
              </li>

              <li>
                <h2>วัตถุดิบ </h2>
              </li>
              <InputRawFood
                Tag={this.state.RawFoodTag}
                updateParent={this.updateRawFood}
              />
              <li>
                <p>อุปกรณ์ : </p>
                <InputWithT
                  Tag={this.state.ToolTag}
                  updateParent={this.updateTools}
                />
              </li>
              <hr />
              <li>
                <h2>ขั้นตอนการทำ</h2>
              </li>
              <Met updateParent={this.updateMeths} />
              <hr />

              <li>
                <p>ระยะเวลา : </p>
                <input
                  required={true}
                  type="number"
                  className="input1"
                  name="Time"
                  onChange={this.handleChange}
                  value={this.state.Time}
                />
                <p>นาที</p>
              </li>
              <li>
                <p>ประเภทอาหาร : </p>
                <input
                  required={true}
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
                  required={true}
                  list="FoodNationTag"
                  name="FoodNation"
                  onChange={this.handleChange}
                />
                <datalist id="FoodNationTag">
                  {this.state.FoodNationTag.map((tag, index) => {
                    return <option value={tag} key={index}></option>;
                  })}
                </datalist>
                <p>แคลโลรี่ : </p>
                <select onChange={this.handleChange} name="Calories">
                  <option value={"Low"}>ต่ำ</option>
                  <option value={"Medium"}>ปานกลาง</option>
                  <option value={"High"}>สูง</option>
                </select>
              </li>
              <button>ยืนยัน</button>
            </ul>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Recipe;
