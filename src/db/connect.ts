const mongoose = await import("mongoose");

const connect = async () => {
  // Check if the connection is not established
  if (mongoose.connection.readyState === 0) {
    // Establish the connection if it's not already connected
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log("MongoDB connected successfully.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  } else if (mongoose.connection.readyState === 1) {
    // Already connected, no need to reconnect
    console.log("MongoDB is already connected.");
  }
};

export default connect;
