import React, { Component } from "react";
import Typed from "typed.js";
import words from "./words";
import "./Top.css";
import excel from "../assets/excel.jpeg";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";

export default class Top extends Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 90,
      backSpeed: 70,
      loop: true,
      cursorChar: " ",
    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <div className="header-container-ellipse1">
          <img src={ellipse1} alt=" " />
        </div>
        <div className="header-container">
          <div className="header-container-left">
            <h1 className="header-container-left-heading">Excel 2021</h1>

            <span
              className="header-container-left-tag"
              ref={(el) => {
                this.el = el;
              }}
            ></span>

            <div className="header-container-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              eos aliquam labore dolore nam optio nobis, facilis nihil placeat,
              magnam facere veritatis sequi architecto modi quas rem incidunt
              exercitationem vero.
            </div>
          </div>
          <div className="header-container-right">
            <img src={excel} alt="Excel 2021 Logo" />
          </div>
        </div>
        <div className="header-container-ellipse2">
          <img src={ellipse2} alt=" " />
        </div>
      </>
    );
  }
}
