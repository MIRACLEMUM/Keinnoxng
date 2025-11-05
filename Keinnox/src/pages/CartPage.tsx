import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ init navigate

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#D4AF37] pt-32 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-[#D4AF37]/70">
          <p className="mb-6 text-lg">Your cart is empty.</p>
          <Link
            to="/shop"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e9d69f]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-6">
          
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 pb-5 border-b border-[#D4AF37]/20"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-[#D4AF37]/70">
                    ₦{item.price.toLocaleString()}
                  </p>

                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 border border-[#D4AF37]/40 rounded hover:bg-[#D4AF37]/20 text-sm"
                    >
                      -
                    </button>

                    <span className="font-bold text-base">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 border border-[#D4AF37]/40 rounded hover:bg-[#D4AF37]/20 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-xs hover:text-red-300 flex items-center gap-1 mt-1"
                  >
                    <X size={12} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal Section */}
          <div className="mt-8 border-t border-[#D4AF37]/20 pt-6">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <button 
              className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold text-lg hover:bg-[#e9d69f]"
              onClick={() => navigate("/checkout")} // ✅ navigate to checkout
            >
              Proceed to Checkout
            </button>

            <div className="text-center mt-3">
              <Link to="/shop" className="text-sm hover:text-[#fff]">
                Continue Shopping →
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
