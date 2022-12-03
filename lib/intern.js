const Employee = require('./Employee');

class Intern extends Employee  {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.internName = name;
        this.internId = id;
        this.internEmail = email;
        this.internSchool = school;
    }

    getSchool(){
        return this.internSchool;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;