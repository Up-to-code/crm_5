import connect from "@/db/connect";

const { SaveFile } = await import("@/db/funcs/SaveFile");

export const POST = async (req: Request) => {
  // Check if the request method is POST
  await connect();
  try {
    // Parse the request JSON body
    const { userId, fileName, fileSize, fileType, metadata } = await req.json();

    // Save the file data using SaveFile function
    const savedFileData = await SaveFile({
      userId,
      fileName,
      fileSize,
      fileType,
      metadata,
    });

    // Log the saved data
    console.log("Saved file data:", savedFileData);

    // Return a success response with the saved file data (you can customize this as needed)
    return new Response(
      JSON.stringify({ message: "Saved file data", data: savedFileData }),
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error saving file data:", error);
    return new Response("Failed to save file data", { status: 500 });
  }
};
