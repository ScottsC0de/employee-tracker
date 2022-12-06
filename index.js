console.log('Welcome to the Employee Tracker!');

const inquirer = require("inquirer");
const mysql = require('mysql2');

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

inquirer
    .prompt([
        {
            name: 'tracker',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update Employee Role'
            ]
        }
            .then((answers => {
                switch (answers.tracker) {
                    case 'View All Departments': viewAllDepartments();
                        break;
                    case 'View All Roles': viewAllRoles();
                        break;
                    case 'View All Employees': viewAllEmployees();
                        break;
                    case 'Add a Department': addDepartment();
                        break;
                    case 'Add a Role': addRole();
                        break;
                    case 'Add an Employee': addEmployee();
                        break;
                    case 'Update Employee Role': updateEmployeeRole();
                        break;
                    default: null;
                }
            }))
    ]);

const db = mysql.createConnection(
    // this takes an object of our mysql login info and database were working with
    {
        host: 'localhost',
        user: 'root',  // mySQL username
        password: '',  // mySQL password (wont work if its blank)
        database: 'employees'
    },
    console.log(`Connected to the employee database!`) // optional success log
);

// mysql -u root -p
// source schema.sql
// select database(), not show databases; (different command)
// show tables;



function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results); // table() JS method for a prettier table look in the console log
    });
};

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results); // table() JS method for a prettier table look in the console log
    });
};

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results); // table() JS method for a prettier table look in the console log
    });
};

function addDepartment() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'add_department',
            message: 'New Department name:'
        }])
        .then(db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        }));
};

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'add_role',
                message: 'New Role name:'
            },
            {
                type: 'input',
                name: 'add_salary',
                message: 'Role salary amount:'
            },
            {
                type: 'input',
                name: 'add_role_department',
                message: 'Role department name:'
            }
        ])
        .then(db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        }));
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'add_employee_fname',
                message: 'New Employee first name:'
            },
            {
                type: 'input',
                name: 'add_employee_lname',
                message: 'New Employee last name:'
            },
            {
                type: 'input',
                name: 'add_employee_role',
                message: 'New Employee role:'
            },
            {
                type: 'input',
                name: 'add_employee_manager',
                message: 'New Employee manager name:'
            }
        ])
        .then(db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        }));
};

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'update_employee_role',
                message: 'Choose new employee role:',
                choices: ['CFO', 'VP of Sales', 'Regional Manager', 'Assistant to the Regional Manager',
                    'Head of Accounting', 'Customer Service Rep', 'Accountant', 'Head of Human Resources', 'Warehouse Foreman & Marketing Director',
                    'Warehouse Foreman', 'Sales Rep', 'Receptionist', 'Office Administrator', 'Quality Assurance Agent', 'Temp Worker']
            }
        ])
        .then(db.query('UPDATE * FROM department', function (err, results) {
            console.table(results);
        }));
};

// // for the 404 not found page
// app.use((req, res) => {
//     res.status(404).end();
// });

// // success message
// app.listen(PORT, () => {
//     console.log(`Express servin it up at port ${PORT} 🚀`);
// });