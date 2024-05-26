import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log(err);
  }
};
