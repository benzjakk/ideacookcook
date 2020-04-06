import React, { Component } from "react";

class Category extends Component {
  state = {};
  render() {
    return (
      <section class="category">
        <h2>หมวดหมู่</h2>
        <ul>
          <figure>
            <img src="pic/cate1.png" alt="คาว"></img>
            <figcaption>
              {" "}
              <b>คาว</b>{" "}
            </figcaption>
          </figure>
          <figure>
            <img src="pic/cate2.png" alt="หวาน"></img>
            <figcaption>
              <b>หวาน</b>
            </figcaption>
          </figure>
          <figure>
            <img src="pic/cate3.png" alt="กินเล่น"></img>
            <figcaption>
              <b>กินเล่น</b>
            </figcaption>
          </figure>
          <figure>
            <img src="pic/cate4.png" alt="ประหยัด"></img>
            <figcaption>
              <b>ประหยัด</b>
            </figcaption>
          </figure>
          <figure>
            <img src="pic/cate5.png" alt="ไทย"></img>
            <figcaption>
              <b>ไทย</b>
            </figcaption>
          </figure>
          <figure>
            <img src="pic/cate6.png" alt="ต่างชาติ"></img>
            <figcaption>
              <b>ต่างชาติ</b>
            </figcaption>
          </figure>
        </ul>
        <div>
          {" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Icons made by Freepik
          </a>{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            from www.flaticon.com
          </a>
        </div>
      </section>
    );
  }
}

export default Category;
