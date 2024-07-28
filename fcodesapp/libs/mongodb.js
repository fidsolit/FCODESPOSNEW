import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected: this is the mongodb_uri:", process.env.MONGODB_URI);
  } catch (error) {
    console.log("cannot connect to mongodb cause =>: ", error);
  }
};

export default connectMongoDB;
