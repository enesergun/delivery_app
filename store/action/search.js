import { getRequest } from "../../libs/api";

export const getSearchResult = async (productName) => {
  const response = await getRequest("/search.php?s" + productName);
  console.log('reponse', response)
  return response.data;
};
