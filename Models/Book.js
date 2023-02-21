const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      default: null,
    },
    genre: {
      type: String,
      default: "",
    },
    numOfPages: {
      type: Number,
      default: null,
    },
    isBestseller: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
