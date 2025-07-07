import React from "react";

interface LogoProps {
  text?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ text = "Travelsy", className = "" }: LogoProps) => {
  return <h1 className={`text-lg font-acme text-white-500 ${className}`}>{text}</h1>;
};

export default Logo;
