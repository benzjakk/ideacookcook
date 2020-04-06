import React from "react";
import "./component/styles/appstyles.css";
import Header from "./component/header.jsx";
import Category from "./component/category.jsx";
import Hypersearch from "./component/hypersearch";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Category />
      <Hypersearch />
    </React.Fragment>
  );
}

export default App;
