import React from "react";
import clsx from "clsx";

import { Experience } from "@/types";
import Heading from "../Heading";

interface ExperienceItem extends Experience {
  isActive?: boolean;
  onClick?: () => void;
}

const ExperienceItem = ({ title, label = "", isActive = false, onClick }: ExperienceItem) => {
  return (
    <div className="w-auto">
      {label && (
        <Heading
          as="h6"
          className="uppercase font-bold text-xs text-center lg:text-left md:text-sm text-ring mb-1.5"
        >
          {label}
        </Heading>
      )}
      <button
        className={clsx(
          "capitalize w-full mx-1 text-sm md:text-base text-center lg:text-left border-b-1 pr-2 lg:pr-5 border-transparent hover:text-accent-foreground hover:border-accent-foreground",
          isActive && "text-accent-foreground border-b-accent-foreground"
        )}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default ExperienceItem;
