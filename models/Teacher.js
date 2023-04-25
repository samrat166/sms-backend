const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    address: String,
    phone: String,
  },
  { timestamps: true }
);

module.exports = model("TeacherModel", teacherSchema);
