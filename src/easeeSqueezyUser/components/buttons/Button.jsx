import React from "react";

const Button = ({ content }) => {
  return (
    <button className=" bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition">
      {content}
    </button>
  );
};

export default Button;
