import React, { Component } from "react";
import "../component/styles/Recipe.css";
import Met from "../component/method";
import InputWithT from "../component/inputwithtag.jsx";
import axios from "axios";
import upload from "../component/pic/upload.png";
import InputRawFood from "../component/inputRawfood.jsx";
class Recipe extends Component {
  state = {
    RecipesID: "",
    RecipesName: "",
    Description: "",
    Time: "0",
    Calories: "Low",
    FoodType: "",
    FoodNation: "",
    RawFood: [{ RawFood: "", Quantity: 0, Unit: "" }],
    Tool: [],
    Steps: [{ Description: "" }],
    RecipesPicURL: upload,
    RecipesPic: null,
    methsPic: [],
    RawFoodTag: [],
    ToolTag: [],
    FoodTypeTag: [],
    FoodNationTag: [],
    UnitTag: [],

    refInputRawFood: React.createRef(),
    refInputTool: React.createRef(),
    refInputMeth: React.createRef(),
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem("currentMemID")) {
      if (
        this.state.Steps.length > 0 &&
        this.state.RawFood.length > 0 &&
        this.state.RecipesName != "" &&
        this.state.Description != "" &&
        this.state.Time != "" &&
        this.state.Calories != "" &&
        this.state.FoodType != "" &&
        this.state.FoodNation != "" &&
        this.state.RawFood[this.state.RawFood.length - 1].RawFood != "" &&
        this.state.Tool[this.state.Tool.length - 1] != null &&
        this.state.Steps[this.state.Steps.length - 1].Description != "" &&
        this.state.RawFood[this.state.RawFood.length - 1].Unit != ""
      ) {
        if (this.props.mode == "edit") {
          document.getElementById("uploadrecipesbtn").innerHTML =
            "Editing Steps ...";
          this.editText();
          console.log("Editing");
        } else {
          if (this.state.RecipesPic != null) {
            document.getElementById("uploadrecipesbtn").innerHTML =
              "Uploading Steps ...";
            this.uploadText();
          } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
          }
        }
      } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
    } else {
      alert("กรุณา Login ");
    }
  };

  editText() {
    axios
      .patch(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Recipes",
        {
          RecipesID: this.props.recipeID,
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
        document.getElementById("uploadrecipesbtn").innerHTML =
          "Editing Pic ...";
        console.log(res.data);
        this.editRecipePic();
      })
      .catch((error) => {
        console.log(error);
        alert("Something wrong");
        document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
      });
  }
  editRecipePic() {
    console.log("editing R pic");
    if (this.state.RecipesPic != null) {
      const fd = new FormData();
      fd.append("RecipesID", this.props.recipeID);
      fd.append("Pic", this.state.RecipesPic);
      axios
        .patch(
          "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/RecipesPic",
          fd
        )
        .then((res) => {
          console.log(res);
          document.getElementById("uploadrecipesbtn").innerHTML =
            "Editing Steps Pic ...";
          this.editStepPic();
        })
        .catch((error) => {
          console.log(error);
          alert("Something wrong");
          document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
        });
    } else {
      this.editStepPic();
    }
  }
  editStepPic() {
    console.log("editing steps pic");
    const check = true;
    this.state.methsPic.map(async (methspic, index) => {
      if (methspic) {
        const fd = new FormData();
        fd.append("RecipesID", this.props.recipeID);
        fd.append("StepOrder", index + 1);
        fd.append("Pic", methspic);
        await axios
          .patch(
            "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/StepsPic",
            fd
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
            check = false;
            alert("Something wrong");
          });
      }
    });
    if (check) {
      alert("Editing Success");
    }
    document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
  }
  uploadText() {
    axios
      .post(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/CreateRecipes",
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
        document.getElementById("uploadrecipesbtn").innerHTML =
          "Uploading Pic ...";
        this.uploadPic(res.data.RecipesID);
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
        alert("Something wrong");
      });
  }

  uploadPic(recipeID) {
    const fd = new FormData();
    fd.append("RecipesID", recipeID);
    fd.append("Pic", this.state.RecipesPic);
    axios
      .post(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/RecipesPic",
        fd
      )
      .then((res) => {
        console.log(res);
        document.getElementById("uploadrecipesbtn").innerHTML =
          "Uploading StepsPic ...";
        this.uploadStepPic(recipeID);
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
        alert("Something wrong");
      });
  }

  uploadStepPic(recipeID) {
    let check = true;
    this.state.methsPic.map(async (methspic, index) => {
      if (methspic) {
        const fd = new FormData();
        fd.append("RecipesID", recipeID);
        fd.append("StepOrder", index + 1);
        fd.append("Pic", methspic);
        await axios
          .post(
            "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/StepPic",
            fd
          )
          .then((res) => {
            console.log(res, methspic);
          })
          .catch((error) => {
            console.log(error);
            check = false;
            alert("Something wrong");
          });
      }
    });
    if (check) {
      alert("Upload Success");
    }

    document.getElementById("uploadrecipesbtn").innerHTML = "ยืนยัน";
  }

  componentDidMount = async () => {
    await this.fetchTag();
    if (this.props.mode == "edit") {
      await this.fetchRecipe();
    }
  };

  fetchRecipe = async () => {
    await this.setState({
      RecipesID: this.props.recipe.RecipesID,
      RecipesName: this.props.recipe.RecipesName,
      Description: this.props.recipe.Description,
      Time: this.props.recipe.Time,
      Calories: this.props.recipe.Calories,
      FoodType: this.props.recipe.FoodType,
      FoodNation: this.props.recipe.FoodNation,
      RawFood: this.props.recipe.RawFood,
      Tool: this.props.recipe.Tool,
      Steps: this.props.recipe.Steps,
      RecipesPicURL: this.props.recipe.RecipesPic,
    });
    this.state.refInputRawFood.current.fetchData();
    let toolTag = [];
    await this.state.Tool.map((tool) => {
      toolTag = [...toolTag, { id: tool, text: tool }];
    });
    this.state.refInputTool.current.setState({ tags: toolTag });
    let jsonMeths = [];
    let picMeths = [];
    await this.state.Steps.map((step, index) => {
      jsonMeths = [...jsonMeths, { Description: step.Description }];
      //console.log("step.StepPic", step.StepPic[0]);
      if (step.StepPic != "") {
        picMeths = [...picMeths, step.StepPic[0]];
      } else {
        picMeths = [...picMeths, step.StepPic];
      }
    });
    //console.log("picMeths", picMeths);
    this.state.refInputMeth.current.setState({
      jsonMeths: jsonMeths,
      fileURL: picMeths,
      editFileURL: picMeths,
    });

    this.state.refInputMeth.current.updateParent();
    //this.setState({ methsPicURL: picMeths });
  };

  fetchTag = async () => {
    await axios
      .get(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Tag"
      )
      .then((res) => {
        const restmp = res.data.data;
        //console.log(restmp);
        this.setState({
          FoodNationTag: restmp.FoodNationTag,
          RawFoodTag: restmp.RawFoodTag,
          ToolTag: restmp.ToolTag,
          FoodTypeTag: restmp.FoodTypeTag,
          UnitTag: restmp.UnitTag,
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

  updateMeths = (meths, methsPic, methsPicURL) => {
    if (this.props.mode == "edit") {
      meths.map((meth, index) => {
        meth.StepPic = [methsPicURL[index]];
      });
      //console.log(meths);
      this.setState({ Steps: meths, methsPic: methsPic });
    } else {
      this.setState({
        Steps: meths,
        methsPic: methsPic,
      });
    }
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
    console.log(this.state);
    return (
      <React.Fragment>
        <section className="inputrecipe">
          <h2>* กรุณา Login ก่อน upload *</h2>
          <h2>* กรุณากรอก Tag ตามที่ระบุเพื่อเพิ่มประสิทธิภาพในการค้นหา *</h2>
          <h2>* หากต้องการเพิ่ม Tag ให้ติดต่อ Admin *</h2>
        </section>
        <section className="inputrecipe">
          {this.props.mode === "edit" ? (
            <h1>แก้ไขสูตรอาหาร</h1>
          ) : (
            <h1>ลงสูตรอาหาร</h1>
          )}

          <form>
            <ul>
              <li>
                <p>ชื่อเมนูอาหาร : </p>
                <input
                  maxLength="50"
                  required={true}
                  type="text"
                  className="input1"
                  name="RecipesName"
                  onChange={this.handleChange}
                  value={this.state.RecipesName}
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
                value={this.state.Description}
              ></textarea>
              <li className="recipesPic">
                <p>รูปภาพปกเมนูอาหาร</p>
                <img
                  alt="RecipesPic"
                  height="200"
                  width="200"
                  src={this.state.RecipesPicURL}
                  style={{
                    margin: "10px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
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
                rawFoodTag={this.state.RawFoodTag}
                unitTag={this.state.UnitTag}
                updateParent={this.updateRawFood}
                mode={this.props.mode}
                RawFood={this.state.RawFood}
                ref={this.state.refInputRawFood}
              />
              <li>
                <p>อุปกรณ์ : </p>
                <InputWithT
                  Tag={this.state.ToolTag}
                  updateParent={this.updateTools}
                  mode={this.props.mode}
                  ref={this.state.refInputTool}
                />
              </li>
              <hr />
              <li>
                <h2>ขั้นตอนการทำ</h2>
              </li>
              <Met
                updateParent={this.updateMeths}
                ref={this.state.refInputMeth}
                mode={this.props.mode}
              />
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
                  value={this.state.FoodType}
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
                  value={this.state.FoodNation}
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
              <button
                id="uploadrecipesbtn"
                type="button"
                onClick={this.handleSubmit}
              >
                ยืนยัน
              </button>
            </ul>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Recipe;
