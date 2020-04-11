import React from "react";
import "./component/styles/appstyles.css";
import Header from "./component/header.jsx";
import Home from "./page/home.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
