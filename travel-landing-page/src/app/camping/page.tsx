"use client";

import React, { useState } from "react";

import { Filter } from "@/types";
import { CAROUSELS, HOME_VIDEO } from "@/constants";
import { LOCATIONS } from "@/mocks";

import { VideoPlayer, Heading, FilterSection, LocationCard, Carousel, Button } from "@/components";

const CampingPage = () => {
  const [filter, setFilter] = useState<Filter>({
    budget: [1200, 10000],
    locations: [],
    categories: [],
  });

  const handleChangeFilter = (value: Filter) => {
    setFilter((prev) => ({
      ...prev,
      ...value,
    }));
  };
  const handleLoadMore = () => {};

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full">
        <VideoPlayer hasPlayed {...HOME_VIDEO} />
      </div>

      <section className="container mx-auto my-10 md:my-20 lg:my-25">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1">
            <FilterSection defaultValue={filter} onChange={handleChangeFilter} />

            <div className="my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.54609752619!2d36.73683192428136!3d-1.304579232416995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1aa1a3170915%3A0x1f2bb156cf666be4!2sRoyal%20Park%20Estate!5e0!3m2!1svi!2s!4v1753158109076!5m2!1svi!2s"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:col-span-2 h-auto">
            <Heading as="h4">Popular Locations</Heading>
            <div className="w-full mt-10 md:mt-12 lg:mt-25 grid grid-cols-1 md:grid-cols-2 gap-5">
              {LOCATIONS.slice(0, 4).map((item, index) => {
                return (
                  <div key={item?.id || index} className="md:col-span-1">
                    <LocationCard item={item} href="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sidebar-accent py-24 mb-20">
        <div className="container mx-auto">
          <Heading as="h6" className="font-bold text-ring mb-5">
            DISCOVER
          </Heading>
          <Carousel list={CAROUSELS} />
        </div>
      </section>

      <section className="container mx-auto my-10 md:my-20 lg:my-25">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOCATIONS.slice(4, 10).map((item, index) => {
            return (
              <div key={item?.id || index} className="md:col-span-1">
                <LocationCard item={item} href="" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <div className="container relative mx-auto bg-amber-100 ">
          <div className="absolute"></div>
        </div>
        <VideoPlayer hasPlayed {...HOME_VIDEO} />
      </section>

      <section className="container mx-auto my-10 md:my-20 lg:my-25">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOCATIONS.slice(0, 3).map((item, index) => {
            return (
              <div key={item?.id || index} className="md:col-span-1">
                <LocationCard item={item} href="" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-25">
          <Button className="w-37.5" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CampingPage;
