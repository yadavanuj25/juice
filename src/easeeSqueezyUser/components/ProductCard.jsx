import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./buttons/Button";

const ProductCard = ({ product, handleBuy, handleAddCart }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col hover:shadow-xl">
      <div
        onClick={handleDetail}
        className="hover:scale-105 transition cursor-pointer"
      >
        <img
          src={`/juice/userImages/${product.image}`}
          alt={product.name}
          className="h-48 w-full object-cover rounded"
        />
      </div>

      {/* Product Details */}
      <h3
        onClick={handleDetail}
        className="text-lg font-semibold mt-4 cursor-pointer hover:text-green-700"
      >
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        {product.description || "No description available"}
      </p>

      {/* Price & Discount */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xl font-bold text-green-600">
          ₹{product.price}
        </span>
        {product.discount && (
          <span className="text-sm text-red-500">{product.discount}% OFF</span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < (product.rating || 4) ? "text-yellow-500" : "text-gray-300"
            }`}
            fill={i < (product.rating || 4) ? "currentColor" : "none"}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex gap-2 pt-4">
        <button
          onClick={() => handleBuy(product)}
          className="flex-1 bg-[#003b19] text-white py-2 rounded hover:bg-green-800"
        >
          Buy Now
        </button>
        <button
          onClick={() => handleAddCart(product)}
          className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
