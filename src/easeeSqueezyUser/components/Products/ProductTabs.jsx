// src/components/ProductTabs.jsx
import React, { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specs", label: "Specifications" },
    { id: "reviews", label: "Reviews" },
  ];

  const renderStars = (count) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < count ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8">
      {/* Tab headers */}
      <div className="border-b flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 text-lg font-medium transition-all ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4 text-gray-700">
        {activeTab === "description" && <p>{product.description}</p>}
        {activeTab === "specs" && (
          <ul className="list-disc pl-6">
            <li>Brand: easeesqueezy</li>
            <li>Product: juice</li>
            {product.flavour && <li>Flavour: {product.flavour}</li>}
            {product.quantity && <li>quantity: {product.quantity}</li>}
          </ul>
        )}
        {activeTab === "reviews" && product.reviews?.length > 0 && (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm bg-gray-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{review.username}</h4>
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "reviews" && product.reviews?.length === 0 && (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
