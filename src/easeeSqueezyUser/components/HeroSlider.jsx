import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/userImages/mango2.jpg",
    title: "Discover Amazing Products",
    subtitle: "Shop the best deals with us today!",
  },
  {
    id: 2,
    image: "/userImages/juice.jpg",
    title: "Fast & Reliable Delivery",
    subtitle: "Your orders delivered to your doorstep quickly.",
  },
  {
    id: 3,
    image: "/userImages/carrot.jpg",
    title: "Unbeatable Discounts",
    subtitle: "Grab limited-time offers before they’re gone!",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 4 }}
        >
          <div className=" bg-opacity-50 p-6 rounded-xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, delay: 0.3 }}
            >
              {slides[index].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
