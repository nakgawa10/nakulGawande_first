import { Component } from "react";
import {
  ArrowBarDown,
  ArrowBarLeft,
  ArrowBarRight,
  ArrowBarUp,
} from "react-bootstrap-icons";

export class Work extends Component {
  static propTypes = {};

  state = {
    isActive: new Set<string>(),
    className: "show",
  };

  toggleClass = (some: string) => {
    if (this.state.isActive.has(some)) {
      this.state.isActive.delete(some);
    } else {
      this.state.isActive.add(some);
    }

    this.setState({
      isActive: this.state.isActive,
    });
  };

  render() {
    return (
      <div className="work" id="timeline">
        <div className="pageName">
          <h2> Timeline </h2>
        </div>
        <div className="vit">
          <h5 className="title">VIT, Pune</h5>
          <div className="education">
            <h6>B.Tech Computer Science</h6>
            <div className="timeline">
              <h6>August 2011 - July 2015</h6>
            </div>
            <p className={this.state.isActive.has("vit") ? "show" : "hide"}>
              I pursued my Bachelor's degree in Engineering. During my time
              there, I gained a strong foundation in various aspects of computer
              science and software engineering, including programming languages,
              data structures, algorithms, and database management. The
              coursework provided me with an opportunity to work on various
              projects that helped me gain practical experience and sharpen my
              technical skills. The exposure to a diverse range of topics and
              the challenging academic environment at VIT Pune have played a
              crucial role in shaping my career and making me the professional
              that I am today.
            </p>
            <ArrowBarUp size={27} onClick={() => this.toggleClass("vit")} />
          </div>
        </div>
        <div className="hansen">
          <h5 className="title">Hansen Technologies</h5>
          <div className="software_dev">
            <h6>Software Developer </h6>
            <div className="timeline">
              <h6>October 2019 - January 2020</h6>
            </div>
            <ArrowBarLeft
              size={27}
              onClick={() => this.toggleClass("software_dev")}
            />
            <p
              className={
                this.state.isActive.has("software_dev") ? "show" : "hide"
              }
            >
              I was responsible for designing and developing software solutions
              for the company's legacy products. With my expertise in Java, I
              played a key role in enhancing the features of these products and
              developing new functionalities.
            </p>
          </div>
          <div className="senior_software_dev">
            <h6>Senior Software Developer</h6>
            <div className="timeline">
              <h6>October 2019 - January 2020</h6>
            </div>
            <ArrowBarLeft
              size={27}
              onClick={() => this.toggleClass("senior_software_dev")}
            />
            <p
              className={
                this.state.isActive.has("senior_software_dev") ? "show" : "hide"
              }
            >
              As a Senior Software Developer at Hansen Technologies, I designed
              and developed efficient backend services for bulk CRUD operations.
              I performed rigorous Unit and API testing to ensure the quality of
              the developed services. Additionally, I used my expertise in Java
              to enhance legacy product features, contributing to the overall
              improvement of the company's software products. ̰
            </p>
          </div>
          <div className="lead_software_dev">
            <h6> Lead Software Developer</h6>
            <div className="timeline">
              <h6>February 2021 - July 2022</h6>
            </div>
            <ArrowBarLeft
              size={27}
              onClick={() => this.toggleClass("lead_software_dev")}
            />
            <p
              className={
                this.state.isActive.has("lead_software_dev") ? "show" : "hide"
              }
            >
              I played a pivotal role in enhancing existing products and
              designing new solutions. My technical expertise helped me to
              create a cache mechanism to reduce API call round-trip times, and
              I designed support for OpenID authorization using Salesforce. I
              also made significant contributions to the company's IP by
              improving code obfuscation. Additionally, I was responsible for
              developing and designing a custom plugin for MS Dynamics, as well
              as managing client interactions. My role also involved performing
              unit and API testing for the developed services and managing
              customized Salesforce Managed Package Releases. I was proud to
              contribute to the legacy product feature enhancements using Java.
            </p>
          </div>
        </div>
        <div className="tech9">
          <h5 className="title">Tech9</h5>
          <div className="senior_software_eng">
            <h6>Senior Software Engineer - </h6>
            <div className="timeline">
              <h6>August 2022</h6>
            </div>
            <ArrowBarRight
              size={27}
              onClick={() => this.toggleClass("senior_software_eng")}
            />
            <p
              className={
                this.state.isActive.has("senior_software_eng") ? "show" : "hide"
              }
            >
              I work closely with clients to understand their needs and design
              solutions to complex problems. With 7+ years of industry
              experience, I leverage my expertise to provide new avenues for
              growth and learning for myself and the organization. My role
              involves migrating old functionalities and designing new
              interactions as required, and I am skilled in designing backend
              services for bulk CRUD operations. I am highly motivated and
              passionate about software engineering, and I believe my
              professional qualifications and experience make me a valuable
              asset to Tech9. I am committed to contributing to the company's
              success through my work and ensuring that developed services meet
              client's requirements through thorough unit and API testing.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
