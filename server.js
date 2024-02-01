const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const departmentRoutes = require('./routes/departmentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Use routes
app.use('/api/departments', departmentRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/employees', employeeRoutes);

// Default route for handling 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the database.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});