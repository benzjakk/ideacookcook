import React, { Component } from "react";
import Recipe from "./Recipe.js";
import axios from "axios";

import Loading from "../component/Loading";

class EditRecipe extends Component {
  state = {
    recipe: null,
    match: this.props.match.params.id,
    auth: false,
  };

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    await axios
      .get(
        "https://asia-east2-ideacookcook.cloudfunctions.net/IdeaCookCook/Recipes/PatchMenu/" +
          this.state.match
      )
      .then((res) => {
        console.log(res.data.data.MemID);
        if (res.data.data.MemID == localStorage.getItem("currentMemID")) {
          this.setState({ auth: true });
        }
        this.setState({ recipe: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //console.log(this.state.recipe);
    return (
      <>
        {this.state.recipe ? (
          this.state.auth ? (
            <Recipe
              recipe={this.state.recipe}
              mode="edit"
              recipeID={this.state.match}
            />
          ) : (
            <h2 style={{ textAlign: "center", margin: "40px" }}>
              Sorry!! You're not the owner of this recipe.
            </h2>
          )
        ) : (
          <Loading />
        )}
      </>
    );
  }
}
export default EditRecipe;
