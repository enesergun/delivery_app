import axios from "axios";
const baseUrl = "https://www.themealdb.com/api/json/v1/1";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`, {
      headers: {
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
