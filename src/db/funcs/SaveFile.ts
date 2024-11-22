import SavFileData, { ISavFileData } from "@/schema/files";
import connect from "@/db/connect";
export const SaveFile = async (ctx: {
  userId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  metadata?: Record<string, unknown>;
}): Promise<ISavFileData> => {
  await connect();
  try {
    const fileData = new SavFileData({
      userId: ctx.userId,
      fileName: ctx.fileName,
      fileSize: ctx.fileSize,
      fileType: ctx.fileType,
      metadata: ctx.metadata,
    });

    const savedFileData = await fileData.save();
    console.log("Saved file data:", savedFileData);
    return savedFileData;
  } catch (error) {
    console.error("Error saving file data:", error);
    throw new Error("Failed to save file data");
  }
};
