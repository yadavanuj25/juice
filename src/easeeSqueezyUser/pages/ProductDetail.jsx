import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import ProductData from "../JsonData/ProductData.json";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import ProductTabs from "../components/Products/ProductTabs";
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const product = ProductData.find((p) => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product Not Found 😢
      </div>
    );
  }

  const handleAddCart = () => {
    addToCart(product);
  };

  const handleBuy = () => {
    addToCart(product);
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/orders");
    }
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto  rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Product Image + Sub Images */}
        <div className="flex flex-col items-center justify-center">
          {/* Main Image */}
          <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg p-4 relative overflow-hidden  h-[350px] group">
            <img
              src={`/userImages/${activeImage}`}
              alt={product.name}
              className="rounded-lg w-full h-full  transform transition-transform duration-500 ease-in-out group-hover:scale-125 cursor-zoom-in max-h-[400px] object-contain"
            />
          </div>

          {/* Sub Images (Thumbnails) */}
          <div className="flex space-x-3 mt-4">
            {[product.image, ...(product.subImages || [])].map((img, i) => (
              <img
                key={i}
                src={`/userImages/${img}`}
                alt="sub"
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  activeImage === img ? "border-green-600" : "border-gray-300"
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>

          {/* Action Buttons for Mobile */}
          <div className="flex md:hidden gap-4 mt-4 w-full">
            <button
              onClick={handleAddCart}
              className="flex-1 bg-orange-500 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuy}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

            {/* Ratings */}
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ★ | 1,245 Ratings & 350 Reviews
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-3 mt-4">
              <span className="text-3xl font-bold text-green-600">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-500">
                ₹{product.oldPrice}
              </span>
              <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>

            {/* Offers Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Available Offers
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>💳 Bank Offer: 10% Instant Discount on ICICI Cards</li>
                <li>💸 Special Price: Get extra ₹200 off</li>
                <li>🚚 Free Delivery on orders above ₹500</li>
                <li>💰 No Cost EMI starting from ₹500/month</li>
              </ul>
            </div>

            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Product Description
              </h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>

            {/* Assurances */}
            <div className="flex items-center gap-6 mt-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Truck size={18} /> Free Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} /> 1 Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <RefreshCcw size={18} /> Easy Returns
              </div>
            </div>
          </div>

          {/* Buttons (Desktop Sticky) */}
          <div className="hidden md:flex gap-4 mt-6">
            <button
              onClick={handleAddCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuy}
              className="flex-1 bg-green-700 hover:bg-green-900 text-white py-3 rounded-lg font-semibold"
            >
              Buy Now
            </button>
          </div>

          {/* Back link */}
          <Link
            to="/"
            className="mt-4 inline-block text-sm text-blue-600 hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
        <ProductTabs product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
