const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require('./lib/shapes');

//Include packages needed for this application

//Create an array of questions for user input
const getUserInput = async () => {
    try {
        // Use await to get user answers
        const answers = await inquirer.prompt([
          {
            type: "input",
            name: "text",
            message: "What text would you like for your logo? Enter up to three characters:",
          },
          {
            type: "input",
            name: "textColor",
            message: "Choose a text color for your logo:",
          },
          {
            type: "input",
            name: "shapeColor",
            message: "Choose a shape color for your logo:",
          },
          {
            type: "list",
            name: "shape",
            message: "Choose a shape for your logo:",
            choices: ["Triangle", "Square", "Circle"],
          }
        ]);

        const svgContent = generateSVG(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        writeToFile('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error(err);
    }
};
        
// Create a function to write SVG file
const writeToFile = (fileName, svgContent) => {
    const fullFileName = `${__dirname}/${fileName}`;
    fs.writeFileSync(fullFileName, svgContent);
  };
//Create a function to initialize app
getUserInput();