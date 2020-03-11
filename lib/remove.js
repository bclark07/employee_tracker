var inquirer = require("inquirer");

function Remove(what) {
  switch (what) {
    case "An employee":
      function RemoveEmployee() {
        //gets information that we need to add employee info to the data tables
        inquirer.prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
            //add some type of validation in here?
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
          },
          {
            type: "input",
            name: "title",
            message: "What is the employee's title?"
          },
          {
            type: "input",
            name: "salary",
            message: "What is the employee's salary?"
          },
          {
            type: "input",
            name: "department",
            message: "What department does the employee work in?"
          },
          {
            type: "list",
            message: "Does the employee have a manager",
            name: "manager",
            choices: ["Yes", "No"]
          }
        ]);
        //   .then(function(data) {
        //     // new Add().addEmp(data);
        //   });
      }
      return "Option 1";
    //   break;
    case "A role":
      async function RemoveRole() {
        await inquirer.prompt([
          {
            type: "input",
            name: "title",
            message: "What is the position title?"
          },
          // {
          //     type: "input",
          //     name: "dept_id",
          //     message: "What department is the position in?"
          //   },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the position?"
          }
        ]);
      }
      return "Ok here";
    //   break;
    case "A department":
      function RemoveDepartment() {
        inquirer.prompt([
          {
            type: "input",
            name: "dept_name",
            message: "What is the department name?"
          }
        ]);
      }
      return "Different";
    //   break;
  }
}
module.exports = Remove;
