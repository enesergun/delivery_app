import { getRequest } from "../../libs/api";

export const getCategories = async () => {
  const response = await getRequest("/categories.php");
  return response.data;
};
