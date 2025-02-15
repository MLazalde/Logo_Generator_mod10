//pull inquire
const inquirer = require("inquirer");
//pull fs
const fs = require("fs");
//pull shapes
const shapes = require("./lib/shapes.js");
//pull generateSVG
const generateSVG = require("./lib/generateSVG.js");

// create inquire script
inquirer
  .prompt([
    //prompt: text
    {
      type: "input",
      message: "Enter 3 letters for your logo text",
      name: "text",
      validate: (input) =>
        input.length <= 3 || "Please enter up to 3 characters.",
    },
    {
      //prompt: text color
      type: "list",
      message: "Choose a color for your text",
      choices: ["Blue", "Red", "Green", "Yellow"],
      name: "textColor",
    },
    {
      //prompt: shape choices:circle, triangle, square
      type: "list",
      message: "Choose the shape of the logo",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      //prompt: shape color
      type: "list",
      message: "Choose a color for the shape",
      choices: ["Blue", "Red", "Green", "Yellow"],
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    let data = generateSVG(answers);
    fs.writeFile("logo.svg", data, (err) => {
      err ? console.log(err) : console.log(answers);
    });
  });
