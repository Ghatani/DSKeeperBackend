const express = require('express');
const router = express.Router();
const {
  createMaterial,
  getMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial
} = require('../controllers/materialController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateMaterial } = require('../middlewares/validator');

router.use(authMiddleware);

router.post('/', validateMaterial, createMaterial);
router.get('/', getMaterials);
router.get('/:id', getMaterialById);
router.put('/:id', validateMaterial, updateMaterial);
router.delete('/:id', deleteMaterial);

module.exports = router;
