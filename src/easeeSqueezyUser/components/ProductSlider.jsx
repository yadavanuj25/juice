import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderData = [
  {
    id: 1,
    title: "Fresh and Testy Kiwi juice",
    desc: "Delight in our juices, refreshing juice made with natural flavors.",
    img: "/userImages/applejuice.jpg",
  },
  {
    id: 2,
    title: "Delicious Juice",
    desc: "Soft, spongy juice with love and perfection for every occasion.",
    img: "/userImages/mango2.jpg",
  },
  {
    id: 3,
    title: "Refreshing Beverages",
    desc: "Stay cool with our handpicked beverages, perfect for summer vibes.",
    img: "/userImages/juice.jpg",
  },
];

const ProductSlider = () => {
  return (
    <div className=" py-20">
      <div className="  flex items-center justify-center ">
        <div className="w-full max-w-6xl">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            pagination={{ clickable: true }}
            // navigation
            className="rounded-2xl shadow-xl"
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <motion.div
                  className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl p-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="text-left space-y-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003b19]">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600">{slide.desc}</p>
                    <button className="mt-4 px-6 py-3 bg-[#003b19] text-white rounded-xl hover:bg-green-700 transition-all">
                      Explore More
                    </button>
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <img
                      src={`/juice/${slide.img}`}
                      alt={slide.title}
                      className="w-full max-w-md rounded-xl shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
