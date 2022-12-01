const inquirer = require('inquirer');
const jest = require ('jest');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const { objectExpression } = require('@babel/types');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { lookup } = require('dns');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');


inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the name of the team manager?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "What is the manager's contact number?"
    },
    {
        type: 'loop',
        name: 'addEmployee',
        message: "Would you like to add another team member?",
        questions: [
            {
                type: 'list',
                name: 'whichEmployee',
                message: "Who would you like to add?",
                choices: ['Engineer','Intern'],
            },
            {
                type: 'input',
                name: 'employeeName',
                message: "What is the name of the team member?",
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is the Id of the team member?",
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: "What is the email of the team member?",
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's github?",
                    when (answers) { 
                        return answers.whichEmployee === 'Engineer'
                    },
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Which school did the intern go to?",
                    when (answers) { 
                        return answers.whichEmployee === 'Intern'
                    },
            }
        ]
    },
])
.then((response) => {
    console.log(response);
    fs.writeFile('justwritefileindex.html',JSON.stringify(response), (error) => {
        if (error) {console.log(error)};
    });
})


//-----------------------------------------------------------------------------------------------
/*
const indexTemplate = fs.readFileSync('./html/indexTemplate.html','utf-8');

Object.keys(response).forEach((key) => {
    const value = response[key];
    contents = indexTemplate.replaceAll(`{${key}}`,value)
})

let finalHtml = fs.writeFileSync('./html/index.html',contents)


console.log(Object.keys(response));
*/
//-----------------------------------------------------------------------------------------------