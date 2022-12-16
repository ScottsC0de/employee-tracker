// mysql -u root -p
// source schema.sql;
// source seeds.sql;

console.log('\nEmployee Tracker // Company: DUNDER MIFFLIN\n');

const inquirer = require("inquirer");
const mysql = require('mysql2');

require('console.table'); // console log tables

const chalk = require('chalk'); // table colors

const db = mysql.createConnection(
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
    console.log(`Connected to the employee database 📖\n`) // optional success log

    // inquirer prompt call
    initialPrompt();
});

function initialPrompt() {
    inquirer
        .prompt([
            {
                name: 'menu',
                type: 'list',
                message: 'What would you like to do?\n',
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
            switch (answers.menu) {
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
        }));
};

function nextMove() {
    inquirer
        .prompt([
            {
                name: 'next_move',
                type: 'list',
                message: 'What is your next move?',
                choices: ['Return To Menu', 'Exit Employee Tracker']
            }])
        .then((answers => {
            switch (answers.next_move) {
                case 'Return To Menu': initialPrompt();
                    break;
                case 'Exit Employee Tracker': db.end();
                    console.log('\nThanks for stopping by!\n')
                    break;
                default: break;
            }
        }));
};

function viewAllDepartments() {
    db.query('SELECT * FROM departments;', function (err, results) {
        console.table(results);
        nextMove();
    });
};

function viewAllRoles() {
    db.query('SELECT * FROM roles;', function (err, results) {
        console.table(results);
        nextMove();
    });
};

function viewAllEmployees() {
    db.query('SELECT * FROM employees;', function (err, results) {
        console.table(results);
        nextMove();
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
            (db.query(`INSERT INTO departments (name) VALUES ("${answers.add_department}");`, function (err, results) {
                console.table(results);
                nextMove();
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
            (db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answers.add_role}", ${answers.add_salary}, ${answers.add_role_department});`, function (err, results) {
                console.table(results);
                console.log(`${answers.add_role} (salary: ${answers.add_salary}) added to department ${answers.add_role_department} in database`);
                nextMove();
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
            (db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${answers.add_employee_fname}", "${answers.add_employee_lname}", ${answers.add_employee_role}, ${answers.add_employee_manager});`, function (err, results) {
                console.table(results);
                console.log(`${answers.add_employee_fname} ${answers.add_employee_lname} (${answers.add_employee_role}) added to ${answers.add_employee_manager}'s department in database`);
                nextMove();
            }))
        });
};

function updateEmployeeRole() {
    db.query('SELECT first_name, last_name FROM employees;', function (err, employeeRows) {

        // array of employee names for prompt
        const employeeNames = employeeRows.map(employee => {
            return `${employee.first_name} ${employee.last_name}`
        });

        // array of roles for prompt
        db.query('SELECT title FROM roles', function (err, roleRows) {
            const roleTitles = roleRows.map(role => {
                return `${role.title}`
            });

            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'choose_employee',
                        message: 'Which employee would you like to update?',
                        choices: employeeNames
                    },
                    {
                        type: 'list',
                        name: 'update_employee_role',
                        message: 'Choose new employee role:',
                        choices: roleTitles,
                    }
                ])
                .then((answers) => {
                    (db.query(`UPDATE employees INNER JOIN roles SET employee.role_id = roles.id WHERE id = ${answers.update_employee_role}`, function (err, results) {
                        console.table(results);
                        console.log(`Succesfully updated ${answers.choose_employee}'s role to ${answers.update_employee_role}`)
                        nextMove();
                    }))
                });
        })

    })
};