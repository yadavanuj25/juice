import React from "react";

const Trade = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#003b19]">Trade with Us</h2>
      <p className="mt-4 text-gray-600">
        We offer wholesale juice supply for cafes, restaurants, and retail
        partners.
      </p>
      <div className="mt-6 bg-green-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Why partner with us?</h3>
        <ul className="list-disc ml-5 mt-3 text-gray-600">
          <li>Fresh and organic juices</li>
          <li>Competitive pricing</li>
          <li>Reliable delivery service</li>
        </ul>
      </div>
    </section>
  );
};

export default Trade;
