import React from "react";

import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";

interface SkeletonLocationCard {
  imageHeight?: number;
}

const SkeletonLocationCard = ({ imageHeight = 340 }: SkeletonLocationCard) => {
  return (
    <Card className="w-full h-full p-0">
      <CardHeader className="relative p-0" style={{ height: imageHeight }}>
        <Skeleton className="w-full" style={{ height: imageHeight }} />
      </CardHeader>
      <CardContent className="px-7.5 pt-4 pb-6">
        <p className="font-bold text-lg">
          <Skeleton className="w-full h-7" />
        </p>
        <div className="flex items-center gap-1.25 mt-3 text-ring">
          <Skeleton className="w-full h-6" />
        </div>
        <div className="flex items-center gap-1.25 mt-4 text-chart-2">
          <Skeleton className="w-full h-6" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SkeletonLocationCard;
