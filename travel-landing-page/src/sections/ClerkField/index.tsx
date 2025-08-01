"use client";

import { HTMLInputTypeAttribute, useState, ComponentProps } from "react";
import { Field, Label, Input, FieldError } from "@clerk/elements/common";
import clsx from "clsx";

import Button from "@/components/Button";

type ClerkFieldProps = Omit<ComponentProps<typeof Input>, "type"> & {
  name: string;
  label?: string;
  type?: Exclude<HTMLInputTypeAttribute, "otp">;
  className?: string;
  wrapperClassName?: string;
};

const ClerkField = ({
  name,
  type = "text",
  label = "",
  placeholder = "",
  wrapperClassName = "",
  className = "",
  ...props
}: ClerkFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const isPassword = type === "password";

  const handleToggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Field name={name} className={wrapperClassName}>
      <Label className="mb-1.25">{label}</Label>
      <div className="relative">
        <Input
          type={isPassword && isVisible ? "text" : type}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded border border-input p-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
            className
          )}
          {...props}
        />
        {isPassword && (
          <Button
            variant="ghost"
            type="button"
            className="absolute right-3 h-full px-1 text-link hover:text-link/90 hover:bg-transparent"
            onClick={handleToggleVisible}
          >
            {isVisible ? "Hide Password" : "Show Password"}
          </Button>
        )}
      </div>
      <FieldError className="text-error" />
    </Field>
  );
};

export default ClerkField;
