import { Plus, Copy, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow rounded mb-4">
      {/* Left - Title & Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-[#003b19]">{title}</h1>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          {breadcrumb.map((item, idx) => (
            <span key={idx} className="flex items-center">
              {idx > 0 && <span className="mx-1">{">"}</span>}
              {item.link ? (
                <Link to={item.link} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-2 mt-3 md:mt-0">
        <Link
          to="/admin/products/add-product"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          <Plus size={16} />
        </Link>

        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
