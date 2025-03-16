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
const fs_1 = __importDefault(require("fs"));
const googleapis_1 = require("googleapis");
const apiKeys = require("./apiKeys.json");
class Drive {
    constructor() { }
    authorize() {
        return __awaiter(this, void 0, void 0, function* () {
            const jwtClient = new googleapis_1.google.auth.JWT({
                email: apiKeys.client_email,
                key: apiKeys.private_key,
                keyId: apiKeys.private_key_id,
                scopes: ["https://www.googleapis.com/auth/drive.file"],
            });
            yield jwtClient.authorize();
            return jwtClient;
        });
    }
    uploadFile(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const drive = googleapis_1.google.drive({ version: "v3", auth: authClient });
            const fileMetadata = {
                name: "test.txt",
                parents: ["1KVcvPwe8gOuXcgpM4zxnSJuogeD1C6OA"], // Replace with your actual Folder ID
            };
            const media = {
                mimeType: "text/plain",
                body: fs_1.default.createReadStream("test.txt"),
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const drive = new Drive();
    const authClient = yield drive.authorize();
    const fileId = "1kma8jL1DdpAyFLZZUWiT014__VIu0YK3"; // Use the actual file ID you want to download
    const destinationPath = "./downloaded_test.txt"; // Path where you want to save the downloaded file
    try {
        const result = yield drive.getFile(authClient, fileId, destinationPath);
        console.log(result);
    }
    catch (error) {
        console.error("Error downloading file:", error);
    }
}))();
