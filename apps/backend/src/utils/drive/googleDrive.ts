import fs from "fs";
import { google } from "googleapis";
const apiKeys = require(
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "./apiKeys.json"
);

export class Drive {
  constructor() {}
  async authorize() {
    let authClient;

    if (process.env.NODE_ENV === "Production") {
      authClient = new google.auth.GoogleAuth({
        keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        scopes: ["https://www.googleapis.com/auth/drive.file"],
      });

      return await authClient.getClient();
    } else {
      authClient = new google.auth.JWT(
        apiKeys.client_email,
        undefined,
        apiKeys.private_key,
        ["https://www.googleapis.com/auth/drive.file"]
      );

      return authClient;
    }
  }

  async uploadFile(authClient: any, filePath: string, fileName: string) {
    const drive = google.drive({ version: "v3", auth: authClient });

    const fileMetadata = {
      name: `${fileName}`,
      parents: ["1KVcvPwe8gOuXcgpM4zxnSJuogeD1C6OA"],
    };

    const media = {
      mimeType: "application/pdf",
      body: fs.createReadStream(`${filePath}`),
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
      console.log("Getting file info for ID:", fileId);

      // First, verify the file exists and get its metadata
      const fileMetadata = await drive.files.get({
        fileId: fileId,
        fields: "id, name, mimeType, webViewLink",
      });

      // The webViewLink is already provided in the metadata
      if (fileMetadata.data.webViewLink) {
        return fileMetadata.data.webViewLink;
      }

      // If no webViewLink in metadata, construct one
      const webViewLink = `https://drive.google.com/file/d/${fileId}/view`;
      return webViewLink;
    } catch (error) {
      console.error("Error getting file URL:", error);
      return null;
    }
  }

  async getFileStream(auth: any, fileId: string) {
    try {
      const drive = google.drive({ version: "v3", auth });

      const response = await drive.files.get(
        {
          fileId: fileId,
          alt: "media",
        },
        { responseType: "stream" }
      );

      return response.data;
    } catch (error) {
      console.error("Error getting file stream:", error);
      return null;
    }
  }

  async getFile(auth: any, fileId: string) {
    try {
      const drive = google.drive({ version: "v3", auth });

      // Get the file metadata with more fields for better information
      const response = await drive.files.get({
        fileId: fileId,
        fields: "id,name,mimeType,webContentLink,webViewLink",
      });

      return response.data;
    } catch (error) {
      console.error("Error getting file metadata:", error);
      return null;
    }
  }

  // Method to generate a direct download URL for PDF viewer compatibility
  async getDirectDownloadUrl(
    auth: any,
    fileId: string
  ): Promise<string | null> {
    try {
      const drive = google.drive({ version: "v3", auth });

      // Make sure the file is publicly accessible (optional)
      // This step is only needed if your files aren't already shared
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });

      // Get the web content link
      const file = await drive.files.get({
        fileId: fileId,
        fields: "webContentLink",
      });

      if (file.data.webContentLink) {
        // Convert the webContentLink to a direct download URL
        // by removing the "export=download" parameter
        const directUrl = file.data.webContentLink.replace(
          "&export=download",
          ""
        );
        return directUrl;
      }

      return null;
    } catch (error) {
      console.error("Error generating direct download URL:", error);
      return null;
    }
  }
}
