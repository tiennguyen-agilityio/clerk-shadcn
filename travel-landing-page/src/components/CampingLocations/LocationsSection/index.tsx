"use client";

import { LocationItem } from "@/types/location";
import { fetchLocations } from "@/services/location";
import { useLoadMore } from "@/hooks/useLoadMore";

import Button from "@/components/Button";
import LocationCard from "@/components/LocationCard";

const LocationsSection = () => {
  const {
    data: locations,
    onLoadMore,
    isLoading,
    hasMore,
    error,
  } = useLoadMore<LocationItem>({ fetcher: fetchLocations, limit: 3 });

  return (
    <section className="container mx-auto my-10 md:my-20 lg:my-25">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {locations?.map((item) => {
          return (
            <div key={item.id} className="md:col-span-1">
              <LocationCard item={item} href="" />
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-25">
          <Button className="w-37.5" onClick={onLoadMore}>
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}

      {error && <p className="text-error">{error}</p>}
    </section>
  );
};

export default LocationsSection;
