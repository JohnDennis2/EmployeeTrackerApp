const inquirer = require('inquirer');
const dbFunctions = require('./utils/queries'); 

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
      // Call the function to view all departments
      break;
    case 'View all roles':
      // Call the function to view all roles
      break;
    case 'View all employees':
      // Call the function to view all employees
      break;
    // Add cases for other options
    case 'Exit':
      process.exit(0); // Exit the application
    default:
      console.log('Invalid choice. Please try again.');
      break;
  }

  // Continue prompting the user
  mainMenu();
};

// Initialize the application
const init = async () => {
  console.log('Welcome to the Employee Tracker App!');
  await mainMenu();
};

// Start the application
init();
