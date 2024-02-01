const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
});

const seedData = [
  // Your predefined data here
  // Example:
  { name: 'Department A' },
  { name: 'Department B' },
  // ...
];

// Function to seed the database
function seedDatabase() {
  const insertQuery = 'INSERT INTO department (name) VALUES ?';

  connection.query(insertQuery, [seedData.map((item) => [item.name])], (err, results) => {
    if (err) throw err;
    console.log('Seeding completed.');
    connection.end();
  });
}

// Connect to the database and call the seeding function
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');
  seedDatabase();
});