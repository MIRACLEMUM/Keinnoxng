import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./pages/Shop";
import CartDrawer from "./components/CartDrawer";
import CartPage from "./pages/CartPage"; // ✅ add 
import CheckoutPage from "./pages/CheckoutPage";


function App() {
  return (
    <Router>
      <Navbar />
      <CartDrawer />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />

        {/* ✅ Cart Page Route */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>
    </Router>
  );
}

export default App;
