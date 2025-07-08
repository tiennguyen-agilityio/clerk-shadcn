import React from "react";
import { ArrowIcon } from "../Icons";
import { DIRECTION } from "@/types";
import TestimonialItem from "./TestimonialItem";

const TESTIMONIALS = [
  {
    id: "01",
    title: "Best User Experience",
    descriptions:
      "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.",
    authorAvatar: "https://i.ibb.co/PG1p6pdg/avatar-02.png",
    authorName: "Derek Dunn",
  },
  {
    id: "02",
    title: "Friendly staff",
    descriptions:
      "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It’s also big tour business and the are many options.",
    authorAvatar: "https://i.ibb.co/cXVN8z3D/avatar-01.png",
    authorName: "Derek Dunn",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="flex justify-between items-stretch max-w-7xl mx-auto font-acme py-8 sm:py-12 lg:py-25 gap-2 lg:gap-5">
        <div className="flex-col w-1/3 ">
          <p className="text-gray-500 text-sm">Testimonials</p>
          <p className="text-[50px] mt-11 leading-none">
            What customers
            <br />
            <span className="font-abel text-[50px] leading-none text-orange-500">say about us</span>
          </p>
          <div className="flex items-center justify-around h-15 w-31 mt-28.5 bg-white">
            <ArrowIcon direction={DIRECTION.LEFT} />
            <div className="w-[1px] h-10 bg-gray-400 rotate-15" />
            <ArrowIcon direction={DIRECTION.RIGHT} />
          </div>
        </div>

        {TESTIMONIALS.map((item, index) => (
          <div key={item.id || index} className="flex-col w-1/3 ">
            <TestimonialItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
