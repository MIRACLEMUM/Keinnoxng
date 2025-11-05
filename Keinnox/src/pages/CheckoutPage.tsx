import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 2000 : 0; // example shipping fee
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-black text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Customer Details */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Customer Details</h3>

          <form className="space-y-4">
            <input className="w-full p-3 bg-black border border-gray-600 rounded-md" placeholder="Full Name" required />
            <input className="w-full p-3 bg-black border border-gray-600 rounded-md" type="email" placeholder="Email" required />
            <input className="w-full p-3 bg-black border border-gray-600 rounded-md" type="tel" placeholder="Phone Number" required />
            <textarea className="w-full p-3 bg-black border border-gray-600 rounded-md" placeholder="Shipping Address" rows={3} required />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-md font-bold transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3">
            {cart.length === 0 && <p className="text-gray-400">Your cart is empty.</p>}

            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
                <p>{item.name} x {item.quantity}</p>
                <p>₦{item.price * item.quantity}</p>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <p>Subtotal:</p>
              <p>₦{subtotal}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>₦{shipping}</p>
            </div>

            <div className="flex justify-between font-bold text-yellow-400 text-lg border-t border-gray-700 pt-2">
              <p>Total:</p>
              <p>₦{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
