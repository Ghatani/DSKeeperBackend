const express = require('express');
const router = express.Router();
const {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle
} = require('../controllers/vehicleController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateVehicle } = require('../middlewares/validator');

router.use(authMiddleware);

router.post('/', validateVehicle, createVehicle);
router.get('/', getVehicles);
router.get('/:id', getVehicleById);
router.put('/:id', validateVehicle, updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;
