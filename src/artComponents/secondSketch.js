import { flip } from "./helpers";

const secondSketch = (p) => {
  const lightColorsArray = [
    [255, 237, 232],
    [255, 211, 199],
    [255, 189, 171],
    [255, 159, 133],
    [255, 135, 102],
    [255, 111, 71],
    [255, 79, 31],
    [255, 55, 0],
  ];
  let i = 0;

  const darkColorsArray = [
    [222, 48, 0],
    [186, 40, 0],
    [145, 31, 0],
    [110, 24, 1],
    [71, 15, 0],
    [41, 9, 0],
    [0, 0, 0],
    [31, 6, 6],
    [31, 12, 12],
  ];
  let j = 0;

  p.mouseClicked = () => {
    if (i < 7) i++;
    else i = 0;
  };
  p.doubleClicked = () => {
    if (j < 7) j++;
    else j = 0;
  };

  console.log(window.innerHeight, window.innerWidth);

  p.setup = () => {
    p.createCanvas(window.innerWidth - 100, window.innerHeight - 200);
  };

  p.draw = () => {
    let lightColor = lightColorsArray[i];
    let darkColor = darkColorsArray[j];

    if (p.mouseX > -1 && p.mouseX < 801 && p.mouseY > -1 && p.mouseY < 501) {
      if (p.mouseIsPressed) {
        p.stroke(lightColor);
      } else {
        p.stroke(darkColor);
      }
      p.line(p.mouseX, 0, p.mouseX, 800);
      setTimeout(() => p.line(p.mouseX + 15, 0, p.mouseX + 15, 800), 1000);
      setTimeout(() => p.line(p.mouseX + 30, 0, p.mouseX + 30, 800), 2000);
      setTimeout(() => p.line(p.mouseX + 60, 0, p.mouseX + 60, 800), 3000);
      setTimeout(() => p.line(p.mouseX + 120, 0, p.mouseX + 120, 800), 4000);
      setTimeout(() => p.line(p.mouseX + 240, 0, p.mouseX + 240, 800), 5000);
      setTimeout(() => p.line(p.mouseX + 480, 0, p.mouseX + 480, 800), 6000);
    }
  };
};

export default secondSketch;
