const simpanan_model = require('../model/simpanan.model');

const findAllSimpanan = async (req, res) => {
  try {
    const simpanan = await simpanan_model.find();
    if (!simpanan)
      throw res.status(404).json({ success: false, data: 'Not Found' });
    res.status(200).json({ success: true, data: simpanan });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createSimpanan = async (req, res) => {
  try {
    const simpanan = await simpanan_model.create(req.body);
    if (!simpanan)
      throw res.status(404).json({ success: false, data: 'Not Found' });
    res.status(201).json({ success: true, data: 'Create Data' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateSimpanan = async (req, res) => {
  try {
    const simpanan = await simpanan_model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { useFindAndModify: false }
    );
    if (!simpanan)
      throw res.status(404).json({ success: false, data: 'Not Found' });
    res.status(201).json({ success: true, data: 'Update Data' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteSimpanan = async (req, res) => {
  try {
    const simpanan = await simpanan_model.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });
    if (!simpanan)
      throw res.status(404).json({ success: false, data: 'Not Found' });
    res.status(201).json({ success: true, data: 'Delete Data' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteAllSimpanan = async (req, res) => {
  try {
    await simpanan_model.deleteMany({});
    res.status(201).json({ success: true, data: 'Delete All Data' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  findAllSimpanan,
  createSimpanan,
  updateSimpanan,
  deleteSimpanan,
  deleteAllSimpanan,
};
