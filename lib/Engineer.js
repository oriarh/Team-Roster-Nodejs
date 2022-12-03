const Employee = require('./Employee');

class Engineer {
    constructor(name, id, email, githubUsername) {
        //super(name,id,email);
        this.engineerName = name;
        this.engineerId = id;
        this.engineerEmail = email;
        this.githubUsername = githubUsername;
    }

    getGithub(){
        this.githubUsername
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;