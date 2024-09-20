#!/usr/bin/env node

const process = require('node:process')

// Setup //

let passwordLength = 8;
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789"
let symbols = "!@#$%^&*_=+"

const userArgument = process.argv.slice(2);

// Welcome/Help Messages //

function welcomeMessage() {
    console.log(
        `Welcome to Declan's Password Generator.
        *Please note the default length of a password is 8 characters.*
        Available Commands:
        -h, -l, -n, -u, -s
        Enjoy!
        `
    );
}

if (
    arguments.includes("-h") ||
    arguments.includes("help") 
) {
    console.log(`
        help, -h ~ Display help message
        length, -l ~ Adjust length of password
        number, -n ~ Add optional numbers to password
        uppercase, -u ~ Add optional uppercase letters to password
        symbols, -s ~ Add optional symbols to password
        `
    );
} 

// Workings //

else if (arguments.includes("-l")) {
    const lengthWidth =
      arguments.indexOf("--l") !== -1
  
    const lengthArg = arguments[lengthWidth + 1];
    const parsedLength = parseInt(lengthArg, 10);
  
    if (!isNaN(parsedLength) && parsedLength > 0) {
      lengthValue = parsedLength;
    } else {
      console.log("ERROR: Invalid Length input. Default value will be used.");
      process.exit(1);
    }
  }