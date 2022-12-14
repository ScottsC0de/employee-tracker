console.log('Employee Tracker // Company: DUNDER MIFFLIN');

const inquirer = require("inquirer");
const mysql = require('mysql2');

require('console.table'); // pretty console log tables

// const chalk = require('chalk'); // table colors

const db = mysql.createConnection(
    // this takes an object of our mysql login info and database were working with
    {
        host: 'localhost',
        user: 'root',  // mySQL username
        password: 'password',  // mySQL password (wont work if its blank)
        database: 'employees_db'
    },
);

db.connect(function (err) {
    if (err) {
        throw err
    }
    console.log(`Connected to the employee database 📖`) // optional success log

    init();
});

function init() {
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
            }])
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
                default: break;
            }
            // switch statement cleaner than if statements here
        }));
}

// mysql -u root -p
// source schema.sql
// select database(), not show databases; (different command)
// show tables;
// describe table_name;

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init();
    });
};

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        init();
    });
};

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        init();
    });
};

function addDepartment() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'add_department',
            message: 'New Department name:'
        }])
        .then((answers) => {
            // return answers
            (db.query(`INSERT INTO department (name) VALUES (${answers.add_department})`, function (err, results) {
                console.table(results);
            }))
        });
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
        .then((answers) => {
            // return answers
            (db.query(`INSERT INTO roles (title, salary, department_id) VALUES (${answers.add_role}, ${answers.add_salary}, ${answers.add_role_department})`, function (err, results) {
                console.table(results);
                console.log(`${answers.add_role} (salary: ${answers.add_salary}) added to department ${answers.add_role_department} in database`);
            }))
        });
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
        .then((answers) => {
            // return answers
            (db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${answers.add_employee_fname}, ${answers.add_employee_lname}, ${answers.add_employee_role}, ${answers.add_employee_manager})`, function (err, results) {
                console.table(results);
                console.log(`${answers.add_employee_fname} ${answers.add_employee_lname} (${answers.add_employee_role}) added to ${answers.add_employee_manager}'s department in database`);
            }))
        });
};

function updateEmployeeRole() {
    db.query('SELECT first_name, last_name FROM employees', function (err, employeeRows) {

        const employeeNames = employeeRows.map(employee => {
            return `${employee.first_name} ${employee.last_name}`
        });

        db.query('SELECT title FROM roles', function (err, roleRows) {
            const roleTitles = roleRows.map(role => {
                return `${role.title}`
            });

            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'chooose_employee',
                        message: 'Which employee would you like to update?',
                        choices: employeeNames // array of employee names grabbed by map()
                    },
                    {
                        type: 'list',
                        name: 'update_employee_role',
                        message: 'Choose new employee role:',
                        choices: roleTitles,
                    }
                ])
                .then((answers) => {
                    (db.query(`UPDATE employee INNER JOIN roles SET employee.role_id = roles.id WHERE id = ${answers.update_employee_role}`, function (err, results) {
                        console.table(results);
                        console.log(`Succesfully updated ${answers.name}'s role to ${answers.update_employee_role}`)
                    }))
                });
        })

    })
};