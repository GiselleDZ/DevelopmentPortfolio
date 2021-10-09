const thirdSketch = (p) => {
  const lightColorsArray = [
    [232, 240, 255],
    [204, 221, 255],
    [173, 201, 255],
    [133, 174, 255],
    [107, 157, 255],
    [79, 138, 255],
    [51, 119, 255],
    [28, 104, 255],
  ];
  let i = 0;

  const darkColorsArray = [
    [0, 83, 255],
    [0, 67, 207],
    [0, 47, 148],
    [0, 33, 105],
    [0, 18, 59],
    [0, 2, 8],
    [7, 12, 28],
    [12, 16, 31],
    [17, 20, 31],
  ];
  let j = 0;

  p.mouseClicked = () => {
    if (i < 7) i++;
    else i = 0;
    if (j < 7) j++;
    else j = 0;
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth - 100, window.innerHeight - 300);
  };

  p.draw = () => {
    const height = window.innerHeight - 100;
    let lightColor = lightColorsArray[i];
    let darkColor = darkColorsArray[j];

    if (
      p.mouseX > -1 &&
      p.mouseX <= height &&
      p.mouseY > -1 &&
      p.mouseY < window.innerWidth - 100
    ) {
      if (p.mouseIsPressed) {
        p.stroke(lightColor);
      } else {
        p.stroke(darkColor);
      }
      p.line(p.mouseX, 0, p.mouseX, height);
      setTimeout(() => p.line(p.mouseX + 15, 0, p.mouseX + 15, height), 1000);
      setTimeout(() => p.line(p.mouseX + 30, 0, p.mouseX + 30, height), 2000);
      setTimeout(() => p.line(p.mouseX + 60, 0, p.mouseX + 60, height), 3000);
      setTimeout(() => p.line(p.mouseX + 120, 0, p.mouseX + 120, height), 4000);
      setTimeout(() => p.line(p.mouseX + 240, 0, p.mouseX + 240, height), 5000);
      setTimeout(() => p.line(p.mouseX + 480, 0, p.mouseX + 480, height), 6000);
    }
  };
};

export default thirdSketch;
