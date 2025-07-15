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
  imageHeight?: number;
}

const LocationCard = ({ item, href = "", imageHeight = 340 }: LocationCardProps) => {
  const {
    title = "",
    image = "",
    name = "",
    time = 0,
    fee = 0,
    address = "",
    rating = 0,
    reviews = 0,
  } = item;

  return (
    <Link href={href} className="block">
      <Card className="w-full p-0">
        <CardHeader className="relative p-0" style={{ height: imageHeight }}>
          <CardTitle className="absolute bottom-0 p-7.5 z-2 font-secondary text-2xl text-white">
            {title}
          </CardTitle>
          <img src={image} alt={name} className="object-cover" style={{ height: imageHeight }} />
        </CardHeader>
        <CardContent className="px-7.5 pt-4 pb-6">
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
