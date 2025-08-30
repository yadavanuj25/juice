import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Heart, Recycle } from "lucide-react";

const WhyChoose = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-[#003b19] mb-10">
        Why Choose <span className="text-green-600">Us?</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {[
          {
            icon: Leaf,
            title: "100% Natural",
            desc: "No preservatives or artificial flavors.",
          },
          {
            icon: Droplet,
            title: "Freshly Made",
            desc: "Juices prepared daily for maximum freshness.",
          },
          {
            icon: Heart,
            title: "Healthy & Tasty",
            desc: "Perfect balance of nutrition and taste.",
          },
          {
            icon: Recycle,
            title: "Eco-Friendly",
            desc: "Sustainable packaging for a better tomorrow.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <item.icon className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
