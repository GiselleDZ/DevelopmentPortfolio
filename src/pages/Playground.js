import React, { useEffect, useRef } from "react";
import { firstSketch, secondSketch, threeDSketchTest } from "../artComponents";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { PlaygroundTemplate } from "../components";

const Playground = () => {
  return (
    <>
      <PlaygroundTemplate title="SKETCHY SKETCH">
        <>
          {/* <ReactP5Wrapper sketch={firstSketch} /> */}
          <ReactP5Wrapper sketch={secondSketch} />
        </>
      </PlaygroundTemplate>
    </>
  );
};

export default Playground;
