const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    suplier: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    descripion: {
      type: String,
      require: true,
    },
    product_location: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
