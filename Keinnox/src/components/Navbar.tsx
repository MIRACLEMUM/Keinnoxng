import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Wine", path: "/shop/wine" },
  { name: "Red Wine", path: "/shop/wine/red" },
  { name: "White Wine", path: "/shop/wine/white" },
  { name: "Champagne", path: "/shop/champagne" },
  { name: "Gin", path: "/shop/gin" },
  { name: "Rum", path: "/shop/rum" },
  { name: "Non-Alcoholic", path: "/shop/non-alcoholic" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-[#D4AF37]/30 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#D4AF37] bg-clip-text text-transparent">
            KEINNOX
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">

          {/* Shop Dropdown */}
          <div
            className="relative cursor-pointer group"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="hover:text-[#D4AF37] transition">Shop</span>

            {/* Beautiful dropdown */}
            {dropdown && (
              <div className="absolute left-0 mt-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-xl shadow-lg py-3 w-52 animate-fade-in">
                {categories.map((cat, index) => (
                  <Link
                    key={index}
                    to={cat.path}
                    className="block px-4 py-2 text-sm hover:bg-[#D4AF37]/15 hover:text-[#D4AF37] transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-[#D4AF37]">About</Link>
          <Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link>

          <Link to="/cart" className="hover:text-[#D4AF37] flex items-center gap-1">
            <ShoppingCart size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B0B0B]/95 border-t border-[#D4AF37]/20 px-6 py-4 space-y-5 animate-fade-down">
          <details className="text-[#D4AF37]">
            <summary className="cursor-pointer text-base">Shop</summary>
            <div className="pl-4 mt-2 space-y-2">
              {categories.map((cat, i) => (
                <Link key={i} to={cat.path} className="block text-white hover:text-[#D4AF37]">
                  {cat.name}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/about" className="block hover:text-[#D4AF37]">About</Link>
          <Link to="/contact" className="block hover:text-[#D4AF37]">Contact</Link>

          <Link to="/cart" className="block flex items-center gap-2 hover:text-[#D4AF37]">
            <ShoppingCart /> Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
