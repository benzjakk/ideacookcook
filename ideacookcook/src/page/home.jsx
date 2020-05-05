import React, { Component } from "react";
import Category from "../component/category.jsx";
import Hypersearch from "../component/hypersearch";
import Results from "../component/results.js";
import axios from "axios";
import "../component/styles/homestyles.css";
import loadingPic from "../component/pic/loading-png-gif.gif";
import Top from "../component/Top.js";

class Home extends Component {
  state = {
    R: null,
  };
  componentDidMount() {
    this.fecthReacentReacipes();
  }

  fecthReacentReacipes = () => {
    axios
      .get(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Search/TenLatest"
      )
      .then((res) => {
        this.setState({ R: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <section>
          <div
            className="result"
            style={{
              backgroundColor: "white",
              marginTop: "-25px",
              paddingTop: "10px",
            }}
          >
            <h2
              style={{
                marginLeft: "30px",
                fontSize: "30px",
                transform: "translateY(15px)",
              }}
            >
              Recent Menu
            </h2>
            {this.state.R ? (
              <div
                className="allResult"
                //style={{ width: "88vw", padding: "0vw 6vw" }}
              >
                <Results
                  RSs={this.state.R}
                  SortBy={"Latest"}
                  words={["homeRecent"]}
                />
              </div>
            ) : (
              <img
                height="50"
                width="50"
                src={loadingPic}
                style={{ margin: "20px", marginLeft: "30px" }}
              ></img>
            )}
          </div>
        </section>
        <Top />
        <Category />
        <Hypersearch />
      </React.Fragment>
    );
  }
}

export default Home;
