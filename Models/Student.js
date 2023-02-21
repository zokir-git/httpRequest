const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
