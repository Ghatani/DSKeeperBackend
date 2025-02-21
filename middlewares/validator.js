const { check, validationResult } = require('express-validator');

exports.validateRegister = [
  check('username').notEmpty().withMessage('Username is required'),
  check('phoneNo').notEmpty().withMessage('Phone number is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateLogin = [
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateTransaction = [
  check('transactionID').notEmpty().withMessage('Transaction ID is required'),
  check('date').isISO8601().withMessage('A valid date is required'),
  // Additional field validations can be added here
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateCustomer = [
  check('name').notEmpty().withMessage('Name is required'),
  // Add further validations as needed
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateMaterial = [
  check('type').notEmpty().withMessage('Material type is required'),
  check('stock').isNumeric().withMessage('Stock must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateVehicle = [
  check('registrationNumber').notEmpty().withMessage('Registration number is required'),
  // Further validations can be added
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateDriver = [
  check('name').notEmpty().withMessage('Driver name is required'),
  // Additional validations as needed
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
