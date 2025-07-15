"use client";

import React, { useId } from "react";
import clsx from "clsx";

import { Checkbox as ShadCNCheckbox, CheckBoxProps } from "../ui/checkbox";

type Props = CheckBoxProps & {
  label?: string;
  labelClassName?: string;
};

const Checkbox = ({ label, labelClassName, ...props }: Props) => {
  const id = useId();

  return (
    <div className="flex items-center space-x-2">
      <ShadCNCheckbox id={id} {...props} />
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
