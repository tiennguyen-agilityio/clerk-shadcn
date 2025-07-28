"use client";

import React from "react";

import { InputOTP as ShadCNInputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface InputOTPProps {
  maxLength?: number;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const InputOTP = ({ maxLength = 0, disabled, ...props }: InputOTPProps) => {
  return (
    <ShadCNInputOTP maxLength={maxLength} disabled={disabled} size={200} {...props}>
      <InputOTPGroup data-testid="group">
        {Array.from({ length: maxLength }).map((_, i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </ShadCNInputOTP>
  );
};

export default InputOTP;
