import { Suspense } from "react";

// Constants
import { HOME_VIDEO } from "@/constants/video";

// Components
import VideoPlayer from "@/components/VideoPlayer";
import Loading from "@/components/Loading";
import DiscoverSection from "@/sections/DiscoverSection";
import FilterSection from "@/sections/FilterSection";
import HeroSection from "@/sections/HeroSection";
import LocationsSection from "@/sections/LocationsSection";

const CampingLocationsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <FilterSection />
      <DiscoverSection />
      <VideoPlayer hasPlayed {...HOME_VIDEO} />
      <Suspense fallback={<Loading />}>
        <LocationsSection />
      </Suspense>
    </div>
  );
};

export default CampingLocationsPage;
