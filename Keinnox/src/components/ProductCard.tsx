import React from "react";
import  type{ Product } from "../data/products";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover hover:scale-105 transition-transform"
      />
      <div className="p-4">
        <h3 className="text-[#D4AF37] font-semibold text-lg">{product.name}</h3>
        <p className="text-white mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
