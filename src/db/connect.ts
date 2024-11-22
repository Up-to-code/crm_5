import mongoose from "mongoose";

const connect = async () => {
 
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connect;
