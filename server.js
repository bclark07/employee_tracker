var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, //make sure this is the port on computer where running this code
    user: 'root',
    password: 'W@r85ren', //comment this out when push
    database: 'employee_tracker'
});

connection.connect(function (err) { //starts connection here
    if (err) throw err;
    CreateTeam();
    // connection.end(); //have to add async so waits to end?
});

function CreateTeam() {
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
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
        .then(function (data) {
            addEmp(data);
        });
}

//allows user to CREATE/INSERT departments, roles, employees
function addEmp(data) {
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
    function(err, res) {
        if (err) throw err;
        console.log(res);
        // connection.end();
      });

    // const manager = answer.manager;
    // if (manager = "Yes") {
     // SELECT * FROM department;
    // SELECT * FROM role;
    // SELECT * FROM employee;
}

//allows user to view (READ/SELECT) departments, roles, employees
function view(dept) { //split out to viewDept(), viewRole() and viewEmp() ?

}

//allows user to DELETE departments, roles, employees
function deleteDept() { //split out to viewDept(), viewRole() and viewEmp() ?

}

function DeptBudget(dept) {
    //adds all the salaries from employees in one dept
}
//allows user to UPDATE employee roles

//or
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     queryAllSongs();
//     queryDanceSongs();
//   });

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

function queryAllSongs() {
    connection.query("SELECT * FROM songs", function (error, results) {
        if (error) throw error;
        // console.log(results);
        for (var i = 0; i < results.length; i++)
            console.log(`${results[i].id} | ${results[i].title} | ${results[i].artist} | ${results[i].genre} `);
        // connection.end();
    });
}


function queryPopSongs() {
    // var query = 
    connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], function (error, results) {
        if (error) throw error;
        results.forEach(songs => {
            console.log(`${songs.id} | ${songs.title} | ${songs.artist} | ${songs.genre} `);
        });
    });
}

function queryAllSongs() {
    connection.query("SELECT * FROM songs", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("-----------------------------------");
    });
}

function queryDanceSongs() {
    var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
    });

    // logs the actual query being run
    console.log(query.sql);
    connection.end();
}

