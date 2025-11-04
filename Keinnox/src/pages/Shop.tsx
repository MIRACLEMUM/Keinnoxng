import React from "react";
import { useParams } from "react-router-dom";
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
      className="relative max-w-7xl mx-auto px-6 py-12 pt-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/pexels-luna-joie-3299599-34519660.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-8 text-center">
          {selectedCategory === "All" ? "Shop Our Collection" : selectedCategory}
        </h1>

        {/* Category Links */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/shop/${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full font-medium transition-colors
                ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-[#D4AF37] text-black"
                    : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20"
                }`}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg"
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
