interface SavFileData {
  userId: string;
  fileName: string;
  fileData: Buffer;
  createdAt: { type: Date; default: Date };
  updatedAt: { type: Date; default: Date };
  fileSize: { type: number; default: 0 };
  fileType: { type: string; default: "" };
  metadata?: Record<string, unknown>;
}

export default SavFileData;
