const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const { connectDB } = require('./config/db');
const logger = require('./config/logger');
const errorHandler = require('./middlewares/errorHandler');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();


const PORT = process.env.PORT || 5000;

// Export app for testing
module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
}
