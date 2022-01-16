const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { generateHtml } = require("./src/generateHTML.js");

const teamArray = [];

async function teamProfile() {
  addManager = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team manager:",
        },
        {
          type: "number",
          name: "id",
          message: "What is the team manager's identification number:",
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the team manager's office number:",
        },
      ])
      .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);

        addEmployee();
      });
  };

  addEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please select a team member to add to the team profile:",
          choices: ["Engineer", "Intern", "Added to the team profile."],
        },
      ])
      .then((data) => {
        if (data.role === "Engineer") {
          addEngineer();
        } else if (data.role === "Intern") {
          addIntern();
        } else if (data.role === "Added to the team profile.") {
          const html = generateHtml(teamArray);
          console.log(html);
          const outputPath = path.join(__dirname, "dist", "output.html");
          fs.writeFileSync(outputPath, html);
        }
      });
  };

  addEngineer = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name:",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's identification number:",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address:",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github username:",
        },
      ])
      .then((engineerInput) => {
        const engineerData = new Engineer(
          engineerInput.name,
          engineerInput.id,
          engineerInput.email,
          engineerInput.github
        );
        teamArray.push(engineerData);
        addEmployee();
      });
  };

  addIntern = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name:",
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's identification number:",
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address:",
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern's school name",
        },
      ])
      .then((internInput) => {
        const internData = new Intern(
          internInput.name,
          internInput.id,
          internInput.email,
          internInput.school
        );
        teamArray.push(internData);
        addEmployee();
      });
  };

  profilePrompt = () => {
    addManager();
  };
  profilePrompt();
}

teamProfile();
