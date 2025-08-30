import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-3 bg-white shadow">
      <button onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">User </h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="h-10 w-10 rounded-full border-2 border-[#003b19] ml-3"
        />
      </div>
    </header>
  );
};

export default Navbar;
