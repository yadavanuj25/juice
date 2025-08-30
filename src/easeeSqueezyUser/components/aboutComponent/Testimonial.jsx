import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "The juices are incredibly fresh and tasty! I feel healthier every day.",
    image: "/userImages/user1.jpg",
  },
  {
    name: "Prakhar Verma",
    feedback:
      "Amazing flavors and quick delivery. Definitely my go-to juice brand.",
    image: "/userImages/user2.jpg",
  },
  {
    name: "Rohit Mehra",
    feedback:
      "Loved the variety and the natural taste. Highly recommend to everyone!",
    image: "/userImages/user3.jpg",
  },
  {
    name: "Sneh Kapoor",
    feedback: "Natural, refreshing, and delivered right on time!",
    image: "/userImages/user4.jpg",
  },
  {
    name: "Karan Gupta",
    feedback: "Great service and delicious juices. Totally worth it!",
    image: "/userImages/user3.jpg",
  },
];

const Testomonial = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#003b19] mb-10">
        What Our Customers <span className="text-green-600">Say</span>
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 h-full">
              <img
                src={`/juice/${testimonial.image}`}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
              />
              <p className="mt-4 text-gray-600 italic">
                "{testimonial.feedback}"
              </p>
              <h4 className="mt-3 font-semibold text-[#003b19]">
                {testimonial.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomonial;
