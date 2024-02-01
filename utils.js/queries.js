const Department = require('../models/Department');
const Role = require('../models/Role');
const Employee = require('../models/Employee');

// Add functions for CRUD operations using Sequelize models

const Department = require('../models/Department');
const Role = require('../models/Role');
const Employee = require('../models/Employee');

// Department CRUD operations

async function getAllDepartments() {
  try {
    const departments = await Department.findAll();
    return departments;
  } catch (error) {
    throw error;
  }
}

async function createDepartment(departmentData) {
  try {
    const newDepartment = await Department.create(departmentData);
    return newDepartment;
  } catch (error) {
    throw error;
  }
}

// Repeat similar functions for updating and deleting departments

// Role CRUD operations

async function getAllRoles() {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw error;
  }
}

async function createRole(roleData) {
  try {
    const newRole = await Role.create(roleData);
    return newRole;
  } catch (error) {
    throw error;
  }
}

// Repeat similar functions for updating and deleting roles

// Employee CRUD operations

async function getAllEmployees() {
  try {
    const employees = await Employee.findAll();
    return employees;
  } catch (error) {
    throw error;
  }
}

async function createEmployee(employeeData) {
  try {
    const newEmployee = await Employee.create(employeeData);
    return newEmployee;
  } catch (error) {
    throw error;
  }
}

// Repeat similar functions for updating and deleting employees

module.exports = {
  getAllDepartments,
  createDepartment,
  getAllRoles,
  createRole,
  getAllEmployees,
  createEmployee,
};