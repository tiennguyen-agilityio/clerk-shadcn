import React from "react";

import { HOME_VIDEO } from "@/constants/video";

import Heading from "@/components/Heading";
import VideoPlayer from "@/components/VideoPlayer";

const BlogsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full">
        <VideoPlayer hasPlayed {...HOME_VIDEO} />
      </div>

      <div className="container mx-auto mt-14 overflow-visible">
        <Heading as="h2">BlogsPage</Heading>
      </div>
    </div>
  );
};

export default BlogsPage;
