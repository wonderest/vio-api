const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    tanggal: {
      type: String,
    },
    anggota: {
      type: String,
    },
    s_pokok: {
      type: String,
    },
    s_wajib: {
      type: String,
    },
    s_sukarela: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Product', Product);
