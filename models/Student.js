const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    rollNo: String,
    class: String,
    address: String,
    phone: String,
  },
  { timestamps: true }
);

module.exports = model("StudentModel", studentSchema);
