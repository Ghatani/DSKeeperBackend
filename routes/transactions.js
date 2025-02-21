const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateTransaction } = require('../middlewares/validator');

router.use(authMiddleware);

router.post('/', validateTransaction, createTransaction);
router.get('/', getTransactions);
router.get('/:id', getTransactionById);
router.put('/:id', validateTransaction, updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
