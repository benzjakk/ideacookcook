import React, { Component } from "react";
import "../page/styles/result.css";
import Results from "../component/results";
import Loading from "../component/Loading";
import axios from "axios";

const w = "/result/1นรก";
const p = "/result/2Low-30-คอหมู,หมูย่าง-กระทะ--"; //หมูย่างยังไม่มีนะจ๊ะ
// {
//     "Calories" : "Low",
//     "Time" : 30,
//     "RawFood" : ["คอหมู","หมูย่าง"],
//     "Tool" : ["กระทะ"],
//     "FoodNation" : "",
//     "FoodType" : ""}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPage: "Latest",
      Loaded: false,
      R: [],
      error: false,
      words: this.props.match.params.id.substring(
        1,
        this.props.match.params.id.length
      ),
      seachingType: this.props.match.params.id[0],
      params: this.props.match.params.id
        .substring(1, this.props.match.params.id.length)
        .split("-"),
    };
  }
  componentDidMount = () => {
    if (this.state.seachingType == 1) {
      axios
        .get(
          "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListRecipesName",
          {
            params: { keyWord: this.state.words },
          }
        )
        .catch((error) => {
          console.log(error);
          this.setState({ Loaded: true });
        })
        .then((res) => {
          console.log(res.data);
          this.setState({ R: res.data.data, Loaded: true });
        });
    } else if (this.state.seachingType == 2) {
      axios
        .get(
          "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/ListParameter",
          {
            params: {
              Calories: this.state.params[0],
              Time: this.state.params[1],
              RawFood:
                this.state.params[2].length > 1
                  ? this.state.params[2].split(",")
                  : [],
              Tool:
                this.state.params[3].length > 1
                  ? this.state.params[3].split(",")
                  : [],
              FoodNation: this.state.params[4],
              FoodType: this.state.params[5],
            },
          }
        )
        .catch((error) => {
          console.log(error);
          this.setState({ error: true });
          // console.log(this.props.match.params.id.substring(1,this.props.match.params.id.length));
        })
        .then((res) => {
          if (!this.state.error) {
            console.log(this.props.match.params.id[0]);
            console.log(this.state.params);
            this.setState({ R: res.data.data, Loaded: true });
          }
        });
    }
  };
  moveDot = () => {
    if (this.state.isPage == "Latest") return "dot-left";
    else if (this.state.isPage == "Duration") return "dot-right";
    else return "dot-mid";
  };
  render() {
    console.log(this.state.Loaded);
    return (
      <div className="result">
        <section>
          <div className="pageHeader">
            <div
              className={
                this.state.isPage == "Latest" ? "isClicked" : "isNotClicked"
              }
              onClick={() => this.setState({ isPage: "Latest" })}
            >
              <strong>Latest</strong>
            </div>
            <div
              className={
                this.state.isPage == "Popularity" ? "isClicked" : "isNotClicked"
              }
              onClick={() => this.setState({ isPage: "Popularity" })}
            >
              <strong>Popularity</strong>
            </div>
            <div
              className={
                this.state.isPage == "Duration" ? "isClicked" : "isNotClicked"
              }
              onClick={() => this.setState({ isPage: "Duration" })}
            >
              <strong>Duration</strong>
            </div>
          </div>
          {this.state.Loaded || this.state.error ? (
            <div className="allResult">
              <Results
                RSs={this.state.R}
                SortBy={this.state.isPage}
                words={this.state.words}
              />
            </div>
          ) : (
            <Loading />
          )}
        </section>
      </div>
    );
  }
}

export default Result;
