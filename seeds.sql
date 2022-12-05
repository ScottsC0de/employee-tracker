INSERT INTO department (id, name)
VALUES (001, "Corporate"),
       (002, "Management"),
       (003, "Sales"),
       (004, "Accounting"),
       (005, "Customer Service"),
       (006, "Warehouse"),
       (007, "Human Resources"),
       (008, "Office Administration")

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "CFO", 200000, 001),
       (002, "VP of Sales", 150000, 001),
       (003, "Regional Manager", 80000, 002),
       (004, "Assistant to the Regional Manager", 60000, 002),
       (005, "Head of Accounting", 58000, 004),
       (006, "Customer Service Rep", 37000, 005),
       (007, "Accountant", 51000, 004)
       (008, "Head of Human Resources", 50000, 007),
       (009, "Warehouse Foreman & Marketing Director", 62000, 006)
       (010, "Warehouse Foreman", 80000, 006),
       (011, "Sales Rep", 55000, 003),
       (012, "Receptionist", 30000, 008),
       (013, "Office Administrator", 42000, 008)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Algebra I"),
       (002, "Pre-Calculus"),
       (003, "Algebra I"),
       (004, "Pre-Calculus"),
       (005, "Algebra I");

-- data taken from:
-- https://screenrant.com/the-office-character-salaries-dunder-mifflin-reddit/