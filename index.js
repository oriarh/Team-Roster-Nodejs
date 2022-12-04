//Import Dependencies
const inquirer = require('inquirer');
const jest = require ('jest');
const fs = require('fs');
const path = require('path');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const { objectExpression } = require('@babel/types');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { lookup } = require('dns');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

//Inquirer asks the user for input
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
    { //Keeps asking the user if they want to enter more team members until they say no.
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
                name: 'engineerName',
                message: "What is the name of the engineer?",
                when (answers) { 
                    return answers.whichEmployee === 'Engineer'
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the Id of the engineer?",
                when (answers) { 
                    return answers.whichEmployee === 'Engineer'
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the email of the engineer?",
                when (answers) { 
                    return answers.whichEmployee === 'Engineer'
                },
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: "What is the engineer's github?",
                    when (answers) { 
                        return answers.whichEmployee === 'Engineer'
                    },
            },
            {
                type: 'input',
                name: 'internName',
                message: "What is the name of the intern?",
                when (answers) { 
                    return answers.whichEmployee === 'Intern'
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the Id of the intern?",
                when (answers) { 
                    return answers.whichEmployee === 'Intern'
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the email of the intern?",
                when (answers) { 
                    return answers.whichEmployee === 'Intern'
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
    
    //Generates the header part of the template using users input about the manager
    let managerTemplate = fs.readFileSync('./html/managerTemplate.html','utf-8');

    //Iterates over the responses and returns an array of keys in the object which are then replaced
    Object.keys(response).forEach((key) => {
        const value = response[key];
        managerTemplate = managerTemplate.replaceAll(`{${key}}`,value)
    })
    
    fs.writeFileSync('mainindex.html',managerTemplate);

    //Loops over the addemployee array and creates html for each time the user said yes
    for (i=0;i<response.addEmployee.length;i++) {
        if(response.addEmployee[i].whichEmployee === 'Engineer') {
            const engineer = new Engineer (response.addEmployee[i].engineerName,response.addEmployee[i].engineerId,response.addEmployee[i].engineerEmail,response.addEmployee[i].githubUsername);

            let engineerTemplate = fs.readFileSync('./html/engineerTemplate.html','utf-8');

            Object.keys(engineer).forEach((key) => {
                const value = engineer[key];
                engineerTemplate = engineerTemplate.replaceAll(`{${key}}`,value);
            })
            
            fs.appendFileSync('mainindex.html',engineerTemplate)

            //console.log(engineerTemplate);


        } else {
            const intern = new Intern (response.addEmployee[i].internName,response.addEmployee[i].internId,response.addEmployee[i].internEmail,response.addEmployee[i].internSchool);

            let internTemplate = fs.readFileSync('./html/internTemplate.html','utf-8');

            Object.keys(intern).forEach((key) => {
                const value = intern[key];
                internTemplate = internTemplate.replaceAll(`{${key}}`,value);
            })
            
            fs.appendFileSync('mainindex.html',internTemplate)
            
        //console.log(internTemplate);
        }
    }

    //Adds the footer html code to the main html file
    fs.appendFileSync('mainindex.html','\n</div>\n</div>\n</body>\n</html>')
});
