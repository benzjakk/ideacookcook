import React, { Component } from "react";
import "../component/styles/results.css";
import { FaStar, FaCircle } from "react-icons/fa";
import TimeStamp from "../function/TimeStamp";
import { Link } from "react-router-dom";

const RSs = (props) => {
  const newList = [...props.L];
  if (props.SortBy == "Latest") {
    newList.sort((a, b) => (a.index > b.index ? 1 : -1));
  } else if (props.SortBy == "Popularity") {
    newList.sort((a, b) => (a.OverallRating > b.OverallRating ? -1 : 1));
  } else if (props.SortBy == "Duration") {
    newList.sort((a, b) => (a.Time > b.Time ? 1 : -1));
  }
  const listRSs = newList.map((food) => (
    <Link
      className="food-box"
      to={"/menu/" + food.RecipesID}
      style={{ textDecoration: "none" }}
    >
      <div className="fpBox">
        {food.RecipesPic != "" ? (
          <img src={food.RecipesPic} className="fp" />
        ) : (
          <div className="fp" />
        )}
        <div className={"cal" + food.Calories}>
          {food.Calories == "High" ? "High" : food.Calories.substring(0, 3)} Cal
        </div>
      </div>

      <div className="food-info">
        <div className="food-info-name">{food.RecipesName}</div>
        <div className="f-info" style={{ margin: "6px 0 8px 0" }}>
          <div style={{ color: "orange", fontSize: "14px" }}>
            <FaStar />
          </div>
          <div style={{ color: "rgb(170,5,5)" }}>
            <strong>
              {food.OverallRating > 0
                ? (food.OverallRating * 100) % 10 > 0
                  ? food.OverallRating.toFixed(2)
                  : (food.OverallRating * 100) % 100 > 0
                  ? food.OverallRating.toFixed(1)
                  : food.OverallRating
                : 0}
            </strong>
          </div>
          <div style={{ color: "rgb(190, 190, 190)" }}>
            <strong>({food.ReviewNo})</strong>
          </div>
          <div
            style={{
              color: "rgb(190, 190, 190)",
              fontSize: "4px",
              transform: "translateY(1px)",
            }}
          >
            <FaCircle />
          </div>
          <div style={{ color: "rgb(190, 190, 190)" }}>
            <strong>{food.FoodNation}</strong>
          </div>
          <div
            style={{
              color: "rgb(190, 190, 190)",
              fontSize: "4px",
              transform: "translateY(1px)",
            }}
          >
            <FaCircle />
          </div>
          <div style={{ color: "rgb(190, 190, 190)" }}>
            <strong>{TimeStamp(food.TimeStamp)}</strong>
          </div>
        </div>
        <div className="f-info">
          <div className="time">{food.Time} min</div>
          <div className="steps">{food.StepsNo} steps</div>
        </div>
      </div>
    </Link>
  ));
  return (
    <div
      style={
        props.words == "homeRecent"
          ? {
              padding: "5px",
              height: "fit-content",
              width: "fit-content",

              backgroundColor: "white",
              flexWrap: "nowrap",
            }
          : []
      }
      className="result-box"
    >
      {listRSs}
    </div>
  );
};

class Results extends Component {
  render() {
    return (
      <div
        style={
          this.props.words != "homeRecent"
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }
        }
      >
        <RSs
          L={this.props.RSs}
          SortBy={this.props.SortBy}
          words={this.props.words}
        />
        {this.props.words != "homeRecent" ? (
          <div
            style={{
              fontSize: "15px",
              margin: "50px 0 20px 0",
              textAlign: "center",
            }}
          >
            -- no more recipes found --
          </div>
        ) : null}
      </div>
    );
  }
}

export default Results;
