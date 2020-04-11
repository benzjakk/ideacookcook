import React from "react";
import Category from "../component/category.jsx";
import Hypersearch from "../component/hypersearch";

function Home() {
  return (
    <React.Fragment>
      <Category />
      <Hypersearch />
    </React.Fragment>
  );
}

export default Home;
