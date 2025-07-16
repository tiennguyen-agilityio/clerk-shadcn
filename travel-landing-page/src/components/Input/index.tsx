import React, { ComponentProps, useId } from "react";

import { Input as ShadCNInput } from "@/components/ui/input";

type InputProps = ComponentProps<"input"> & {
  label?: string;
};

const Input = ({ label = "", ...props }: InputProps) => {
  const id = useId();

  return (
    <div className="text-sm">
      {label && (
        <label className="pb-1.25" htmlFor={id}>
          {label}
        </label>
      )}
      <ShadCNInput id={id} {...props} />
    </div>
  );
};

export default Input;
