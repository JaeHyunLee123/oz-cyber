import { useState } from "react";
import Heart from "./icons/Heart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLike, setIsLike] = useState(false);

  const imageNum =
    product.category === "smartphones" || product.category === "vehicle"
      ? 1
      : 0;

  return (
    <div className="rounded bg-[#f6f6f6] flex flex-col justify-center items-center space-y-2 w-3xs p-2">
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            setIsLike(!isLike);
          }}
        >
          <Heart
            fill={isLike ? "red" : "none"}
            stroke={isLike ? "red" : "black"}
          />
        </button>
      </div>

      <img
        src={product.images[imageNum]}
        alt={`${product.title}-image`}
        width={220}
        className="overflow-hidden content-center"
      />
      <h2>{product.title}</h2>
      <span className="font-bold text-xl">{`$${product.price}`}</span>
      {/*TODO: add link below when detail product page complete*/}
      <button className="bg-black text-white rounded py-2 px-7 text-sm">
        Buy now
      </button>
    </div>
  );
}
