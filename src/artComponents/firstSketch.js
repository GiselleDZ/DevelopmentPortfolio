import { flip } from "./helpers";

const firstSketch = (p) => {
  let rotation = 0;

  let color = 0;

  p.setup = () => {
    p.createCanvas(800, 500);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
      p.ellipse(p.mouseX, p.mouseY, 8, 8);
    } else {
      p.fill(255);
      p.ellipse(p.mouseX, p.mouseY, 8, 8);
    }
  };
};

export default firstSketch;
