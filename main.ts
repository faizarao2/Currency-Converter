#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Currency Converter\n"));
//  Define the list of the currencies and their exchange rates

let exchange_rate: any ={
    "USD": 1, 
    "EUR": 0.9, 
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
}
// Prompt the user to select currencies to convert from and to
let user_answers = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
 
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
])
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answers.from_currency];
let to_amount = exchange_rate[user_answers.to_currency];
let amount = user_answers.amount

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${converted_amount}`);
