import mongoose from "mongoose";

const connect = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connect;
