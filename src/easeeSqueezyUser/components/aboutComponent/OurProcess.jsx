import React from "react";
import { motion } from "framer-motion";
const OurProcess = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-[#003b19] mb-10">
        Our <span className="text-green-600">Process</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {[
          {
            step: "1",
            title: "Farm Fresh Fruits",
            desc: "We source the best quality seasonal fruits directly from farmers.",
          },
          {
            step: "2",
            title: "Careful Selection",
            desc: "Every fruit is hand-checked for ripeness and freshness.",
          },
          {
            step: "3",
            title: "Cold Pressed",
            desc: "Juices extracted with care to lock in nutrients.",
          },
          {
            step: "4",
            title: "Delivered Fresh",
            desc: "Packed eco-friendly & delivered quickly to your doorstep.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-2xl font-bold text-green-600 mb-3">
              {item.step}
            </div>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
