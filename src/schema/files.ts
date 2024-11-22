import mongoose, { Schema, Document } from "mongoose";

// Define the interface for TypeScript
export interface ISavFileData extends Document {
  userId: string;
  fileName: string;
   createdAt: Date;
  updatedAt: Date;
  fileSize: number;
  fileType: string;
  metadata?: Record<string, unknown>;
}

// Create the schema
const SavFileDataSchema: Schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fileName: { type: String, required: true },
     createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    fileSize: { type: Number, default: 0 },
    fileType: { type: String, default: "" },
    metadata: { type: Schema.Types.Mixed, default: {} }, // Allows any JSON-like object
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Export the model
const SavFileData = mongoose.model<ISavFileData>("SavFileData", SavFileDataSchema);

export default SavFileData;
