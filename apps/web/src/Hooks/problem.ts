export const getQuestions = async (problemId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/problems?problemId=${problemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
};
