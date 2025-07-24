import React, { useState } from "react";

import { LocationItem } from "@/types/location";

import { PAGE_SIZE } from "@/constants/common";
import { API_ROUTES } from "@/constants/routes";

import Button from "@/components/Button";
import LocationCard from "@/components/LocationCard";

interface Props {
  initialLocation: LocationItem[];
}

const LoadMore = ({ initialLocation }: Props) => {
  const [locations, setLocations] = useState<LocationItem[]>(initialLocation);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ROUTES.LOCATIONS}?page=${page}&limit=${PAGE_SIZE}`);
      const newLocation: LocationItem[] = await res.json();
      const length = newLocation?.length || 0;

      if (length) {
        setLocations((prev) => [...prev, ...newLocation]);
        if (length < PAGE_SIZE) {
          setHasMore(false);
        }

        if (length === PAGE_SIZE) {
          setPage((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.error("Error loading more locations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto my-10 md:my-20 lg:my-25">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {locations.map((item, index) => {
          return (
            <div key={item?.id || index} className="md:col-span-1">
              <LocationCard item={item} href="" />
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-25">
          <Button className="w-37.5" onClick={handleLoadMore}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default LoadMore;
