"use client";

import React from "react";

import { EXPERIENCES } from "@/constants/common";
import { HOME_VIDEO } from "@/constants/video";

import Experiences from "@/components/Experiences";
import VideoPlayer from "@/components/VideoPlayer";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const HeroSection = () => {
  const handleExperienceClick = () => {};

  const handleFindExperience = () => {};

  return (
    <div className="relative w-full">
      <VideoPlayer hasPlayed iconPosition="bottom-left" {...HOME_VIDEO} />
      <div className="absolute w-full top-10 md:top-15 lg:top-20 xl:top-34 z-1">
        <div className="container mt-10 mx-auto h-100">
          <div className="text-sm text-white">
            <p className="mb-5">Welcome to Travelsy</p>
            <Heading as="h1">
              Mother Earth <br /> Hosts Our Travels
            </Heading>
            <p className="mt-15">Camping Locations</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-30">
        <div className="container flex items-center mx-auto">
          <div className="h-full min-w-screen absolute right-100 bg-background z-1" />
          <div className="flex flex-1 align-center br-5 h-16 md:h-20 lg:h-30 z-30 bg-background">
            <Experiences data={EXPERIENCES} onItemClick={handleExperienceClick} />
          </div>
          <Button
            onClick={handleFindExperience}
            className="flex-none h-16 md:gap-5 text-sx lg:text-sm text-white md:h-20 lg:h-30 w-40 md:w-50 lg:w-65.5 rounded-none rounded-tr-[20px] z-30"
          >
            FIND AN EXPERIENCE
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
