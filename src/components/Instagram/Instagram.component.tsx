import { HeartFill, Quote } from "react-bootstrap-icons";
import React, { Component } from "react";
import img1 from "./instagram/flower.jpeg";
import img2 from "./instagram/heathrow.jpeg";
import img3 from "./instagram/jaisalmer.jpeg";
import img4 from "./instagram/jaisalmer_dessert.jpeg";
import img5 from "./instagram/scooter.jpeg";
import img6 from "./instagram/temple.jpeg";

export class Instagram extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="instagram">
        <div className="image">
          <img src={img1} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img1} />
          </span>
        </div>
        <div className="image">
          <img src={img2} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img2} />
          </span>
        </div>
        <div className="image">
          <img src={img3} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img3} />
          </span>
        </div>
        <div className="image">
          <img src={img4} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img4} />
          </span>
        </div>
        <div className="image">
          <img src={img5} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img5} />
          </span>
        </div>
        <div className="image">
          <img src={img6} />
          <div className="caption">
            <Quote size={40} />
            Belief keep you moving
            <Quote size={40} />
          </div>
          <span>
            <img src={img6} />
          </span>
        </div>
      </div>
    );
  }
}

export default Instagram;
