import React from "react";
import Products from "../components/Products";
import FruiteCardLeft from "../components/FruiteCardLeft";
import FruiteCardRight from "../components/FruiteCardRight";
import pineappleImg from "/userImages/pineapple.jpg";
import waterMelon from "/userImages/watermelon.jpg";
import lemon from "/userImages/lemon.jpg";
import grapes from "/userImages/grapes.jpg";
import orange from "/userImages/orange.jpg";
import strawberry from "/userImages/strawberry.jpg";
import ProductSlider from "../components/ProductSlider";
import HeroSlider from "../components/HeroSlider";
import Button from "../components/buttons/Button";
import Sustainability from "../components/Sustainability";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* <ProductSlider /> */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003b19]">
              Freshly Squeezed, Just for You 🥤
            </h1>
            <p className="mt-4 mb-4 text-gray-600">
              Enjoy our wide variety of refreshing juices made from fresh
              fruits.
            </p>
            <Button content="Explore more" />
          </div>
          <div className="md:w-1/2">
            <img
              src={`/juice/userImages/applejuice.jpg`}
              alt="Juice"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
        <Products />
        <FruiteCardLeft
          title="Pineapple"
          subTitle="Health Benefits, Risks& Nutrition Facts"
          desc="Pineapples are tropical fruit that are rich in vitamins, enzymes and antioxidents. They may help boost the immune system, build strong bones and aid indigestion. Also, despite their sweetness, pineapples are low in calories."
          img={pineappleImg}
        />
        <FruiteCardRight
          title="Grapes"
          subTitle="Watermelon mint juice made in a blender"
          desc="Refreshing and cool watermelon juice with a splash of lime is the perfect drink to enjoy on a hot summer day. To make the watermelon juice, I first cut them into chunks and leave them in the refrigerator to chill for 1-2 hours before blending."
          img={grapes}
        />
        <FruiteCardLeft
          title="Orange"
          subTitle="Health Benefits, Risks& Nutrition Facts"
          desc="Pineapples are tropical fruit that are rich in vitamins, enzymes and antioxidents. They may help boost the immune system, build strong bones and aid indigestion. Also, despite their sweetness, pineapples are low in calories."
          img={orange}
        />
        <FruiteCardRight
          title="Strawberry"
          subTitle="Watermelon mint juice made in a blender"
          desc="Refreshing and cool watermelon juice with a splash of lime is the perfect drink to enjoy on a hot summer day. To make the watermelon juice, I first cut them into chunks and leave them in the refrigerator to chill for 1-2 hours before blending."
          img={strawberry}
        />
        <FruiteCardLeft
          title="Lemon"
          subTitle="Health Benefits, Risks& Nutrition Facts"
          desc="Pineapples are tropical fruit that are rich in vitamins, enzymes and antioxidents. They may help boost the immune system, build strong bones and aid indigestion. Also, despite their sweetness, pineapples are low in calories."
          img={lemon}
        />
        <FruiteCardRight
          title="Watermelon"
          subTitle="Watermelon mint juice made in a blender"
          desc="Refreshing and cool watermelon juice with a splash of lime is the perfect drink to enjoy on a hot summer day. To make the watermelon juice, I first cut them into chunks and leave them in the refrigerator to chill for 1-2 hours before blending."
          img={waterMelon}
        />
        {/* Sustainability */}
        <Sustainability />
      </section>
    </>
  );
};
export default Home;
