"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

// Types
import { LocationItem } from "@/types";

// Utils
import { formatMinutes } from "@/utils";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationCardProps {
  item: LocationItem;
  href?: string;
}

const LocationCard = ({ item, href = "" }: LocationCardProps) => {
  const {
    title = "",
    image,
    name = "",
    time = 0,
    fee = 0,
    address = "",
    rating = 0,
    reviews = 0,
  } = item;

  return (
    <Link href={href} className="block h-full group">
      <Card className="w-full h-full p-0 flex flex-row md:flex-col justify-between ">
        <CardHeader className="block w-1/2 md:w-full relative p-0 grow-1 bg-muted overflow-hidden">
          <CardTitle className="absolute bottom-0 p-7.5 z-2 font-secondary text-2xl text-white text-shadow-sm line-clamp-2">
            {title}
          </CardTitle>
          <img
            src={image}
            alt={name}
            className="object-cover h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </CardHeader>
        <CardContent className="w-1/2 md:w-full px-7.5 pt-4 mb-0 pb-6">
          <p className="font-bold text-lg">
            From ${fee}/person · {formatMinutes(time)}
          </p>

          <div className="flex items-center gap-1.25 mt-3 text-ring">
            <MapPin />
            <p className="text-sm truncate">{address}</p>
          </div>
          <div className="flex items-center gap-1.25 mt-4 text-chart-2">
            <Star />
            <span>{rating}</span>
            <span className="text-ring">({reviews})</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LocationCard;
