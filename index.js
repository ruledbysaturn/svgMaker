const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require('./lib/shapes');

//Include packages needed for this application

//Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "What text would you like for your logo?Enter up to three characters:",
        },
        {
            type: "input",
            name: "textColor",
            message: "Choose a text color for you logo:",
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Choose a shape color for you logo:",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape for your logo:",
            choices: ["Triangle", "Square", "Circle"],
        }
    ]);

    //Create a function to write README file
    function writeToFile(fileName, data) {}

    //Create a function to initialize app