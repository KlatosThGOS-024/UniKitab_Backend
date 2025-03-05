import fs from "fs";
import { google } from "googleapis";

const apiKeys = require("./apiKeys.json");

class Drive {
  constructor() {}

  async authorize() {
    const jwtClient = new google.auth.JWT({
      email: apiKeys.client_email,
      key: apiKeys.private_key,
      keyId: apiKeys.private_key_id,
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    await jwtClient.authorize();
    return jwtClient;
  }

  async uploadFile(authClient: any) {
    const drive = google.drive({ version: "v3", auth: authClient });

    const fileMetadata = {
      name: "test.txt",
      parents: ["1KVcvPwe8gOuXcgpM4zxnSJuogeD1C6OA"], // Replace with your actual Folder ID
    };

    const media = {
      mimeType: "text/plain",
      body: fs.createReadStream("test.txt"),
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });

    console.log("File ID:", response.data.id);
    return response.data.id;
  }
  async getFile(authClient: any, fileId: string, destinationPath: string) {
    const drive = google.drive({ version: "v3", auth: authClient });

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
      dest.on("finish", () => resolve(`File downloaded to ${destinationPath}`));
      dest.on("error", (err) => reject(err));
    });
  }
}

(async () => {
  const drive = new Drive();
  const authClient = await drive.authorize();
  const fileId = "1kma8jL1DdpAyFLZZUWiT014__VIu0YK3"; // Use the actual file ID you want to download
  const destinationPath = "./downloaded_test.txt"; // Path where you want to save the downloaded file

  try {
    const result = await drive.getFile(authClient, fileId, destinationPath);
    console.log(result);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
})();
