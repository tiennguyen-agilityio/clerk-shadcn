import React from "react";

import { STATISTICS_BY_SERVICES } from "@/constants/common";

import StatisticsCard from "@/components/StatisticsCard";

const StatisticsSection = () => {
  return (
    <section className="container mx-auto flex justify-between my-20">
      {STATISTICS_BY_SERVICES.map(({ title, value }) => (
        <StatisticsCard key={title} title={title} value={value} />
      ))}
    </section>
  );
};

export default StatisticsSection;
