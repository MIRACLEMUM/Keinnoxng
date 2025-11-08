import React from "react";
import { products } from "../data/products";
import type { Product } from "../data/products"; // ✅ type-only import
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();

  // Pick first 4 products as featured (you can customize)
  const featured: Product[] = products.slice(0, 4);

  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
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

              <Link
                to={`/product/${product.id}`}
                className="mt-2 block text-sm text-[#D4AF37] hover:text-white text-center"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
