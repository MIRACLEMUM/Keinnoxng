import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", "Wine", "Champagne", "Gin", "Rum", "Non-Alcoholic"];

const Shop = () => {
  const { category } = useParams<{ category: string }>();
  const selectedCategory = category || "All";

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleAddToCart = (product: typeof products[0]) => {
    console.log("Add to cart:", product);
  };

  return (
    <section
      className="relative w-full px-6 py-12 pt-32 bg-cover bg-center animate-slowZoom"
      style={{
        backgroundImage:
          "url('/pexels-polina-kovaleva-7270444 - Copy.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-8 text-center">
          {selectedCategory === "All" ? "Shop Our Collection" : selectedCategory}
        </h1>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={cat === "All" ? "/shop" : `/shop/${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20"
                }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Fade-in grid without blinking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-[fadeIn_0.6s_ease-in-out]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
