import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_CONNECTION_URI
    );
    console.log(
      "Database connection Successfully established : ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Database Connection Failed", error.mongoose);
  }
};

export default connectDb;
