const express = require('express');
const router = express.Router();
const {
  createDriver,
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver
} = require('../controllers/driverController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateDriver } = require('../middlewares/validator');

router.use(authMiddleware);

router.post('/', validateDriver, createDriver);
router.get('/', getDrivers);
router.get('/:id', getDriverById);
router.put('/:id', validateDriver, updateDriver);
router.delete('/:id', deleteDriver);

module.exports = router;
