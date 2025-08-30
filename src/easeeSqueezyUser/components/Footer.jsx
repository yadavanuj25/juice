import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#003b19] text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} easeeSqueezy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
