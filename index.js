const inquirer = require('Inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./Assets/js/employee.js')
const Manager = require('./Assets/js/emp types/manager.js');
const Intern = require('./Assets/js/emp types/intern.js');
const Engineer = require('./Assets/js/emp types/engineer.js');

const PORT = 8080;
let teamMembers = [];
let finished = false;

createManager()

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
            choosePosition()
            
        })
};

function choosePosition() {
    inquirer
        .prompt ({
            type: 'list',
            message: "What type of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "Cancel"],
            name: 'addNext',
        })
        .then (response => {
            if (response.addNext === "Manager") {
                createManager()
            } else if (response.addNext === "Engineer") {
                createEngineer()
            } else if (response.addNext === "Intern") {
                createIntern()
            } else {
                createTeam()
            }
        
        })
};

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's your Engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What's your Engineer's Id?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's your Engineer's email?"
            },
            {
                type: "input",
                name: "engineersGitHub",
                message: "What's your Engineer's GitHub account name?"
            },
        ])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.getUsername)
            employees.push(engineer)
            choosePosition()
            
        })
    }


function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What's your intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What's your intern's Id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's your intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern attend?"
            },
        ])
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school)
            employees.push(intern)
            choosePosition()
            
    })
}
