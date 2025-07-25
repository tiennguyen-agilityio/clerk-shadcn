import { HOME_VIDEO } from "@/constants/video";

import VideoPlayer from "@/components/VideoPlayer";
import {
  DiscoverSection,
  FilterSection,
  HeroSection,
  LocationsSection,
} from "@/components/CampingLocations";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Layout from "@/layout";

const CampingLocationsPage = () => {
  return (
    <Layout>
      <div className="w-full overflow-hidden">
        <HeroSection />
        <FilterSection />
        <DiscoverSection />
        <VideoPlayer hasPlayed {...HOME_VIDEO} />
        <Suspense fallback={<Loading />}>
          <LocationsSection />
        </Suspense>
      </div>
    </Layout>
  );
};

export default CampingLocationsPage;
