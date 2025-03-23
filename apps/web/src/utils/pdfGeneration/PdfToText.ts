import { getDocument } from "pdfjs-dist";
import { TextItem } from "pdfjs-dist/types/src/display/api";

class PdfToText {
  pages: number = 0;
  text: string | undefined;
  pdfPath: string | URL;
  pdf: any;
  constructor(pdfPath: string) {
    this.pdfPath = pdfPath;
    this.pdf = getDocument(this.pdfPath).promise;
  }

  async getPdfPages() {
    try {
      const response = await this.pdf;
      this.pages = response.numPages;

      return this.pages;
    } catch (error) {
      console.error("Error loading PDF:", error);
      throw new Error("Failed to load PDF");
    }
  }

  async getTextualData(start: number, end: number) {
    try {
      const pdf = await this.pdf;

      let textContent = "";
      for (let i = +start; i <= +end; i++) {
        let textPage = await pdf.getPage(i);

        let text = await textPage.getTextContent();
        textContent = text.items
          .map((item: TextItem) => {
            return item.str;
          })
          .join(" ");
        textContent += "\n\n\n";
        this.text += textContent;
      }

      return this.text;
    } catch (error) {
      console.error("Error loading PDF:", error);
      throw new Error("Failed to load PDF");
    }
  }

  async generateThumbnail(
    pageNumber: number = 1,
    scale: number = 1.5
  ): Promise<string> {
    try {
      const pdf = await this.pdf;
      const page = await pdf.getPage(pageNumber);

      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Unable to create canvas context");
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.8);

      return thumbnailUrl;
    } catch (error) {
      console.error("Error generating thumbnail:", error);
      throw new Error("Failed to generate thumbnail from PDF");
    }
  }
}

export default PdfToText;
