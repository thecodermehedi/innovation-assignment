import { useQuery } from "@tanstack/react-query";
import { useAuthUser } from "react-auth-kit";


const useProduct = () => {
  const auth = useAuthUser();
  const {data, isLoading} = useQuery({
    enabled: !!auth(),
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      return response.json();
    },
  });

  return {products: data?.products, isLoading}
};

export default useProduct;