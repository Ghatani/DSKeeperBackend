const Material = require('../models/Material');

exports.createMaterial = async (req, res, next) => {
  try {
    const material = new Material(req.body);
    await material.save();
    res.status(201).json(material);
  } catch (error) {
    next(error);
  }
};

exports.getMaterials = async (req, res, next) => {
  try {
    const materials = await Material.find();
    res.status(200).json(materials);
  } catch (error) {
    next(error);
  }
};

exports.getMaterialById = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    next(error);
  }
};

exports.updateMaterial = async (req, res, next) => {
  try {
    const material = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    next(error);
  }
};

exports.deleteMaterial = async (req, res, next) => {
  try {
    const material = await Material.findByIdAndDelete(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json({ message: 'Material deleted successfully' });
  } catch (error) {
    next(error);
  }
};
