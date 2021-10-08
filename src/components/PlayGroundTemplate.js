import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const PlaygroundTemplate = ({ title, children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flexFlow: "column",
    }}
  >
    <header
      style={{
        margin: "1em",
        color: "white",
        fontSize: "30px",
      }}
    >
      {title}
    </header>
    <div
      style={{
        width: window.innerWidth - 100,
        height: window.innerHeight - 194,
        border: "3px solid #3d7cff",
      }}
    >
      {children}
    </div>
  </div>
);

export default PlaygroundTemplate;
