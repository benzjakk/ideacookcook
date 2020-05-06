import React, { Component } from "react";
import "./styles/Top.css";
import { Link } from "react-router-dom";
import axios from "axios";
import loadingPic from "../component/pic/loading-png-gif.gif";

const BestUser = (props) => {
  const listRSs = props.L.map((food) => (
    <Link
      className="food-box"
      to={"/Profile/" + food.MemID}
      style={{ textDecoration: "none" }}
    >
      <div className="fpBox">
        {food.ProfilePicture != "" ? (
          <img src={food.ProfilePicture} className="fp" />
        ) : (
          <div
            className="fp"
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              color: "black",
              textTransform: "uppercase",
              borderRadius: "50%",
              background: "rgb(233,233,233)",
            }}
          >
            <div
              style={{
                transform: "translateY(25px)",
                fontSize: "75px",
                fontWeight: "700",
              }}
            >
              {food.KnownName[0]}
            </div>
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-info-name">
          {food.KnownName}
          <div className="eiei">
            {food.AvgRating > 0
              ? (food.AvgRating * 100) % 10 > 0
                ? (food.AvgRating * 100) % 100 > 0
                  ? food.AvgRating.toFixed(2)
                  : food.AvgRating.toFixed(1)
                : food.AvgRating
              : 0}
          </div>
        </div>

        <div className="f-info">
          <div className="inf">
            <div style={{ fontWeight: "bolder", marginRight: "5px" }}>
              {food.RecipesCount}
            </div>
            <div style={{ fontSize: "13px" }}>
              recipe{food.RecipesCount > 1 ? "s" : ""}
            </div>
          </div>
          <div className="inf">
            <div style={{ fontWeight: "bolder", marginRight: "5px" }}>
              {food.ReviewCount}
            </div>
            <div style={{ fontSize: "13px" }}>
              review{food.ReviewCount > 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
  return <div className="result-box">{listRSs}</div>;
};

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      L: [],
      Loaded: false,
    };
  }
  componentDidMount = () => {
    axios
      .get(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/User/TenBestProfile/"
      )
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        console.log(res.data.data);
        this.setState({ L: res.data.data, Loaded: true });
      });
    console.log("eieiei");
  };

  render() {
    return (
      <div className="Top">
        <section>
          <h3>Top 10 Profiles</h3>
          {this.state.Loaded ? (
            <div className="scrollja">
              <BestUser L={this.state.L} />
            </div>
          ) : (
            <img
              height="50"
              width="50"
              src={loadingPic}
              style={{ margin: "20px", marginLeft: "30px" }}
            ></img>
          )}
        </section>
      </div>
    );
  }
}

export default Top;
