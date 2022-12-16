-- create new empty database to be seeded with data
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- all commands affect this database 
USE employees_db;

-- add named tables to database
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

-- creating tables and their columns
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

-- using foreign keys to reference other tables
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);

SELECT employees.id, employees.first_name AS First, employees.last_name AS Last, roles.title AS Role, departments.name, roles.salary, CONCAT(CONCAT(Manager.first_name, ' '), Manager.last_name) AS Manager FROM employees JOIN roles ON role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees AS Manager ON employees.manager_id = Manager.id;