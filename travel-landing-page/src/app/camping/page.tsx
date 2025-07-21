import React from "react";

import { HOME_VIDEO } from "@/constants";

import { VideoPlayer, Heading } from "@/components";

const CampingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full">
        <VideoPlayer hasPlayed {...HOME_VIDEO} />
      </div>

      <div className="container mx-auto mt-14 overflow-visible">
        <Heading as="h2">CampingPage</Heading>
      </div>
    </div>
  );
};

export default CampingPage;
