var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, //make sure this is the port on computer where running this code
    user: 'root',
    password: '', //comment this out when push
    database: 'employee_tracker'
});


connection.connect(function (err) { //starts connection here
    if (err) throw err;
    // CreateEmployee();
    // connection.end(); //have to add async so waits to end?
});

class Add {

    // constructor(data) {
    //     this.data = data;
    //     // this.department = data.department;
    //     // this.title = data.title;
    //     // this.salary = data.salary;
    //     // this.first_name = data.first_name;
    //     // this.last_name = data.last_name;
    //     // this.manager = data.manager;
    // }

    //allows user to CREATE/INSERT departments, roles, employees
    addEmp(data) {
    console.log("start addEmp");
        connection.query( //check if department exists
            "INSERT INTO department SET ?",
            {
                name: data.department
            },
            function (err) {
                if (err) throw err;
            }
        );
        connection.query( //check if role exists
            "INSERT INTO role SET ?",
            {
                title: data.title,
                salary: data.salary,
                department_id: 1 //data.department //need to update with key id instead of name
            },
            function (err) {
                if (err) throw err;
            }
        );
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: data.first_name,
                last_name: data.last_name,
                role_id: 2, //need to update with key id instead of name
                //if statement for manager here?
                manager_id: 1 //need to update with key id instead of name
            },
            function (err) {
                if (err) throw err;
            }
        );
        connection.query("SELECT * FROM department",
            function (err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
            });

        // const manager = answer.manager;
        // if (manager = "Yes") {
        // SELECT * FROM department;
        // SELECT * FROM role;
        // SELECT * FROM employee;
    }

}

module.exports = Add;