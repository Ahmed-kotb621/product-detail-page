import api from "./axios";

export const fetchProducts = async () => {
  const response = await api.get(
    "/products/slug/clear-theme/Sneakers12?join=reviews"
  );
  return response.data;
};
