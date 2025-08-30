import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Heart, Recycle } from "lucide-react";
import Button from "../components/buttons/Button";
import WhyChoose from "../components/aboutComponent/WhyChoose";
import OurProcess from "../components/aboutComponent/ourProcess";
import Testimonial from "../components/aboutComponent/Testimonial";
import Team from "../components/aboutComponent/Team";
import Sustainability from "../components/Sustainability";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#003b19]">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Freshness in every sip 🍹 — from a small juice bar in 2010 to
            thousands of happy customers today.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <img
            src={`/juice/userImages/mjuice.jpg`}
            alt="Juice Making"
            className="w-full md:w-1/2 rounded-xl shadow-md  transition-transform duration-500"
          />

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#003b19] mb-4">
              Our Journey
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in{" "}
              <span className="text-green-600 font-medium">pure freshness</span>
              with no preservatives. From humble beginnings in 2010, we’ve grown
              into a brand that serves thousands of juice lovers every month.
              Every glass tells a story of{" "}
              <span className="text-green-600 font-medium">quality</span>,
              <span className="text-green-600 font-medium"> health</span>, and{" "}
              <span className="text-green-600 font-medium">taste</span>.
            </p>
            <div className="mt-4">
              <Button content="Know More" />
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <WhyChoose />
        {/* Our Process */}
        <OurProcess />
        {/* Testimonials */}
        <Testimonial />
        {/* Team */}

        {/* Call To Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-[#003b19] mb-4">
            Ready to Taste the Freshness?
          </h3>
          <Button content="Explore Juice" />
        </div>
      </div>
    </section>
  );
};

export default About;
