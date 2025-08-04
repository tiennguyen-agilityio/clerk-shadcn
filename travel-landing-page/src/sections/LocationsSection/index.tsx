"use client";

import { LocationItem } from "@/types/location";
import { fetchLocations } from "@/services/location";
import { useLoadMore } from "@/hooks/useLoadMore";

import Button from "@/components/Button";
import LocationCard from "@/components/LocationCard";
import Loading from "@/components/Loading";
import SkeletonLocationCard from "@/components/SkeletonLocationCard";

const LocationsSection = () => {
  const {
    data: locations,
    onLoadMore,
    isLoading,
    hasMore,
    error,
  } = useLoadMore<LocationItem>({ fetcher: fetchLocations, limit: 3 });

  return (
    <section className="container mx-auto my-10 md:my-20 lg:my-25 px-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {locations?.map((item) => {
          return (
            <div key={item.id} className="md:col-span-1">
              <LocationCard item={item} href="" />
            </div>
          );
        })}
      </div>

      {isLoading && (
        <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <SkeletonLocationCard key={i} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-25">
          <Button disabled={isLoading} className="w-37.5" onClick={onLoadMore}>
            Load More
            {isLoading && <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit!" />}
          </Button>
        </div>
      )}

      {error && <p className="text-error">{error}</p>}
    </section>
  );
};

export default LocationsSection;
