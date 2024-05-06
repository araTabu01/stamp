// import mongoose from "mongoose";
// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `mongodb://127.0.0.1:27017/admin`
    );
    console.log(
      `\n MondoDB connected and the connection instance is ${connectInstance}`
    );
  } catch (error) {
    console.log("Mongodb Connection failed ", error);
  }
};

// module.exports = connectDB;

export default connectDB;
