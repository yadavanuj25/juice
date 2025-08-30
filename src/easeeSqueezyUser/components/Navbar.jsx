import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import TopHeader from "./TopHeader";
import CartBadge from "./cart/CartBadge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        const data = await response.json();
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className=" bg-white shadow-md fixed w-full z-50">
        <TopHeader />
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/src/assets/easeeSqueezyLogo.png"
                alt="Juice Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Right Side - Logout + Profile */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Desktop Nav Links */}
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  About
                </Link>
                <Link
                  to="/flavors"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  Flavors
                </Link>
                <Link
                  to="/trade"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  Trade
                </Link>

                <Link
                  to="/news"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  News
                </Link>
                <Link
                  to="/contact"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  Contact
                </Link>
                <Link
                  to="/orders"
                  className="text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  <ShoppingBag size={20} />
                </Link>
                <Link
                  to="/cart"
                  className="relative text-[#003b19] hover:text-[#014d21] font-semibold"
                >
                  <ShoppingCart size={20} />

                  <CartBadge cartCount={cartCount} />
                </Link>
              </div>

              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-[#003b19] text-white px-4 py-1 rounded-md hover:bg-[#014d21]"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#003b19] text-white px-4 py-1 rounded-md hover:bg-[#014d21]"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#003b19] hover:text-[#014d21]"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#014d21] shadow-md">
            <div className="flex flex-col px-4 pt-2 pb-3 space-y-2">
              <Link
                to="/"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                About
              </Link>
              <Link
                to="/flavors"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Flavors
              </Link>
              <Link
                to="/trade"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Trade
              </Link>
              <Link
                to="/news"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                News
              </Link>

              <Link
                to="/contact"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Contact
              </Link>
              <Link
                to="/orders"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Orders
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-[#d6eade] font-semibold"
              >
                Cart
              </Link>
              <div className="flex items-center justify-between mt-3">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="bg-white text-[#003b19] px-4 py-1 rounded-md hover:bg-[#d6eade] w-full font-bold"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-white text-[#003b19] px-4 py-1 rounded-md hover:bg-[#d6eade] w-full font-bold"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
