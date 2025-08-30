import React from "react";
import Button from "./buttons/Button";

export default function FruiteCardLeft({ title, subTitle, desc, img }) {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row bg-white">
        {/* Left: Main Image */}
        <div className="md:w-1/2 ">
          <img src={img} alt="Pineapple" className=" w-full object-cover" />
        </div>

        {/* Right: Text Section */}
        <div className="md:w-1/2 p-8 relative flex flex-col justify-center bg-gray-100">
          <h3 className="uppercase font-bold text-sm text-gray-800">{title}</h3>
          <h2 className="text-3xl font-semibold text-green-700 mt-2 mb-4 leading-snug">
            {subTitle}
          </h2>
          <p className="text-gray-600 mb-6">{desc}</p>
          <div className="w-25">
            <Button content="READ MORE" />
          </div>
        </div>
      </div>
    </div>
  );
}
