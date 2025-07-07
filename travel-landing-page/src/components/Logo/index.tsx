import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface LogoProps {
  text?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ text = "Travelsy", className = "" }: LogoProps) => {
  return (
    <Link href="/" className={clsx("text-lg font-acme text-white-500", className)}>
      {text}
    </Link>
  );
};

export default Logo;
