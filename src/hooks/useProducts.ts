// custom hook to fetch products from the API using react-query
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
