const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name,id,email);
        this.githubUsername = githubUsername;
    }

    getGithub(){
        this.githubUsername
    }

    getRole() {
        `//Overridden to return 'Engineer'`
    }
}

module.exports = Engineer;