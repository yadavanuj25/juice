import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleProceedOrder = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/orders");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-[#003b19]">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md border"
              >
                <img
                  src={`/juiuce/userImages/${item.image}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 bg-gray-200 rounded"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 bg-gray-200 rounded"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mt-4">
              <h2 className="text-red-700 text-lg font-bold">
                Total: ₹{cartTotal}
              </h2>
              <button
                type="button"
                onClick={handleProceedOrder}
                className="bg-[#003b19] text-white px-4 py-2 rounded-lg hover:bg-[#014d21]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
