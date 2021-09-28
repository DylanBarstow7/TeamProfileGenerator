const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(name, id, email, gitHubUsername){
        super(name, id, email)
        this.gitHubUsername = gitHubUsername
    }

    getSchool(){
        return this.gitHubUsername
    }

    getPosition() {
        return "Engineer"
    }
}

module.exports = Engineer