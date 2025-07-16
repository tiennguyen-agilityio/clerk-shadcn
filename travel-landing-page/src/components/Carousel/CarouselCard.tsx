import React from "react";

import { Card, CardContent, CardHeader } from "../ui/card";

interface CarouselItem {
  id?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CarouselCardProps {
  item: CarouselItem;
  isActive?: boolean;
  imageHeight?: number | string;
}

const CarouselCard = ({ item, isActive = false, imageHeight = "475px" }: CarouselCardProps) => {
  const { title, description, image, alt } = item || {};

  return (
    <Card className="p-0 border-none hover:shadow-none">
      <CardHeader className="flex justify-between items-center h-25 p-0 gap-5">
        {isActive && (
          <>
            <h3 className="w-1/2 font-secondary text-3xl animate-fade-in">{title}</h3>
            <p className="w-1/2 text-sm line-clamp-5 animate-fade-in pr-2">{description}</p>
          </>
        )}
      </CardHeader>
      <CardContent
        className="flex items-center justify-center p-0 mb-0 rounded-sm"
        style={{ height: imageHeight }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover overflow-hidden rounded-sm"
        />
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
