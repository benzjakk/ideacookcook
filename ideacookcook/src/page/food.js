import React, { Component } from "react";
import "../page/styles/food.css";
import FoodBasicInfo from "../component/food-basicInfo";
import Step from "../component/Step";
import RawNTool from "../component/RawNTool";
import Loading from "../component/Loading";
import axios from "axios";

class food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPage: "Raw&Tool",
      match: this.props.match.params.id,
      Member: [],
      Data: [],
      Reviews: [],
      RawFood: [],
      Tools: [],
      Steps: [],
      Loaded: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/Menu/" +
          this.state.match
      )
      .then((res) => {
        this.setState({
          Data: res.data.data,
          Reviews: res.data.data.review,
          Member: res.data.data.Member,
          RawFood: res.data.data.RawFood,
          Tools: res.data.data.Tool,
          Steps: res.data.data.Steps,
          Loaded: true,
        });
      });
  };

  thePage = () => {
    if (this.state.isPage == "Raw&Tool")
      return (
        <div>
          <RawNTool Rs={this.state.RawFood} Ts={this.state.Tools} />
        </div>
      );
    else if (this.state.isPage == "Steps")
      return (
        <div>
          <Step L={this.state.Steps} />
        </div>
      );
  };

  render() {
    return (
      <div className="food">
        {!this.state.Loaded ? (
          <Loading />
        ) : (
          <section>
            <FoodBasicInfo
              foodName={this.state.Data.RecipesName}
              foodPic={this.state.Data.RecipesPic}
              foodRate={this.state.Data.OverallRating}
              time={this.state.Data.Time}
              timeStamp={this.state.Data.TimeStamp} /* */
              numOfSteps={this.state.Data.NoStep}
              cal={this.state.Data.Calories}
              foodType={this.state.Data.FoodType}
              foodNation={this.state.Data.FoodNation}
              description={this.state.Data.Description}
              foodID={this.state.match}
              chefPic={this.state.Member.ProfilePicture}
              chefName={this.state.Member.KnownName}
              numOfRecipes={this.state.Member.MenuNo}
              chefID={this.state.Data.MemID}
              numOfReviews={this.state.Reviews.length}
              allReviews={this.state.Reviews}
              myName={localStorage.getItem("currentUser")}
              myPic={localStorage.getItem("profilePicture")}
              myID={localStorage.getItem("currentMemID")}
            />
            <div className="pageHeader">
              <div
                className={
                  this.state.isPage == "Raw&Tool" ? "isClicked" : "isNotClicked"
                }
                onClick={() => this.setState({ isPage: "Raw&Tool" })}
              >
                <strong>Tools {"&"} Ingredients</strong>
              </div>
              <div
                className={
                  this.state.isPage == "Steps" ? "isClicked" : "isNotClicked"
                }
                onClick={() => this.setState({ isPage: "Steps" })}
              >
                <strong>Steps</strong>
              </div>
            </div>
            {this.thePage()}
          </section>
        )}
      </div>
    );
  }
}

export default food;
