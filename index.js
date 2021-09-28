const inquirer = require('Inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./Assets/js/employee.js')
const Manager = require('./Assets/js/manager.js');

const PORT = 8080;
let teamMembers = [];
let finished = false;

let employees = []

function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email address?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is your manager's office number?"
            },
        ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
            employees.push(manager)
            nextStep()
            
        })
};