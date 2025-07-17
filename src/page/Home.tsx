import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { data, isPending } = useQuery<Products>({
    queryKey: ["products", "smartphones"],
    queryFn: async () => {
      const data = await axios.get(
        "https://dummyjson.com/products/category/smartphones?limit=8"
      );

      console.log(data);
      return data.data;
    },
  });

  return (
    <div>
      Home
      <div>
        {isPending
          ? "fetching"
          : data?.products.map((product) => <span>{product.title}</span>)}
      </div>
    </div>
  );
}
