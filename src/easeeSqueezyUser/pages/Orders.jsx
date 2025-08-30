import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Orders = () => {
  const [cart, setCart] = useState([]);
  const [addresses, setAddresses] = useState(
    JSON.parse(localStorage.getItem("addresses")) || []
  );
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateAddress = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...addresses];
      updated[editingIndex] = formData;
      setAddresses(updated);
      localStorage.setItem("addresses", JSON.stringify(updated));
      setEditingIndex(null);
    } else {
      const updated = [...addresses, formData];
      setAddresses(updated);
      localStorage.setItem("addresses", JSON.stringify(updated));
    }
    setFormData({ name: "", address: "", paymentMethod: "Cash on Delivery" });
  };

  const handleEditAddress = (index) => {
    setFormData(addresses[index]);
    setEditingIndex(index);
  };

  const handleDeleteAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
    if (selectedAddress === index) setSelectedAddress(null);
  };

  const handlePlaceOrder = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (selectedAddress === null) {
      alert("Please select a delivery address");
      return;
    }
    navigate("/payment");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-[#003b19]">
        Place Your Order
      </h1>

      {/* If cart is empty (Flipkart style) */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white p-10 border rounded-lg shadow-md">
          <img
            src="/userImages/EmptyCart.jpg"
            alt="Empty Cart"
            className="w-60 mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-green-900">
            Your cart is empty!
          </h2>
          <p className="text-gray-500 mb-4">
            Add items to it now to place your order.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#003b19] text-white px-6 py-2 rounded-lg hover:bg-[#015424]"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address Form */}
          <form
            onSubmit={handleAddOrUpdateAddress}
            className="bg-white p-6 rounded-lg shadow-md border"
          >
            <h2 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Address" : "Add New Address"}
            </h2>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#003b19] text-white px-4 py-2 rounded-lg hover:bg-[#015424]"
            >
              {editingIndex !== null ? "Update Address" : "Add Address"}
            </button>
          </form>

          {/* Address List + Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4">Select Delivery Address</h2>
            {addresses.length === 0 && (
              <p className="text-gray-500">No addresses added yet.</p>
            )}
            {addresses.map((addr, index) => (
              <div
                key={index}
                className={`border rounded-lg p-3 mb-3 flex justify-between items-center ${
                  selectedAddress === index
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <div>
                  <input
                    type="radio"
                    name="selectedAddress"
                    checked={selectedAddress === index}
                    onChange={() => setSelectedAddress(index)}
                    className="mr-2"
                  />
                  <span className="font-semibold">{addr.name}</span> <br />
                  <span>{addr.address}</span>
                </div>
                <div className="space-x-2">
                  <button
                    type="button"
                    onClick={() => handleEditAddress(index)}
                    className="text-blue-500 hover:underline"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteAddress(index)}
                    className="text-red-500 hover:underline"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}

            <h2 className="text-xl font-bold mb-4 mt-6">Order Summary</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-[#003b19] text-white px-4 py-2 rounded-lg hover:bg-[#015424] w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Orders;
