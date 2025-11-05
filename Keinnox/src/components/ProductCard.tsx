import React from "react";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); // ✅ access cart function

  return (
    <div className="bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-[#D4AF37]/40 hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      
      <div className="p-4">
        <h3 className="text-[#D4AF37] font-semibold text-lg">{product.name}</h3>
        <p className="text-white mt-1 font-medium text-sm">
          ₦{Number(product.price).toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-[#D4AF37] text-black font-semibold py-2 rounded-lg 
          hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] 
          transition-all duration-300 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
