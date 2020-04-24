import React, { Component } from "react";
import cate1 from "./pic/cate1.png";
import cate2 from "./pic/cate2.png";
import cate3 from "./pic/cate3.png";
//import cate4 from "./pic/cate4.png";
import cate5 from "./pic/cate5.png";
import cate6 from "./pic/cate6.png";
import "./styles/categorystyles.css";
class Category extends Component {
  state = {};
  render() {
    return (
      <section className="category">
        <h2>หมวดหมู่</h2>
        <ul>
          <figure>
            <img src={cate1} alt="คาว"></img>
            <figcaption>
              <b>คาว</b>
            </figcaption>
          </figure>
          <figure>
            <img src={cate2} alt="หวาน"></img>
            <figcaption>
              <b>หวาน</b>
            </figcaption>
          </figure>
          <figure>
            <img src={cate3} alt="กินเล่น"></img>
            <figcaption>
              <b>กินเล่น</b>
            </figcaption>
          </figure>
          <figure>
            <img src={cate5} alt="ไทย"></img>
            <figcaption>
              <b>ไทย</b>
            </figcaption>
          </figure>
          <figure>
            <img src={cate6} alt="ต่างชาติ"></img>
            <figcaption>
              <b>ต่างชาติ</b>
            </figcaption>
          </figure>
        </ul>
        <div>
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Icons made by Freepik
          </a>
          <a href="https://www.flaticon.com/" title="Flaticon">
            from www.flaticon.com
          </a>
        </div>
      </section>
    );
  }
}

export default Category;
