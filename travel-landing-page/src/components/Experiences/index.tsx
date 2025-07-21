"use client";

import React, { Fragment, useState } from "react";

import { Experience } from "@/types";

import { Separator } from "../ui/separator";
import ExperienceItem from "../ExperienceItem";

interface ExperiencesProps {
  list: Experience[];
  onChange: (index: number) => void;
}

const Experiences = ({ list, onChange }: ExperiencesProps) => {
  const [indexActive, setIndexActive] = useState<number>();

  const length = list.length;

  return (
    <div className="flex min-w-full items-center justify-between">
      {list?.map(({ label = "", title }, index) => {
        const isActive = indexActive === index;

        const hanChange = () => {
          if (indexActive === index) return;

          setIndexActive(index);
          onChange(index);
        };

        return (
          <Fragment key={index}>
            <ExperienceItem label={label} title={title} isActive={isActive} onClick={hanChange} />
            {index < length - 1 && (
              <Separator orientation="vertical" className="rotate-20 max-h-12 lg:max-h-17.5" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Experiences;
