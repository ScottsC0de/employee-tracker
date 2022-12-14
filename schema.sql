-- create new empty database to be seeded with data
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- all commands affect this database 
USE employees_db;

-- add named tables to database
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);