import React, { useEffect, useRef } from "react";
import firstSketch from "../artComponents";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { PlaygroundTemplate } from "../components";

const Playground = () => {
  return (
    <>
      <PlaygroundTemplate title="SKETCHY SKETCH">
        <>
          <ReactP5Wrapper sketch={firstSketch} />
        </>
      </PlaygroundTemplate>
    </>
  );
};

export default Playground;
