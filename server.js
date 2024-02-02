const inquirer = require('inquirer');
//const queries = require('./utils/queries'); 
const connection = require('./db/connection')
// Main menu
const mainMenu = async () => {
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      // Add other options based on your requirements
      'Exit',
    ],
  });

  switch (choice) {
    case 'View all departments':
        getAllDepartments()
      break;
    case 'View all roles':
        getAllRoles()
      break;
    case 'View all employees':
        getAllEmployees()
      break;
    
    case 'Add a department':
        createDepartment()
      break;
    case 'Add a role':
        createRole()
      break;
    case 'Add an employee':
        createEmployee()
      
      break;
    
    case 'Exit':
      process.exit(0); // Exit the application
    default:
      console.log('Invalid choice. Please try again.');
      break;
  }

  
};

function getAllDepartments(){
    connection.query("SELECT * FROM department", (err, res)=>{
        if (err) throw err
        console.table(res)
        mainMenu()
    })
}

function getAllRoles(){
    connection.query("SELECT * FROM role", (err, res)=>{
        if (err) throw err
        console.table(res)
        mainMenu()
    })
}

function getAllEmployees(){
    connection.query("SELECT * FROM employee", (err, res)=>{
        if (err) throw err
        console.table(res)
        mainMenu()
    })
}

function createEmployee(){
  connection.query("SELECT * FROM role", (err, res)=>{// query department table to get existing depts as a response

    if (err) throw err

    inquirer.prompt([
       
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the new employee?"
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the last name of the new employee?"
        },
        {
          type: "list",
          name: "role",
          message: "What is employee's the new role?",
          choices: res.map(role => role.title) // maps through roles and returns titles [{name: "engineering"}, {name: "accounting"}]
        },
        {
          type: "list",
          name: "manager_id",
          message: "What is employee manager id?",
          choices: [1, 2, 3] // maps through roles and returns titles [{name: "engineering"}, {name: "accounting"}]
        },
        // other questions
    ]).then(data =>{

      let selectedRole = res.find(role => role.title === data.role) // Recreates original response based off of choice[{id: 1, name: "engineering"}, {id: 2, name: "accounting"}]

        connection.query("INSERT INTO employee SET ?", {
         first_name : data.first_name,
         last_name : data.last_name,
         role_id : selectedRole.id,
         manager_id : data.manager_id
        })
        console.log("Employee added")
        mainMenu()
      })
    })
}
function createDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name: "newDept",
            message: "What is the name of the new department?"
        }
    ]).then(data =>{
        connection.query("INSERT INTO department SET ?", {
           name: data.newDept
        })
        console.log("department added")
        mainMenu()
    })
}

function createRole(){
  connection.query("SELECT * FROM department", (err, res)=>{// query department table to get existing depts as a response

    if (err) throw err

    inquirer.prompt([
        //create questions for title, salary, department_id
        {
            type: "input",
            name: "title",
            message: "What is the name of the new role title?"
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary for the new role?"
        },
        {
          type: "list",
          name: "department",
          message: "What is the department for the new role?",
          choices: res.map(department => department.name) // maps through departments and returns names [{name: "engineering"}, {name: "accounting"}]
        }
        // other questions
    ]).then(data =>{

      let selectedDept = res.find(department => department.name === data.department) // Recreates original response based off of choice[{id: 1, name: "engineering"}, {id: 2, name: "accounting"}]

        connection.query("INSERT INTO role SET ?", {
           title: data.title,
           salary: data.salary,
          department_id: selectedDept.id
        })
        console.log("role added")
        mainMenu()
      })
    })
}

// Initialize the application
const init = async () => {
  console.log('Welcome to the Employee Tracker App!');
  await mainMenu();
};

// Start the application
init();
