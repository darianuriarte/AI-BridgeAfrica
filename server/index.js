const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path'); // Import path module
const pageRoutes = require('./routes/pageRoutes');
const settingsRoutes = require('./routes/settingsRoutes'); // Import the settings routes

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/pages', pageRoutes);
app.use('/api/settings', settingsRoutes); // Use the settings routes

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve the React frontend app for any unrecognized routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
