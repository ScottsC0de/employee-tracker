INSERT INTO department (id, name)
VALUES (001, "Corporate"),
       (002, "Management"),
       (003, "Sales"),
       (004, "Accounting"),
       (005, "Customer Service"),
       (006, "Warehouse"),
       (007, "Human Resources"),
       (008, "Office Administration"),
       (009, "Quality Assurance"),
       (010, "Temp")

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "CFO", 150000, 001),
       (002, "VP of Sales", 100000, 001),
       (003, "Regional Manager", 80000, 002),
       (004, "Assistant to the Regional Manager", 60000, 002),
       (005, "Head of Accounting", 58000, 004),
       (006, "Customer Service Rep", 37000, 005),
       (007, "Accountant", 51000, 004),
       (008, "Head of Human Resources", 50000, 007),
       (009, "Warehouse Foreman & Marketing Director", 62000, 006),
       (010, "Warehouse Foreman", 30000, 006),
       (011, "Sales Rep", 55000, 003),
       (012, "Receptionist", 30000, 008),
       (013, "Office Administrator", 42000, 008),
       (014, "Quality Assurance Agent", 42000, 009),
       (015, "Temp Worker", 0, 010)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "David", "Wallace", 001, 001),
       (002, "Jan", "Levinson-Gould", 002, 001),
       (003, "Michael", "Scott", 003, 002),
       (004, "Dwight", "Schrute", 004, 003), 
       (005, "Angela", "Martin", 005, 003),
       (006, "Kelly", "Kapoor", 006, 022),
       (007, "Oscar", "Martinez", 007, 003),
       (008, "Kevin", "Malone", 007, 003),
       (009, "Toby", "Flenderson", 008, 002),
       (010, "Holly", "Flax", 008, 002),
       (011, "Darryl", "Philbin", 009, 003),
       (012, "Roy", "Anderson", 010, 011),
       (013, "Phyllis", "Lapin-Vance", 011, 003),
       (014, "Andrew", "Bernard", 011, 003),
       (015, "Karen", "Filippelli", 011, 003),
       (016, "Stanley", "Hudson", 011, 003),
       (017, "Jim", "Halpert", 011, 003),
       (018, "Pam", "Beesly", 013, 003),
       (019, "Erin", "Hannon", 012, 003),
       (020, "Meredith", "Palmer", 014, 003),
       (021, "Creed", "Bratton", 014, 003),
       (022, "Ryan", "Howard", 015, 003)

-- data taken from:
-- https://screenrant.com/the-office-character-salaries-dunder-mifflin-reddit/
-- google