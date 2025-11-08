import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#D4AF37] text-xl">
        Product not found 😢
      </div>
    );
  }

  // ✅ Ensure price is numeric
  const price = Number(product.price);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#D4AF37] pt-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-2xl shadow-lg border border-[#D4AF37]/30"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            ₦{price.toLocaleString()}
          </p>

          <p className="text-[#D4AF37]/70 leading-relaxed mb-6">
            Experience the taste of {product.name}, a premium {product.category} drink that blends quality and craftsmanship.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e9d69f]"
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <Link to="/shop" className="text-sm hover:text-white">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
