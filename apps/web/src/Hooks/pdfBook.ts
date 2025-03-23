export const addPdfBook = async ({
  file,
  imgSrc,
}: {
  file: File;
  imgSrc: string;
}) => {
  try {
    const formData = new FormData();
    formData.append("PdfFile", file);
    formData.append("imgSrc", imgSrc);

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

export const fetchPdfUrl = async (fileId: string) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/book/url-get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch PDF URL");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching PDF URL:", error);
    throw error;
  }
};
