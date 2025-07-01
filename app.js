const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('WMS API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});
