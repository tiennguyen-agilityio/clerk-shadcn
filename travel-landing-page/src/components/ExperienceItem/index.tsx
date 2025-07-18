import React from "react";
import clsx from "clsx";

import { Experience } from "@/types";

interface ExperienceItem extends Experience {
  isActive?: boolean;
  onClick?: () => void;
}

const ExperienceItem = ({ title, label = "", isActive = false, onClick }: ExperienceItem) => {
  return (
    <div className="w-auto">
      {label && <p className="uppercase text-sm text-ring mb-1.5">{label}</p>}
      <button
        className={clsx(
          "capitalize w-auto border-b-1 pr-5 border-transparent hover:text-accent-foreground hover:border-accent-foreground",
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
