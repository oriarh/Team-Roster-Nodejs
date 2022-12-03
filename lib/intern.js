const Employee = require('./Employee');

class Intern {
    constructor(name, id, email, school) {
        //super(name,id,email);
        this.internName = name;
        this.internId = id;
        this.internEmail = email;
        this.internSchool = school;
    }

    getSchool(){
        this.school
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;