-- create new empty database to be seeded with data
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- all commands affect this database 
USE employees_db;

-- see database in use
SELECT DATABASE();

-- add named tables to database
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY, -- not null: needs a value, foreign key ref this primary key to join tables
    name VARCHAR(30) -- string to hold dept name, char limit 30
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30), -- to hold role title
    salary DECIMAL (6, 2), -- to hold role salary
    department_id INT -- to hold reference to dept role belongs to
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold last name
    role_id INT, -- to hold ref to employee role
    manager_id INT -- to hold reference to another employee that is manager of the current employee (null if emp has no manager)
);