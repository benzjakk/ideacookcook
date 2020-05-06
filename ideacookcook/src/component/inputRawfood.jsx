import React, { Component } from "react";
import "./styles/inputRawFood.css";

class InputRawFood extends Component {
  state = {
    raws: [""],
    quans: ["1"],
    units: [""],
    jsonRawFood: [{ RawFood: "", Quantity: 1, Unit: "" }],
  };

  componentDidMount() {
    if (this.props.mode == "edit") {
      this.fetchData();
    }
  }

  async fetchData() {
    this.setState({ jsonRawFood: this.props.RawFood });
    let raws = [];
    let quans = [];
    let units = [];
    this.props.RawFood.map((rawfood, index) => {
      raws = raws.concat([rawfood.RawFood]);
      quans = quans.concat([rawfood.Quantity]);
      units = units.concat([rawfood.Unit]);
    });
    this.setState({ raws, quans, units });
  }
  handleChange = (i) => async (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let tmp = null;
    let jsontmp = this.state.jsonRawFood;
    if (name == "raws") {
      tmp = this.state.raws;
      tmp[i] = value;
      jsontmp[i].RawFood = value;
      this.setState({ raws: tmp });
    } else if (name == "quans") {
      tmp = this.state.quans;
      if (value > -1 && value < 999999 && value != NaN) {
        tmp[i] = value;
        jsontmp[i].Quantity = parseFloat(value);
        this.setState({ quans: tmp });
      }
    } else {
      tmp = this.state.units;
      tmp[i] = value;
      jsontmp[i].Unit = value;
      this.setState({ units: tmp });
    }
    await this.setState({ jsonRawFood: jsontmp });
    this.updateParent();
  };

  handleDelete = (i) => async (e) => {
    e.preventDefault();
    let raws = [
      ...this.state.raws.slice(0, i),
      ...this.state.raws.slice(i + 1),
    ];
    let quans = [
      ...this.state.quans.slice(0, i),
      ...this.state.quans.slice(i + 1),
    ];
    let units = [
      ...this.state.units.slice(0, i),
      ...this.state.units.slice(i + 1),
    ];
    let jsonRawFood = [
      ...this.state.jsonRawFood.slice(0, i),
      ...this.state.jsonRawFood.slice(i + 1),
    ];
    await this.setState({ raws, quans, units, jsonRawFood });
    this.updateParent();
  };

  addMethod = async (e) => {
    e.preventDefault();
    let raws = this.state.raws.concat([""]);
    let quans = this.state.quans.concat(["0"]);
    let units = this.state.units.concat([""]);
    let jsonRawFood = this.state.jsonRawFood.concat([
      { RawFood: "", Quantity: 0, Unit: "" },
    ]);
    await this.setState({
      raws,
      quans,
      units,
      jsonRawFood,
    });
  };

  updateParent = () => {
    this.props.updateParent(this.state.jsonRawFood);
  };
  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        {this.state.raws.map((raw, index) => (
          <span
            className="rawFoodInput"
            key={"span" + index}
            style={{ margin: "10px", display: "flex" }}
          >
            <div>
              <label>วัตุดิบ</label>
              <input
                list="RawFoodTag"
                name="raws"
                onChange={this.handleChange(index)}
                value={this.state.raws[index]}
              />
              <datalist id="RawFoodTag">
                {this.props.rawFoodTag.map((tag, index) => {
                  return <option value={tag} key={index}></option>;
                })}
              </datalist>
            </div>
            <div>
              <label>ปริมาณ</label>
              <input
                maxLength="7"
                min="1"
                max="99999"
                type="number"
                name="quans"
                onChange={this.handleChange(index)}
                value={this.state.quans[index]}
              />
            </div>
            <div>
              <label>หน่วย</label>
              <input
                list="UnitTag"
                name="units"
                onChange={this.handleChange(index)}
                value={this.state.units[index]}
              />
              <datalist id="UnitTag">
                {this.props.unitTag.map((tag, index) => {
                  return <option value={tag} key={index}></option>;
                })}
              </datalist>
            </div>
            <button
              className="xbutRawFood"
              type="button"
              onClick={this.handleDelete(index)}
            >
              ลบวัตถุดิบที่{index + 1}
            </button>
          </span>
        ))}
        {(this.state.raws[this.state.raws.length - 1] !== "" &&
          this.state.units[this.state.units.length - 1] !== "" &&
          this.state.quans[this.state.quans.length - 1] !== "" &&
          parseFloat(this.state.quans[this.state.quans.length - 1]) > 0) ||
        this.state.raws.length == 0 ? (
          <button onClick={this.addMethod} type="button">
            <b>เพิ่มวัตุดิบ</b>
          </button>
        ) : null}
      </React.Fragment>
    );
  }
}

export default InputRawFood;
