import PropTypes from "prop-types";
import React, { Component } from "react";

export class Logo extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="logo">
        <img src="/bg-free.png"/>
      </div>
    );
  }
}

export default Logo;
