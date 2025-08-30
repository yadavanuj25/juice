import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    attributes: {},
    options: {},
    subscription: "",
    discount: "",
    special: "",
    image: null,
    rewardPoints: "",
    seo: "",
    design: "",
    report: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">➕ Add Product</h1>

        <Tabs.Root defaultValue="general">
          {/* Tab List */}
          <Tabs.List className="flex border-b overflow-x-auto">
            {[
              "General",
              "Data",
              "Links",
              "Attribute",
              "Option",
              "Subscription",
              "Discount",
              "Special",
              "Image",
              "Reward Points",
              "SEO",
              "Design",
              "Report",
            ].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab.toLowerCase().replace(" ", "")}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* General Tab */}
          <Tabs.Content value="general" className="p-4">
            <label className="block font-medium">Product Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-4"
              placeholder="Enter product name"
            />

            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              rows="4"
              placeholder="Enter description"
            ></textarea>
          </Tabs.Content>

          {/* Data Tab */}
          <Tabs.Content value="data" className="p-4">
            <label className="block font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-4"
            />

            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </Tabs.Content>

          {/* Links Tab */}
          <Tabs.Content value="links" className="p-4">
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </Tabs.Content>

          {/* Option Tab */}
          <Tabs.Content value="option" className="p-4">
            <p className="text-gray-500">Add product options here</p>
          </Tabs.Content>

          {/* Subscription Tab */}
          <Tabs.Content value="subscription" className="p-4">
            <p className="text-gray-500">Subscription details here</p>
          </Tabs.Content>

          {/* Discount Tab */}
          <Tabs.Content value="discount" className="p-4">
            <label className="block font-medium">Discount %</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </Tabs.Content>

          {/* Special Tab */}
          <Tabs.Content value="special" className="p-4">
            <p className="text-gray-500">Special offers here</p>
          </Tabs.Content>

          {/* Image Tab */}
          <Tabs.Content value="image" className="p-4">
            <label className="block font-medium">Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </Tabs.Content>

          {/* Reward Points Tab */}
          <Tabs.Content value="rewardpoints" className="p-4">
            <label className="block font-medium">Reward Points</label>
            <input
              type="number"
              name="rewardPoints"
              value={formData.rewardPoints}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </Tabs.Content>

          {/* SEO Tab */}
          <Tabs.Content value="seo" className="p-4">
            <label className="block font-medium">SEO Keywords</label>
            <input
              type="text"
              name="seo"
              value={formData.seo}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              placeholder="keyword1, keyword2"
            />
          </Tabs.Content>

          {/* Design Tab */}
          <Tabs.Content value="design" className="p-4">
            <p className="text-gray-500">Custom design settings</p>
          </Tabs.Content>

          {/* Report Tab */}
          <Tabs.Content value="report" className="p-4">
            <p className="text-gray-500">Report options here</p>
          </Tabs.Content>
        </Tabs.Root>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow"
          >
            💾 Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
