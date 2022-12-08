# employee-tracker
An app that allows you to track all employees in a database using mySQL and the inquirer npm package

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

[//]: # (demonstrating some cool markdown syntax tricks. this is a markdown comment)

This ReadMe file was generated using:
- **Markdown**, a fun and easy-to-learn language that creates appealing ReadMe documents
- **node.js**, a way to run server-side JavaScript functions
> Who doesn't ~~like~~ _love_ a good ReadMe?&nbsp;

## 💡 Table of Contents

- [Description](#description-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [Questions](#questions-id)

## <a id="description-id"></a>Description
This project was created to demonstrate the use of SQL, or *Structured Query Language*. SQL is a computer language that allows us to make requests, or *queries*, to access data inside a database. Whether it's a database with only a small amount of data or containing over a million records, SQL is used to grab the information we need, displayed in SQL *tables*. For this project, I have created a database containing information about the employees of a company (I used 'The Office' tv show characters). The database and tables were created in a schema.sql file and the data filled into those tables was created in a seeds.sql file. A third file, index.js, was created to run the inquirer prompts and accept user input on what information they would like to access inside or add to the database. The options include viewing all department, roles, and employee tables, and asks if you'd like to add information to those tables. There is also an option to update an employee's info. The index.js file was connected to our .sql files so that this information (input by the user) can be added to the database. Other technologies used in this software include: node.js, mySQL, console.table, and chalk. Node lets us run the program from the CLI, mySQL lets us run SQL statements, access and view databases from the CLI, and console.table is an npm package that makes your console.log tables look much nicer and organized and adds color with the npm package chalk.

During this project, I learned how to create databases, fill them with data, and run SQL statments/commands to access the data I need. I learned how other languages (in this case, JavaScript) can be used with SQL to make functioning software and learned more about console.table and how to use chalk to make our tables look nice. This code can be applied to future projects when I am dealing with anything SQL related. The ReadMe.md file for this project was created using our ReadMe Generator project.ß
   
## <a id="installation-id"></a>Installation
To use this application, you must download node onto your local machine. Please visit https://nodejs.org/en/ to install. You will also need VSCode: (https://code.visualstudio.com/download), npm inquirer package for prompts: (run ‘npm i inquirer@8.2.4’ in your CLI), mySQL for accessing data: (https://www.mysql.com), npm console.table package for prettier console.log tables: (run ‘npm i console.table’ in your CLI) and a copy of my code: (https://github.com/ScottsC0de/employee-tracker)
    
## <a id="usage-id"></a>Usage
With node installed, you can now run node commands on JavaScript files. To use this app, you must be in its file from the CLI or an app that allows you to run CLI commands. For this app, we used VSCode’s Integrated Terminal. If you are using VSCode, right click on the index.js file and click ‘Open In Integrated Terminal’. Run a node index.js command to begin using the Employee Tracker. Answer all prompts and watch the magic happen.

Full visual demonstration:

## <a id="questions-id"></a>Questions
You can check out my repositories here on my GitHub account: 
<a href="https://github.com/scottsc0de">scottsc0de</a>

AND

You can send an email to **Scott5902@gmail.com** with any questions!