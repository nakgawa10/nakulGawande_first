import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  CameraFill,
  CloudFill,
  DatabaseFill,
  Laptop,
  PersonBoundingBox,
  Stars,
  TerminalFill,
  Tools,
  WindowStack,
} from "react-bootstrap-icons";

export class Services extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="skilled_work" id="skilled_work">
        <h3>
          Work <Laptop />
        </h3>
        <div className="experience">
          <h4>What I can help you with 🧑‍💻 </h4>
          <div className="backend">
            <div className="svg">
              <DatabaseFill size={27} />
            </div>
            <p>
              I'm a backend development ninja with expertise in designing and
              building scalable and robust systems. With a deep understanding of
              data structures and algorithms, I create optimized solutions that
              handle large volumes of data with ease. I try to bring efficiency
              and reliability to backend development.
            </p>
          </div>
          <div className="ui">
            <div className="svg">
              <WindowStack size={27} />
            </div>
            <p>
              I love creating beautiful and responsive user interfaces that
              enhance the user experience. With expertise in HTML, CSS,
              JavaScript, and React, I bring designs to life and create seamless
              interactions that engage and delight users.
            </p>
          </div>
          <div className="salesforce">
            <div className="svg">
              <CloudFill size={27} />
            </div>
            <p>
              As a PD-1 certified Salesforce developer, I bring expertise in
              designing and implementing custom solutions that meet the unique
              needs of each client. With a deep understanding of the Salesforce
              platform, I create scalable and effective solutions that drive
              business growth and success.
            </p>
          </div>
          <div className="cicd">
            <div className="svg">
              <Tools size={27} />
            </div>
            <p>
              I can help automate routine tasks, minimize errors, and enhance
              productivity using my skills in building CI/CD pipelines and shell
              and Jenkins scripting. Let me optimize your development workflow
              and increase your team's efficiency.
            </p>
          </div>
          <div className="auth">
            <div className="svg">
              <PersonBoundingBox size={27} />
            </div>
            <p>
              I have experience in designing and implementing secure
              authentication frameworks using OAuth and AWS Lambda. With a deep
              understanding of security protocols, Let me help you enhance your
              security posture and protect your valuable assets.
            </p>
          </div>
          <div className="camera">
            <div className="svg">
              <CameraFill size={27} />
            </div>
            <p>
              I believe that every picture has a story to tell. With my passion
              for photography, I capture the essence of every moment and bring
              it to life through visual storytelling. Let me help you tell your
              story through stunning and captivating images.
            </p>
          </div>
        </div>
        <br />
        <div className="skills">
          <h3>
            Skills <Stars size={27} />
          </h3>
          <div className="skills__skill">NodeJS</div>
          <div className="skills__skill">MongoDB</div>
          <div className="skills__skill">TypeScript</div>
          <div className="skills__skill">JavaScript</div>
          <div className="skills__skill">React</div>
          <div className="skills__skill">OAuth</div>
          <div className="skills__skill">Express</div>
          <div className="skills__skill">SalesForce</div>
          <div className="skills__skill">Java</div>
          <div className="skills__skill">Python</div>
          <div className="skills__skill">Shell Scripting</div>
          <div className="skills__skill">SASS</div>
          <div className="skills__skill">GIT</div>
          <div className="skills__skill">Github</div>
          <div className="skills__skill">Terminal</div>
          <div className="skills__skill">SQL</div>
          <div className="skills__skill">Photography</div>
        </div>
      </div>
    );
  }
}

export default Services;
