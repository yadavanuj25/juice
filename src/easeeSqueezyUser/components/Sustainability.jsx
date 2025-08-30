import React from "react";

const Sustainability = () => {
  return (
    <div className=" rounded-2xl py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#003b19]">
        Our Commitment to Sustainability
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4">
        We care for both your health and the planet. From eco-friendly packaging
        to sourcing fruits directly from local farms, we ensure that every step
        supports a greener future.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <img
            src={`/juice/userImages/eco-packing.jpg`}
            alt="Eco Packaging"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="font-semibold">Eco-friendly Packaging</h3>
          <p className="text-sm text-gray-600 mt-2">
            100% recyclable and biodegradable packaging for all juices.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <img
            src={`/juice/userImages/local-farmers.jpg`}
            alt="Local Farmers"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="font-semibold">Supporting Local Farmers</h3>
          <p className="text-sm text-gray-600 mt-2">
            Partnering with nearby farms to ensure freshness and fair trade.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <img
            src={`/juice/userImages/energy.jpg`}
            alt="Green Energy"
            className="w-20 h-20 mx-auto mb-3"
          />
          <h3 className="font-semibold">Green Energy</h3>
          <p className="text-sm text-gray-600 mt-2">
            Using renewable energy sources in our production process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
