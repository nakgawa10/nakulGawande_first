import PropTypes from "prop-types";
import React, { Component } from "react";

export class Introduction extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="introduction">
        <h4 className="string">
        <strong>नमस्ते </strong>I'm<strong> Nakul</strong>, sharing my love for
        </h4>
        <section className="animation">
          <div className="first">
            <div> Photography</div>
          </div>
          <div className="second">
            <div> Travel</div>
          </div>
          <div className="third">
            <div>Books</div>
          </div>
          <div className="fourth">
            <div> Motorbikes</div>
          </div>
          <div className="fifth">
            <div> Sports</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;
