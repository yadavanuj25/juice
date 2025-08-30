import React from "react";
import ProductSlider from "../components/ProductSlider";

const flavors = [
  {
    name: "Orange",
    img: "src/assets/orange.jpg",
  },
  {
    name: "Strawberry",
    img: "src/assets/strawberry1.jpg",
  },
  {
    name: "Mango",
    img: "src/assets/mango.jpg",
  },
  {
    name: "Kiwi",
    img: "src/assets/kiwi.jpg",
  },
  {
    name: "Strawberry",
    img: "src/assets/strawberry.jpg",
  },
  {
    name: "Pineapple",
    img: "src/assets/pineapple.jpg",
  },
  {
    name: "Coconut",
    img: "src/assets/coconut.jpg",
  },
  {
    name: "Grapes",
    img: "src/assets/grapes.jpg",
  },
  {
    name: "Gauva",
    img: "src/assets/gauva.jpg",
  },
  {
    name: "Pomegranate",
    img: "src/assets/pomegranate.jpg",
  },
  {
    name: "Papaya",
    img: "src/assets/papaya.jpg",
  },
  {
    name: "MixFruit",
    img: "src/assets/mixfruit.jpg",
  },
];
const Flavors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <ProductSlider />
      <h2 className="my-8 text-center text-3xl font-bold text-[#003b19]">
        Our Flavors
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {flavors.map((flavor) => (
          <div
            key={flavor.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={`/juice/${flavor.img}`}
              alt={flavor.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {flavor.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flavors;
