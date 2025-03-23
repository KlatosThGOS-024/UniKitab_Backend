export const getAIresponse = async (message: string) => {
  try {
    const url = `http://localhost:8000/api/v1/ai/get-answer`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        getQuestion: message,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
