import React from "React";
import { Header, Intro } from "../components";
import Projects from "../components/projects/Projects";

const Resume = () => (
  <div>
    <a href="#HiHello" className="btt">
      <figure className="btt__main">
        <figcaption className="btt__caption">
          <span className="btt__arrow">&#x2191;</span> Back to Top
        </figcaption>
      </figure>
    </a>
    <Header />
    <Intro />
    <Projects />
  </div>
);

export default Resume;
