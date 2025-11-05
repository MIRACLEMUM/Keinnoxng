import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const categories = [
  { name: "Wine", path: "/shop/wine" },
  { name: "Spirit", path: "/shop/spirit" },
  { name: "Gin", path: "/shop/gin" },
  { name: "Champagne", path: "/shop/champagne" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-[#D4AF37]/30 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-3xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#D4AF37] bg-clip-text text-transparent">
              KEINNOX
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdown(!dropdown)} className="hover:text-[#D4AF37] transition">
                Shop
              </button>

              {dropdown && (
                <div className="absolute left-0 mt-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-xl shadow-lg py-3 w-52 z-50">
                  {categories.map((cat, i) => (
                    <Link key={i} to={cat.path} onClick={() => setDropdown(false)}
                      className="block px-4 py-2 text-sm hover:bg-[#D4AF37]/15 hover:text-[#D4AF37]">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-[#D4AF37]">About</Link>
            <Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={() => setCartDrawer(true)} className="relative hover:text-[#D4AF37]">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-[#0B0B0B]/95 border-t border-[#D4AF37]/20 px-6 py-4 space-y-5 animate-fade-down">
            <details className="text-[#D4AF37]" open>
              <summary className="cursor-pointer text-base">Shop</summary>
              <div className="pl-4 mt-2 space-y-2">
                {categories.map((cat, i) => (
                  <Link key={i} to={cat.path} onClick={() => setOpen(false)}
                    className="block text-white hover:text-[#D4AF37]">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-[#D4AF37]">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-[#D4AF37]">Contact</Link>
          </div>
        )}
      </nav>

      {/* ✅ CART DRAWER */}
      {cartDrawer && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
          <div className="fixed right-0 top-0 h-full w-80 bg-[#0B0B0B]/60 backdrop-blur-xl border-l border-[#D4AF37]/30 p-5 flex flex-col text-[#D4AF37]">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={() => setCartDrawer(false)} className="text-white">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-sm text-[#D4AF37]/60">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b border-[#D4AF37]/20 pb-2">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />

                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs">₦{item.price.toLocaleString()}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => decreaseQty(item.id)} 
                          className="px-2 border border-[#D4AF37]/40 rounded text-sm hover:bg-[#D4AF37]/20"
                        >-</button>

                        <span className="text-sm font-bold">{item.quantity}</span>

                        <button 
                          onClick={() => increaseQty(item.id)} 
                          className="px-2 border border-[#D4AF37]/40 rounded text-sm hover:bg-[#D4AF37]/20"
                        >+</button>
                      </div>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-xs hover:text-red-300">
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-3 border-t border-[#D4AF37]/30">
                <div className="flex justify-between text-sm font-bold mb-3">
                  <span>Subtotal</span>
                  <span>
                    ₦{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setCartDrawer(false);
                    navigate("/cart");
                  }}
                  className="w-full bg-[#D4AF37] text-black py-2 rounded-lg font-semibold hover:bg-[#e9d69f]"
                >
                  View Cart & Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
