import { getRequest } from "../../libs/api";

export const getProducts = async (category) => {
  const response = await getRequest("/filter.php?c=" + category);
  return response.data;
};
