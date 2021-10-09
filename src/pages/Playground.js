import React, { useEffect, useRef, useState } from "react";
import {
  firstSketch,
  secondSketch,
  thirdSketch,
  threeDSketchTest,
} from "../artComponents";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { PlaygroundTemplate } from "../components";
import Button from "../components/Utility/Button";

const Playground = () => {
  const [red, setRed] = useState(false);

  return (
    <>
      <PlaygroundTemplate
        title="VERTICAL VOIDS"
        borderColor="#3d7cff"
        bgColor="#0043ce"
      >
        <>
          {red ? (
            <ReactP5Wrapper sketch={secondSketch} />
          ) : (
            <ReactP5Wrapper sketch={thirdSketch} />
          )}
        </>
      </PlaygroundTemplate>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "2em",
        }}
      >
        <Button
          label=" B L U E "
          borderColor="#3d7cff"
          bgColor="#0043ce"
          textColor="#e8f0ff"
          onClick={() => setRed(false)}
        />
        <Button
          label=" R E D "
          borderColor="#3d7cff"
          bgColor="#0043ce"
          textColor="#e8f0ff"
          onClick={() => setRed(true)}
        />
      </div>
    </>
  );
};

export default Playground;
