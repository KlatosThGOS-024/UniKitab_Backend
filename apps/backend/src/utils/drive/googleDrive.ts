import fs from "fs";
import { google } from "googleapis";

const apiKeys = require("./apiKeys.json");

export class Drive {
  constructor() {}

  async authorize() {
    const authClient = new google.auth.JWT(
      apiKeys.client_email,
      undefined,
      apiKeys.private_key,
      ["https://www.googleapis.com/auth/drive.file"]
    );

    await authClient.authorize();
    return authClient;
  }

  async uploadFile(authClient: any, filePath: string, fileName: string) {
    const drive = google.drive({ version: "v3", auth: authClient });

    const fileMetadata = {
      name: `${fileName}`,
      parents: ["1KVcvPwe8gOuXcgpM4zxnSJuogeD1C6OA"], // Folder ID
    };

    const media = {
      mimeType: "application/pdf", // ✅ Correct MIME type
      body: fs.createReadStream(`${filePath}`), // ✅ Ensure the file exists
    };

    try {
      const response = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id",
      });

      console.log("✅ File Uploaded. File ID:", response.data.id);
      return response.data.id;
    } catch (error) {
      console.error("❌ Error uploading file:", error);
      throw error;
    }
  }

  async getFile(authClient: any, fileId: string, destinationPath: string) {
    const drive = google.drive({ version: "v3", auth: authClient });

    try {
      const file = await drive.files.get(
        {
          fileId: fileId,
          alt: "media",
        },
        { responseType: "stream" }
      );

      const dest = fs.createWriteStream(destinationPath);
      file.data.pipe(dest);

      return new Promise((resolve, reject) => {
        dest.on("finish", () =>
          resolve(`✅ File downloaded to ${destinationPath}`)
        );
        dest.on("error", (err) => reject(err));
      });
    } catch (error) {
      console.error("❌ Error downloading file:", error);
      throw error;
    }
  }
}
