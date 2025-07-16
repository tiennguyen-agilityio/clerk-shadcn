import React, { ComponentProps, useId } from "react";

import { Input as ShadCNInput } from "@/components/ui/input";
import { Label } from "../ui/label";

type InputProps = ComponentProps<typeof ShadCNInput> & {
  label?: string;
};

const Input = ({ label = "", disabled, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className="text-sm">
      {label && (
        <Label htmlFor={id} className="pb-1.25">
          {label}
        </Label>
      )}

      <ShadCNInput id={id} disabled={disabled} {...props} />
    </div>
  );
};

export default Input;
