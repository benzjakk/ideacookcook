import React, { Component } from "react";
import cate1 from "./pic/cate1.png";
import cate2 from "./pic/cate2.png";
import cate3 from "./pic/cate3.png";
import cate4 from "./pic/cate4.png";
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
          <a href="/result/2Low-0----">
            <figure>
              <img src={cate1} alt="สุขภาพ"></img>
              <figcaption>
                <b>สุขภาพ</b>
              </figcaption>
            </figure>
          </a>
          <a href="/result/2All-0----ทอด">
            <figure>
              <img src={cate2} alt="ทอด"></img>
              <figcaption>
                <b>ทอด</b>
              </figcaption>
            </figure>
          </a>
          <a href="/result/2All-0----ต้ม">
            <figure>
              <img src={cate3} alt="ต้ม"></img>
              <figcaption>
                <b>ต้ม</b>
              </figcaption>
            </figure>
          </a>
          <a href="/result/2All-0----นึ่ง">
            <figure>
              <img src={cate4} alt="นึ่ง"></img>
              <figcaption>
                <b>นึ่ง</b>
              </figcaption>
            </figure>
          </a>
          <a href="/result/2All-0---ไทย-">
            <figure>
              <img src={cate5} alt="ไทย"></img>
              <figcaption>
                <b>ไทย</b>
              </figcaption>
            </figure>
          </a>
          <a href="/result/2All-30----">
            <figure>
              <img src={cate6} alt="รวดเร็ว"></img>
              <figcaption>
                <b>รวดเร็ว</b>
              </figcaption>
            </figure>
          </a>
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
