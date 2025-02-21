const express = require('express');
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateCustomer } = require('../middlewares/validator');

router.use(authMiddleware);

router.post('/', validateCustomer, createCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomerById);
router.put('/:id', validateCustomer, updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
