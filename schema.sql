DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- See database in use --
SELECT DATABASE();

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) -- to hold dept name
);

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30), -- to hold role title
    salary DECIMAL (6, 2), -- to hold role salary
    department_id INT -- to hold reference to dept role belongs to
);

CREATE TABLE employee (
    id INT PRIMARY KEY, 
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold last name
    role_id INT, -- to hold ref to employee role
    manager_id INT -- to hold reference to another employee that is manager of the current employee (null if emp has no manager)
);