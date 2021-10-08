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
    <div style={{ width: "800px", height: "500px", background: "pink" }}>
      {children}
    </div>
  </div>
);

export default PlaygroundTemplate;
