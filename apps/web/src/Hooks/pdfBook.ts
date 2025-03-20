export const addPdfBook = async ({
  file,

  imgSrc,
  fileId,
}: {
  file: File;

  imgSrc: string;
  fileId: string;
}) => {
  try {
    const formData = new FormData();
    formData.append("PdfFile", file);
    formData.append("imgSrc", imgSrc);
    formData.append("fileId", fileId);

    const response = await fetch("http://localhost:8000/api/v1/book/pdf-add", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getPdfBook = async (search: string) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/book/pdf-get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: search }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
