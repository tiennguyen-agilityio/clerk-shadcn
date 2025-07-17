import React, { ComponentProps } from "react";

import { Toggle } from "@/components/ui/toggle";

type ExperienceItem = ComponentProps<typeof Toggle> & {
  title: string;
  label?: string;
};

const ExperienceItem = ({ title, label = "", ...props }: ExperienceItem) => {
  return (
    <div className="w-auto">
      {label && <p className="uppercase text-sm text-ring mb-1.5">{label}</p>}
      <Toggle {...props} asChild>
        <p className="capitalize">{title}</p>
      </Toggle>
    </div>
  );
};

export default ExperienceItem;
