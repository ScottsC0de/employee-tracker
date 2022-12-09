console.log('Employee Tracker // Company: DUNDER MIFFLIN');

const inquirer = require("inquirer");
const mysql = require('mysql2');

const consoleTable = require('console.table'); // pretty console log tables
const chalk = require('chalk'); // table colors

// storing SQL statements in variables so functions look cleaner
const viewAllDepartmentsQuery = 'SELECT * FROM department';
const viewAllRolesQuery = 'SELECT * FROM roles';
const viewAllEmployeesQuery = 'SELECT * FROM employees';
const addDepartmentQuery = `INSERT INTO department (name) VALUES ${answer.add_department}`;
const addRoleQuery = `INSERT INTO roles (title, salary, department_id) VALUES ${answers.add_role}, ${answers.add_salary}, ${answers.add_role_department}`;
const addEmployeeQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ${answers.add_employee_fname}, ${answers.add_employee_lname}, ${answers.add_employee_role}, ${answers.add_employee_manager}`;
const updateEmployeeRoleQuery = `UPDATE employee INNER JOIN roles SET employee.role_id = roles.id WHERE id = ${answers.update_employee_role}`;

// array of employees for employee update function
const getEmployees = `SELECT first_name, last_name FROM employees`;

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
                    default: break;
                }
                // switch statement cleaner than if statements here
            }))
    ]);

const db = mysql.createConnection(
    // this takes an object of our mysql login info and database were working with
    {
        host: 'localhost',
        user: 'root',  // mySQL username
        password: 'password',  // mySQL password (wont work if its blank)
        database: 'employees'
    },
    console.log(`Connected to the employee database 📖`) // optional success log
);

// mysql -u root -p
// source schema.sql
// select database(), not show databases; (different command)
// show tables;
// describe table_name;

function viewAllDepartments() {
    db.query(viewAllDepartmentsQuery, function (err, results) {
        consoleTable(results); // table() JS method for a prettier table look in the console log
    });
};

function viewAllRoles() {
    db.query(viewAllRolesQuery, function (err, results) {
        consoleTable(results);
    });
};

function viewAllEmployees() {
    // add more to sql statement
    db.query(viewAllEmployeesQuery, function (err, results) {
        consoleTable(results);
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
            (db.query(addDepartmentQuery, function (err, results) {
                consoleTable(results);
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
            (db.query(addRoleQuery, function (err, results) {
                consoleTable(results);
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
            (db.query(addEmployeeQuery, function (err, results) {
                consoleTable(results);
                console.log(`${answers.add_employee_fname} ${answers.add_employee_lname} (${answers.add_employee_role}) added to ${answers.add_employee_manager}'s department in database`);
            }))
        });
};

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooose_employee',
                message: 'Which employee would you like to update?',
                choices: [getEmployees] // array of employee names grabbed by sql select statement
            },
            {
                type: 'list',
                name: 'update_employee_role',
                message: 'Choose new employee role:',
                choices: ['CFO', 'VP of Sales', 'Regional Manager', 'Assistant to the Regional Manager',
                    'Head of Accounting', 'Customer Service Rep', 'Accountant', 'Head of Human Resources', 'Warehouse Foreman & Marketing Director',
                    'Warehouse Foreman', 'Sales Rep', 'Receptionist', 'Office Administrator', 'Quality Assurance Agent', 'Temp Worker']
            }
        ])
        .then((answers) => {
            // return answers
            (db.query(updateEmployeeRoleQuery, function (err, results) {
                consoleTable(results);
                console.log(`Succesfully updated ${answers.name}'s role to ${answers.update_employee_role}`)
            }))
        });
};

app.use((req, res) => {
    res.status(404).end(); // 404 not found page
});

app.listen(PORT, () => {
    console.log(`Express servin it up at port ${PORT} 🚀`); // success message
});