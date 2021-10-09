import { WEBGL, PI } from "p5";

const threeDSketchTest = (p) => {
  p.setup = () => {
    p.createCanvas(100, 100, WEBGL);
    p.noFill();
  };

  p.draw = () => {
    p.background(200);
    p.rotate(PI / 6);
    p.stroke(153);
    // p.box(35);

    let rad = p.millis() / 1000;

    let ct = p.cos(rad);
    let st = p.sin(rad);

    p.applyMatrix(
      ct,
      0.0,
      st,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      -st,
      0.0,
      ct,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
    );

    p.stroke(255);
    // p.box(50);
  };
};

export default threeDSketchTest;
