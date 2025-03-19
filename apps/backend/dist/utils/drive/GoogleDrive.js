"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drive = void 0;
const fs_1 = __importDefault(require("fs"));
const googleapis_1 = require("googleapis");
const apiKeys_json_1 = __importDefault(require("./apiKeys.json"));
class Drive {
    constructor() { }
    authorize() {
        return __awaiter(this, void 0, void 0, function* () {
            const authClient = new googleapis_1.google.auth.JWT(apiKeys_json_1.default.client_email, undefined, apiKeys_json_1.default.private_key, ["https://www.googleapis.com/auth/drive.file"]);
            yield authClient.authorize();
            return authClient;
        });
    }
    uploadFile(authClient, bookName, filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const drive = googleapis_1.google.drive({ version: "v3", auth: authClient });
            const fileMetadata = {
                name: `${bookName}.pdf`,
                parents: ["1KVcvPwe8gOuXcgpM4zxnSJuogeD1C6OA"],
            };
            const media = {
                mimeType: "application/pdf",
                body: fs_1.default.createReadStream(filePath),
            };
            const response = yield drive.files.create({
                requestBody: fileMetadata,
                media: media,
                fields: "id",
            });
            console.log("File ID:", response.data.id);
            return response.data.id;
        });
    }
    getFile(authClient, fileId, destinationPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const drive = googleapis_1.google.drive({ version: "v3", auth: authClient });
            const file = yield drive.files.get({
                fileId: fileId,
                alt: "media",
            }, { responseType: "stream" });
            const dest = fs_1.default.createWriteStream(destinationPath);
            file.data.pipe(dest);
            return new Promise((resolve, reject) => {
                dest.on("finish", () => resolve(`File downloaded to ${destinationPath}`));
                dest.on("error", (err) => reject(err));
            });
        });
    }
}
exports.Drive = Drive;
// (async () => {
//   const drive = new Drive();
//   const authClient = await drive.authorize();
//   const fileId = "1kma8jL1DdpAyFLZZUWiT014__VIu0YK3"; // Use the actual file ID you want to download
//   const destinationPath = "./downloaded_test.txt"; // Path where you want to save the downloaded file
//   try {
//     const result = await drive.getFile(authClient, fileId, destinationPath);
//     console.log(result);
//   } catch (error) {
//     console.error("Error downloading file:", error);
//   }
// })();
