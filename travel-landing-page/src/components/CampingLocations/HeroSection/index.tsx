import React from "react";

import { HOME_VIDEO } from "@/constants/video";

import VideoPlayer from "@/components/VideoPlayer";
import Heading from "@/components/Heading";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <VideoPlayer autoPlay iconPosition="bottom-left" {...HOME_VIDEO} />
      <div className="absolute w-full top-10 md:top-15 lg:top-20 xl:top-34 z-1">
        <div className="container mt-10 mx-auto h-100">
          <div className="text-sm text-white">
            <p className="mb-5 text-shadow-sm">Experience a Different Africa</p>
            <Heading as="h1" className="text-shadow-sm">
              Last Minute Festive
              <br />
              Packages From
              <br />
              Superbreak
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
