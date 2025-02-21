const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  type: { type: String, required: true },
  stock: { type: Number, required: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
