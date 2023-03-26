import { getRequest } from "../../libs/api";

export const getSearchResult = async (productName) => {
  const response = await getRequest("/search.php?s" + productName);
  return response.data;
};
