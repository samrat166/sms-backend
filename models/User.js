const { Schema, model } = require("mongoose");
const {
  STUDENT_ROLE,
  GENERAL_ROLES,
  ADMIN_ROLE,
} = require("../helpers/constants");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    studentId: String,
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    username: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: STUDENT_ROLE,
      enum: [...GENERAL_ROLES, ADMIN_ROLE],
    },
  },
  { timestamps: true }
);

module.exports = model("UserModal", userSchema);
