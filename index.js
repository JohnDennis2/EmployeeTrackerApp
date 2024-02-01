const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./utils/queries');

// Add Inquirer prompts and logic to handle user choices