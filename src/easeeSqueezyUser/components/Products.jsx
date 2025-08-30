import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import ProductData from "../JsonData/ProductData.json";
// import { addToCart } from "../utils/Cart";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const productsPerPage = 8;
  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const handleAddCart = (product) => {
    addToCart(product);
  };

  const handleBuy = (product) => {
    addToCart(product);
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/orders");
    }
  };
  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="my-10 text-center text-3xl font-bold text-[#003b19]">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((p, index) => (
          <ProductCard
            key={index}
            product={p}
            handleBuy={handleBuy}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-orange-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-orange-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
