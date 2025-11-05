import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartDrawer = () => {
  const { cart, isOpen, closeCart, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[350px] bg-black/90 backdrop-blur-lg border-l border-[#D4AF37]/40 text-white p-5 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#D4AF37]">Your Cart</h2>
        <button onClick={closeCart}>
          <X size={22} className="text-[#D4AF37]" />
        </button>
      </div>

      <div className="space-y-4 max-h-[75vh] overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
            <img src={item.image} className="w-14 h-14 rounded-lg object-cover" />
            <div className="w-32">
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-[#D4AF37] text-sm">₦{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQty(item.id)} className="px-2 border border-[#D4AF37] rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)} className="px-2 border border-[#D4AF37] rounded">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-sm">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDrawer;
