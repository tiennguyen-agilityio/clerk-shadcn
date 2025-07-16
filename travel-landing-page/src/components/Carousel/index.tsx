"use client";

import React, { ComponentProps, useState, useEffect } from "react";

import { CarouselItem } from "@/types";

import {
  Carousel as ShadCNCarousel,
  CarouselContent,
  CarouselItem as ShadCNCarouselItem,
  CarouselApi,
  CarouselPagination,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";

interface CarouselProps extends ComponentProps<"div"> {
  list: CarouselItem[];
}

const Carousel = ({ list }: CarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api?.selectedScrollSnap() + 1);

    api?.on("select", () => {
      setCurrent(api?.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ShadCNCarousel
      opts={{
        align: "start",
      }}
      setApi={setApi}
      orientation="horizontal"
      className="h-full max-h-xs"
    >
      <CarouselContent className="flex gap-0">
        {list.map((item, index) => {
          const isActive = index + 1 === current;
          return (
            <ShadCNCarouselItem key={index} className="flex flex-col basis-2/3">
              <CarouselCard item={item} isActive={isActive} />
            </ShadCNCarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPagination />
    </ShadCNCarousel>
  );
};

export default Carousel;
