import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Pencil,
  MoreVertical,
  Trash2,
  Filter as FilterIcon,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const Products = () => {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Products"
        breadcrumb={[{ label: "Home", link: "#" }, { label: "Products" }]}
      />
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Table Section */}
        <div className="flex-1 w-full  bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#003b19]">
            Product List
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th className="p-2 text-[#003b19] font-semibold">Image</th>
                <th className="p-2 text-[#003b19] font-semibold">
                  Product Name
                </th>
                <th className="p-2 text-[#003b19] font-semibold">Status</th>
                <th className="p-2 text-[#003b19] font-semibold">Price</th>
                <th className="p-2 text-[#003b19] font-semibold">Quantity</th>
                <th className="p-2 text-[#003b19] font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((p, i) => (
                  <tr key={i} className="border-t items-center">
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>

                    <td className="p-2 text-sm">
                      {p.image?.[0] ? (
                        <img
                          src={p.image[0]}
                          alt={p.name}
                          className="w-[50px] h-[50px] object-cover rounded"
                        />
                      ) : (
                        <span className="text-gray-400">No image</span>
                      )}
                    </td>

                    <td className="p-2 text-sm">
                      <strong>{p.name}</strong>
                    </td>
                    <td className="p-2 text-sm">
                      <div
                        className={`text-sm ${
                          p.status === "Available"
                            ? "text-[#003b19]"
                            : "text-red-500"
                        }`}
                      >
                        {p.status}
                      </div>
                    </td>
                    <td className="p-2 text-sm">
                      <div className="text-red-500">${p.price}</div>
                      {p.specialPrice && (
                        <div className="text-[#003b19]">${p.specialPrice}</div>
                      )}
                    </td>
                    <td className="p-2 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          p.quantity > 0 ? "bg-green-500" : "bg-orange-400"
                        }`}
                      >
                        {p.quantity}
                      </span>
                    </td>
                    <td className="p-2 flex gap-1 items-center">
                      <button
                        onClick={() => navigate(`/admin/products/${i}`)}
                        className="bg-[#003b19] p-2 rounded text-white"
                      >
                        <Pencil size={16} />
                      </button>
                      <button className="bg-red-500 p-2 rounded text-white">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    <h1 className="text-center py-6 text-red-500 text-3xl font-bold">
                      No Product Found
                    </h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
