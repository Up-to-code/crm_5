"use client";

import { SaveFile } from "@/db/funcs/SaveFile";
import { UploadDropzone } from "@/utils/uploadthing";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 rounded-lg shadow">
      <UploadDropzone
        endpoint="mediaUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          res.map(async (file) => {
            const fileData = await SaveFile({
              userId: user.user?.id || "",
              fileName: file.name,
              fileSize: file.size,
              fileType: file.type,
            });
            console.log("File Data: ", fileData);
          });
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        onBeforeUploadBegin={(files) => {
          // Preprocess files before uploading (e.g. rename them)
          return files.map(
            (f) => new File([f], "renamed-" + f.name, { type: f.type })
          );
        }}
        onUploadBegin={(name) => {
          // Do something once upload begins
          console.log("Uploading: ", name);
        }}
      />
    </main>
  );
}
