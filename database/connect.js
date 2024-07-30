import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.connect(url).then(console.log("MongoDB connection successful"));
};

export default connectDB;
