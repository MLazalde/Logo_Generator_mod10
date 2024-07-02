const generateSVG = function (answers) {
  let shapeContent = "";
  if (`${answers.shape}` === "Circle") {
    shapeContent = `<circle cx="100" cy="100" r="50" fill="${answers.shapeColor}" />`;
  } else if (`${answers.shape}` === "Triangle") {
    shapeContent = `<polygon points="100,20 40,180 160,180" fill="${answers.shapeColor}" />`;
  } else if (`${answers.shape}` === "Square") {
    shapeContent = `<rect x="50" y="50" width="100" height="100" fill="${answers.shapeColor}" />`;
  }

  return `
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeContent}
    <text x="100" y="100" font-size="20" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>
  `;
};

module.exports = generateSVG;
