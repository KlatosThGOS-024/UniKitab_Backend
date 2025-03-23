import fs from "fs";
import { google } from "googleapis";

import apiKeys from "./apiKeys.json";

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

  async getFileUrl(auth: any, fileId: string): Promise<string | null> {
    try {
      const drive = google.drive({ version: "v3", auth });
      console.log("responseresponseresponseresponse", "response1");

      await drive.files.get({
        fileId: fileId,
        fields: "id, name, mimeType",
      });
      console.log("responseresponseresponseresponse", "response2");

      const response = await drive.files.get(
        {
          fileId: fileId,
          alt: "media",
        },
        {
          responseType: "stream",
        }
      );
      console.log("responseresponseresponseresponse", response);
      const webViewLink = `https://drive.google.com/file/d/${response}/view`;

      return webViewLink;
    } catch (error) {
      console.error("Error getting file URL:", error);
      return null;
    }
  }
}
