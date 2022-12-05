DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) -- to hold dept name
);

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30), -- to hold role title
    salary DECIMAL, -- to hold role salary
    department_id INT -- to hold reference to dept role belongs to
);

CREATE TABLE employee (
    id INT PRIMARY KEY, 
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold last name
    role_id INT, -- to hold ref to employee rolde
    manager_id INT -- to hold reference to another employee that is manager of the current employee (null if emp has no manager)
);