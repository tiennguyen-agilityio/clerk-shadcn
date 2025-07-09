import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white font-acme text-[13px] hover:bg-orange-700 transition-colors duration-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
