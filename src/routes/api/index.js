const express = require('express');
const router = express.Router();
const controller_simpanan = require('../../controller/simpanan.controller');

router.get('/', controller_simpanan.findAllSimpanan);
router.post('/', controller_simpanan.createSimpanan);
router.put('/:id', controller_simpanan.updateSimpanan);
router.delete('/:id', controller_simpanan.deleteSimpanan);
router.delete('/', controller_simpanan.deleteAllSimpanan);

module.exports = router;
