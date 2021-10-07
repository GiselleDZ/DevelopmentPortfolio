import React, { useEffect, useRef } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../artComponents/sketch";

const Playground = (p5) => {
  return (
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
        SKETCHY SKETCH
      </header>
      <div style={{ width: "800px", height: "500px", background: "pink" }}>
        <>
          <ReactP5Wrapper sketch={sketch} />
        </>
      </div>
    </div>
  );
};

export default Playground;
