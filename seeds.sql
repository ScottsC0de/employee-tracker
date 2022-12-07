-- data added to schema's database

INSERT INTO department (id, name)
VALUES (001, "Corporate"),
       (002, "Management"),
       (003, "Sales"),
       (004, "Accounting"),
       (005, "Customer Service"),
       (006, "Human Resources"),
       (007, "Warehouse"),
       (008, "Office Administration"),
       (009, "Quality Assurance"),
       (010, "Temp")

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "CFO", 150000, 001),
       (002, "VP of Sales", 100000, 001),
       (003, "Regional Manager", 80000, 002),
       (004, "Assistant to the Regional Manager", 60000, 002),
       (005, "Sales Rep", 55000, 003),
       (006, "Head of Accounting", 58000, 004),
       (007, "Accountant", 51000, 004),
       (008, "Customer Service Rep", 37000, 005),
       (009, "Head of Human Resources", 50000, 007),
       (010, "Warehouse Foreman & Marketing Director", 62000, 006),
       (011, "Warehouse Foreman", 30000, 006),
       (012, "Office Administrator", 42000, 008),
       (013, "Receptionist", 30000, 008),
       (014, "Quality Assurance Agent", 42000, 009),
       (015, "Temp Worker", 0, 010)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "David", "Wallace", 001, 001),
       (002, "Jan", "Levinson-Gould", 002, 001),
       (003, "Michael", "Scott", 003, 002),
       (004, "Dwight", "Schrute", 004, 003), 
       (005, "Jim", "Halpert", 005, 003),
       (006, "Andrew", "Bernard", 005, 003),
       (007, "Karen", "Filippelli", 005, 003),
       (008, "Stanley", "Hudson", 005, 003),
       (009, "Phyllis", "Lapin-Vance", 005, 003),
       (010, "Angela", "Martin", 006, 003),
       (011, "Kevin", "Malone", 007, 010),
       (012, "Oscar", "Martinez", 007, 010),
       (013, "Kelly", "Kapoor", 008, 022),
       (014, "Toby", "Flenderson", 009, 002),
       (015, "Holly", "Flax", 009, 002),
       (016, "Darryl", "Philbin", 010, 003),
       (017, "Roy", "Anderson", 011, 016),
       (018, "Pam", "Beesly", 012, 003),
       (019, "Erin", "Hannon", 013, 003),
       (021, "Creed", "Bratton", 014, 003),
       (020, "Meredith", "Palmer", 014, 003),
       (022, "Ryan", "Howard", 015, 003)

-- data taken from:
-- https://screenrant.com/the-office-character-salaries-dunder-mifflin-reddit/
-- google