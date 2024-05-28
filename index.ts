#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n \t!! <-------=  WelCome to Saman - TODO-LIST APPLICATION  =-------> !!\n "));

let todos = [];
let condition = true;

while (condition) {
    let operations = await inquirer.prompt(
        [
            {
                name: "operator",
                type: "list",
                message: chalk.redBright("Select an operation:  "),
                choices: ["Add Task", "Show Task", "Delete Task", "Exit"]
            }
        ]
    );

    if (operations.operator === "Add Task") {
        let add = await inquirer.prompt(
            [
                {
                    name: "addTodo",
                    type: "input",
                    message: chalk.redBright("What do you want to add in your ToDo? ")
                }
            ]
        );
        todos.push(add.addTodo);
        console.log(chalk.yellowBright('Your ToDo list is:', '\n', todos));
    } else if (operations.operator === "Show Task") {
        if (todos.length === 0) {
            console.log(chalk.redBright("No tasks to show."));
        } else {
            console.log(chalk.redBright('Your ToDo list is:', '\n', todos));
        }
    } else if (operations.operator === "Delete Task") {
        if (todos.length === 0) {
            console.log(chalk.redBright("No tasks to delete."));
        } else {
            let deleteTask = await inquirer.prompt(
                [
                    {
                        name: "deleteTodo",
                        type: "list",
                        message: chalk.redBright("Select the task to delete: "),
                        choices: todos.map(item => item)
                    }
                ]
            );
            todos = todos.filter(val => val !== deleteTask.deleteTodo);
            console.log(chalk.blueBright('Updated ToDo list is:', '\n', todos));
        }
    } else if (operations.operator === "Exit") {
        console.log(chalk.green("\t\t Thank You For Using To Do List App"));
        condition = false;
    } else {
        console.log(chalk.cyanBright("Please Select A Valid Option"));
    }
}
