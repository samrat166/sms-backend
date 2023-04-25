const { Schema, model } = require("mongoose");

const attendenceSchemas = new Schema(
  {
    date: String,
    absentOrPresent: [
      {
        name: String,
        studentId: String,
        class: String,
        isPresent: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("AttendenceModal", attendenceSchemas);
