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

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));

// Swagger API Docs (accessible at /api-docs)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/auth', require('./routes/auth'));


// Centralized Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Export app for testing
module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
}
