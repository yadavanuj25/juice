import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-40 bg-white text-gray-500
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 ">
        {isOpen ? (
          <span className="text-lg font-bold">Admin Panel</span>
        ) : (
          <span className="text-lg font-bold">Logo</span>
        )}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-1 hover:bg-gray-700 rounded"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-1 flex flex-col ">
        <Link
          to="/admin/dashboard"
          className={`flex items-center px-3 py-2  hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200
            ${
              location.pathname === "/admin/dashboard"
                ? "bg-blue-100 text-[#6777ef]"
                : ""
            }
          `}
        >
          <span className="flex items-center text-md font-medium">
            <LayoutDashboard size={18} />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </span>
        </Link>

        {/* Catalog Menu */}
        <div>
          <button
            onClick={() => setCatalogOpen(!catalogOpen)}
            className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-100 hover:text-gray-500  transition-colors duration-200"
          >
            <span className="flex items-center text-md font-medium">
              <Package size={18} />
              {isOpen && <span className="ml-3">Catalog</span>}
            </span>
            {isOpen && (
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  catalogOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {catalogOpen && isOpen && (
            <div className="flex flex-col  ">
              <Link
                to="/admin/products"
                className={`px-2 py-2 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200
                  ${
                    location.pathname === "/admin/products"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={18} />
                  <span className="ml-2">Products</span>
                </span>
              </Link>
              <Link
                to="/admin/categories"
                className={`px-2 py-2 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200
                  ${
                    location.pathname === "/admin/categories"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={18} />
                  <span className="ml-2">Categories</span>
                </span>
              </Link>
              <Link
                to="/admin/filters"
                className={`px-2 py-2 text-sm hover:bg-gray-100 hover:text-gray-500 transition-colors duration-200
                  ${
                    location.pathname === "/admin/filters"
                      ? "bg-blue-100 text-[#6777ef]"
                      : ""
                  }
                `}
              >
                <span className="flex items-center pl-5">
                  <ChevronRight size={18} />
                  <span className="ml-2">Filters</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
