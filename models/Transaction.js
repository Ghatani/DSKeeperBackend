const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionID: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  vehicleNo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  customerName: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  shippingAddress: { type: String, required: true },
  materials: { type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true },
  quantity: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Paid', 'Unpaid', 'Partially Paid'], required: true },
  amount: { type: Number, required: true },
  driverName: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
