import React from "react";

import { HOME_VIDEO } from "@/constants/video";
import VideoPlayer from "@/components/VideoPlayer";
import {
  HeroSection,
  CarouselSection,
  AboutSection,
  ServicesSection,
  StatisticsSection,
} from "@/components/Home";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CarouselSection />
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <VideoPlayer hasPlayed {...HOME_VIDEO} />
    </div>
  );
};

export default Home;
