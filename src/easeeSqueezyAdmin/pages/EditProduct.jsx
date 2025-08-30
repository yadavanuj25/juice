import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    price: "",
    specialPrice: "",
    quantity: "",
    status: "",
    mainImage: null,
    subImages: [],
  });

  // ✅ Prefill data from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const product = storedProducts.find((p) => String(p.id) === id);
    console.log(storedProducts);
    if (product) {
      setFormData({
        ...product,
        subImages: product.subImages || [],
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "mainImage") {
      setFormData({ ...formData, mainImage: files[0] });
    } else if (name === "subImages") {
      setFormData({
        ...formData,
        subImages: [...formData.subImages, ...Array.from(files)],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ update localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updated = storedProducts.map((p) =>
      String(p.id) === id ? { ...formData } : p
    );
    localStorage.setItem("products", JSON.stringify(updated));

    alert("✅ Product updated successfully!");
    navigate("/admin/products"); // redirect back
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-[#003b19] text-white px-4 py-2 rounded"
        >
          All Products
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <Tabs.Root defaultValue="general">
          {/* Tabs */}
          <Tabs.List className="flex border-b overflow-x-auto">
            {["General", "Data", "Image"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab.toLowerCase()}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold "
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* General Tab */}
          <Tabs.Content value="general" className="p-4">
            <label className="block font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />

            <label className="block font-medium mt-3">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />

            <label className="block font-medium mt-3">Meta Tag Title</label>
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />

            <label className="block font-medium mt-3">
              Meta Tag Description
            </label>
            <input
              type="text"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />

            <label className="block font-medium mt-3">Meta Tag Keywords</label>
            <input
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />
          </Tabs.Content>

          {/* Data Tab */}
          <Tabs.Content value="data" className="p-4">
            <label className="block font-medium">Main Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />
            <label className="block font-medium mt-3">Special Price</label>
            <input
              type="number"
              name="specialPrice"
              value={formData.specialPrice}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />
            <label className="block font-medium mt-3">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            />
            \<label className="block font-medium mt-3">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-1"
            >
              <option value="">-- Select Status --</option>
              <option value="Available">Available</option>
              <option value="Out of stock">Out of stock</option>
            </select>
          </Tabs.Content>

          {/* Image Tab */}
          <Tabs.Content value="image" className="p-4">
            <label className="block font-medium">Main Image</label>
            <input type="file" name="mainImage" onChange={handleChange} />

            {formData.mainImage && (
              <img
                src={
                  typeof formData.mainImage === "string"
                    ? formData.mainImage
                    : URL.createObjectURL(formData.mainImage)
                }
                alt="main"
                className="w-32 h-32 object-cover rounded mt-2"
              />
            )}

            <label className="block font-medium mt-3">Sub Images</label>
            <input
              type="file"
              name="subImages"
              multiple
              onChange={handleChange}
            />

            <div className="flex gap-2 mt-3 flex-wrap">
              {formData.subImages.map((file, i) => (
                <img
                  key={i}
                  src={
                    typeof file === "string" ? file : URL.createObjectURL(file)
                  }
                  alt={`sub-${i}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#003b19] text-white px-6 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
