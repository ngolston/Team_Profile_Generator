const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNo) {
    super(name, id, email);

    this.officeNo = officeNo;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNo() {
    return this.officeNo;
  }
}

module.exports = Manager;
