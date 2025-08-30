import React from "react";
import { Plus, Tags } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Beverages",
      description: "Juices, soft drinks, and water",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Snacks",
      description: "Chips, biscuits, and packaged food",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Dairy",
      description: "Milk, cheese, and yogurt",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 4,
      name: "Bakery",
      description: "Bread, cakes, and pastries",
      color: "bg-pink-100 text-pink-800",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Tags className="text-green-700" /> Categories
          </h1>
          <p className="text-gray-500 text-sm">
            Manage product categories in your store.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
          <Plus /> Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${cat.color}`}
            >
              {cat.name}
            </div>
            <p className="mt-2 text-gray-600 text-sm">{cat.description}</p>
            <div className="mt-4">
              <button className="text-sm text-blue-600 hover:underline mr-3">
                Edit
              </button>
              <button className="text-sm text-red-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
