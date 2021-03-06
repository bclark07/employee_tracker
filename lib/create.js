var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306, //make sure this is the port on computer where running this code
  user: "root",
  password: "Password1", //comment this out when push
  database: "employee_tracker"
});

function Add(what) {
  switch (what) {
    case "Add an employee":
      function CreateEmployee() {
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
        ]).then(function(data) {
          connection.query(
            //check if department exists
            "INSERT INTO department SET ?",
            {
              name: data.department
            },
            function(err) {
              if (err) throw err;
            }
          );
        //     // new Add().addEmp(data);
        //   });
      }
      return "Option 1";
    //   break;
    case "Add a role":
      async function CreateRole() {
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
    case "Add a department":
      function CreateDepartment() {
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
module.exports = Add;
