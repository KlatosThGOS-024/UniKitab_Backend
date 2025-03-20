const addPdfBook = async () => {
  try {
  } catch (error) {}
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
