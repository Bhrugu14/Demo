const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeesModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    number: String,
    age: String,
    gender: String,
    technology: Array,
    experience: Boolean,
    years: String,
    skills: Array,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    versionKey: false,
  }
);
module.exports = mongoose.model("emplyees", employeesModel);
