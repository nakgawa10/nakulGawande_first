import PropTypes from "prop-types";
import React, { Component } from "react";

export class FullBio extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="about_me" id="about_me">
        <div className="work_img">
          <img src="./nakul-laptop.png" />
        </div>
        <div className="about_me_text">
          <h3>About Me !</h3>
          <p>
            Hello! I'm <strong>Nakul</strong>, a software developer with a
            passion for photography, travel, motorbike rides, books, and sports.
            When I'm not coding, you can often find me exploring new
            destinations, capturing beautiful moments through my camera lens, or
            diving into a good book. I'm also an avid sports enthusiast and love
            to stay active through activities like basketball, soccer, and
            hiking.
          </p>
          <p>
            I discovered my love for software development during my college
            years, and I've been hooked ever since. I'm constantly striving to
            improve my skills and stay up-to-date with the latest technologies
            in the field. I'm a problem solver at heart, and I find great
            satisfaction in using my programming knowledge to create innovative
            solutions to complex challenges.
          </p>
          <p>
            Through this website, I aim to share my experiences and insights
            into my diverse interests and hobbies, as well as my journey as a
            software developer. I'll also be sharing my thoughts on software
            development and some of the projects I'm working on. I hope to
            connect with like-minded individuals and foster a community of
            learning, exploration, and growth. Thank you for visiting my
            website!
          </p>
        </div>
      </div>
    );
  }
}

export default FullBio;
