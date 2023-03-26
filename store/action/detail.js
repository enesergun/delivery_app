import { getRequest } from "../../libs/api";

export const getDetails = async (id) => {
  const response = await getRequest("/lookup.php?i=" + id);
  return response.data;
};
