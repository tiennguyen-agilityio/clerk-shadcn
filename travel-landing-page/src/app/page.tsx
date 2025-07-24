"use client";

import clsx from "clsx";
import React from "react";

import { EXPERIENCES, STATISTICS_BY_SERVICES } from "@/constants/common";
import { HOME_VIDEO } from "@/constants/video";
import { CAROUSELS } from "@/constants/carousel";
import { LOCATION_TILES } from "@/mocks";

import Experiences from "@/components/Experiences";
import Post from "@/components/Post";
import LocationTile from "@/components/LocationTile";
import VideoPlayer from "@/components/VideoPlayer";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import StatisticsCard from "@/components/StatisticsCard";
import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function Home() {
  const handleChange = () => {};

  const handleFindExperience = () => {};

  return (
    <div className="w-full overflow-hidden">
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
              <Experiences data={EXPERIENCES} onItemClick={handleChange} />
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

      {/* Carousel */}
      <div className="container mx-auto mt-14 overflow-visible">
        <Carousel list={CAROUSELS} />
      </div>

      {/* About Us */}
      <div className="container mx-auto mt-24">
        <section>
          <Heading as="h6" className="font-bold text-ring mb-5">
            ABOUT US
          </Heading>
          <Heading as="h2">
            A Guide To Rocky Mountain <br />
            Vacations
          </Heading>
          <div className="flex justify-between flex-wrap gap-5 mt-15">
            <Post
              className="w-full md:flex-1"
              image="https://i.ibb.co/KcPCsYQL/Rectangle-3.png"
              text="Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock."
              onReadMore={() => console.log("-----Read More")}
            />

            <Post
              className="w-full md:flex-1"
              image="https://i.ibb.co/MFjB1W7/Rectangle-Copy-2.png"
              text="In some places the water seeps down through cracks & eats out holes beneath the surface. When the side rock erodes away, an archway is left behind. Eventually the arch collapses, leaving one more pillars to join the rest. The ever changing vista of colors, spires, walls & archways is spectacular at any season, & the park is open all year round."
            />
          </div>
        </section>

        {/* Services */}
        <section className="mt-35">
          <Heading as="h6" className="font-bold text-ring mb-5">
            SERVICES
          </Heading>
          <Heading as="h2">
            Camping Locations
            <br />
            /Activities
          </Heading>
          <div className="w-full flex mb-7 mx-auto justify-center">
            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {LOCATION_TILES.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "rounded-[3px] overflow-hidden",
                    index === 0 && "sm:col-span-2 md:col-span-2"
                  )}
                >
                  <LocationTile key={index} {...item} link={`/${item.slug}`} />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-25 md:w-1/2 font-secondary text-2xl">
            We create awesome experiences by showcasing some of the best places and activities in
            the country
          </p>
          <div className="flex justify-between my-20">
            {STATISTICS_BY_SERVICES.map((stat) => (
              <StatisticsCard key={stat.title} title={stat.title} value={stat.value} />
            ))}
          </div>
        </section>
      </div>

      <VideoPlayer hasPlayed {...HOME_VIDEO} />
    </div>
  );
}
