#! /usr/bin/env node
// This line is called a shebang, it tells the operating system to run it with node.js
// Import the inquirer module which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colurfull welcome message
console.log(chalk.bold.cyanBright("\n \t\ codewithhoney-word counter"));
console.log("=<>=".repeat(11));
// Prompt the user to enter a sentence
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words :"
    }
]);
// Trimming the sentence and splitting it into words based on the "spaces"
const words = answers.sentence.trim().split(" ");
// Analyze the words of user input sentence
console.log("*".repeat(65));
console.log(chalk.bold(" = Sentence Words : "));
console.log(words);
console.log(chalk.bold(`\n = Word Count : ${chalk.bold.redBright(words.length)}`));
console.log("*".repeat(65));
