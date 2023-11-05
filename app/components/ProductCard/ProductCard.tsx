import { Metadata } from "next";
import { AddToCart } from "@/app/components/AddToCart";

type ProductProps = {};

export const metadata: Metadata = {
  title: "Product Card",
  description: "Product Card",
};

const ProductCard = (props: ProductProps) => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
