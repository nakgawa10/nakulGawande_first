import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  EnvelopeAt,
  FilePersonFill,
  Github,
  Instagram,
  Linkedin,
  StackOverflow,
} from "react-bootstrap-icons";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="footer">
        <div className="social">
          <a href="https://github.com/nakgawa10">
            <Github size={27} />
          </a>
          <a href="https://www.instagram.com/gawandenakul/">
            <Instagram size={27} />
          </a>
          <a href="https://www.linkedin.com/in/nakul-gawande-011/">
            <Linkedin size={27} />
          </a>
          <a href="https://stackoverflow.com/users/6329056/nakul-gawande">
            <StackOverflow size={27} />
          </a>
          <a href="mailto:nakgawande@gmail.com">
            <EnvelopeAt size={27} />
          </a>
        </div>
        <div className="copyright">
          © 2023 | Nakul Gawande
        </div>
        <div className="resume">
            <a href="./../../../public/Nakul.pdf">
              <FilePersonFill size={27} />
              Resume
            </a>
        </div>
      </div>
    );
  }
}

export default Footer;
