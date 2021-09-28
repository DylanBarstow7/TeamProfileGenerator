const inquirer = require('inquirer')
const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, id, email, managersOffice){
        super(name, id, email)
        this.managersOffice = managersOffice
    }

    managersOfficeNumber(){
        return this.managersOffice
    }

    getPosition() {
        return "Manager"
    }
}

module.exports = Manager