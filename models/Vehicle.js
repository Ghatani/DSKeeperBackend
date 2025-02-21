const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  model: { type: String },
  isAvailable: { type: Boolean, default: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
