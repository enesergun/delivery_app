import { getRequest } from "../../libs/api";

export const getProducts = async (category) => {
  const response = await getRequest("/filter.php?c=" + category);
  console.log('reponse', response)
  return response.data;
};
