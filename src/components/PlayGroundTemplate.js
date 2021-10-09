import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const PlaygroundTemplate = ({ title, borderColor, bgColor, children }) => (
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
        marginBottom: "2em",
      }}
    >
      {title}
    </header>
    <div
      style={{
        width: window.innerWidth - 100,
        height: window.innerHeight - 294,
        border: `3px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
      }}
    >
      {children}
    </div>
  </div>
);

export default PlaygroundTemplate;
