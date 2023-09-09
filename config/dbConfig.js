const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log(
      `MongoDB Connection Established ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`MongoDB server error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
