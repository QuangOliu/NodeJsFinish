const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
    console.log("cn sussecfuly");
  } catch (error) {
    console.log("cn falure");
  }
}

module.exports = { connect };
