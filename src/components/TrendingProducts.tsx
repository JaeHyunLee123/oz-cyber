import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";

const PRODUCT_API_BASE_URL = "https://dummyjson.com/products/category";

type categories =
  | "laptops"
  | "mobile-accessories"
  | "motorcycle"
  | "smartphones"
  | "tablets"
  | "vehicle";

interface BrowseItem {
  category: categories;
  text: string;
}

const browseItems: BrowseItem[] = [
  {
    category: "smartphones",
    text: "Smart Phones",
  },
  {
    category: "tablets",
    text: "Tablets",
  },
  {
    category: "laptops",
    text: "Laptop",
  },
  {
    category: "mobile-accessories",
    text: "Mobile Accessories",
  },
  {
    category: "vehicle",
    text: "Vehicles",
  },
  {
    category: "motorcycle",
    text: "Motorcycles",
  },
];

export default function TrendingProducts() {
  const [category, setCategory] = useState<categories>("smartphones");

  const { data, isPending } = useQuery<Products>({
    queryKey: ["products", category],
    queryFn: async () => {
      const data = await axios.get(
        `${PRODUCT_API_BASE_URL}/${category}?limit=8&sortBy=rating&order=desc`
      );

      return data.data;
    },
  });
  return (
    <>
      <div className="p-5 flex items-center justify-start gap-5 flex-wrap w-full max-w-[1100px]">
        {browseItems.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setCategory(item.category);
            }}
            className={`${
              category === item.category
                ? "text-black underline underline-offset-2"
                : "text-gray-500"
            } transition-colors hover:cursor-pointer hover:text-black`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center max-w-[1200px]">
        {isPending
          ? "fetching"
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
}
