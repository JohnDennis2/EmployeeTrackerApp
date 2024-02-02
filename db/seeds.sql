USE employee_tracker;

INSERT INTO department(name)
VALUES ("engineering"), ("accounting"),("hr"),("coordinator");

INSERT INTO role(title, salary, department_id) 

VALUES ("engineer", 80000, 1), ("accountant", 80000, 2), ("hr", 50000, 3), ("coordinator", 50000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)

VALUES ("John", "Dennis", 1, null), ("Tim", "Robinson", 2, 1), ("Rod", "Johnson", 3, 1), ("Scottie", "Pippen", 4, 1);



















-- const Department = require('../models/Department');
-- const Role = require('../models/Role');
-- const Employee = require('../models/Employee');

-- const seedDatabase = async () => {
--   // Seed Departments
--   const departments = await Department.bulkCreate([
--     { name: 'Sales' },
--     { name: 'Marketing' },
--     { name: 'Engineering' },
--   ]);

--   // Seed Roles
--   const roles = await Role.bulkCreate([
--     { title: 'Manager', salary: 80000, department_id: departments[0].id },
--     { title: 'Sales Associate', salary: 50000, department_id: departments[0].id },
--     { title: 'Marketing Coordinator', salary: 60000, department_id: departments[1].id },
--     { title: 'Software Engineer', salary: 90000, department_id: departments[2].id },
--   ]);

--   // Seed Employees
--   await Employee.bulkCreate([
--     { first_name: 'John', last_name: 'Doe', role_id: roles[0].id },
--     { first_name: 'Jane', last_name: 'Smith', role_id: roles[1].id },
--     { first_name: 'Mike', last_name: 'Johnson', role_id: roles[2].id, manager_id: 1 },
--     { first_name: 'Sarah', last_name: 'Brown', role_id: roles[3].id, manager_id: 3 },
--   ]);

--   console.log('Seeding complete!');
-- };

-- seedDatabase();
