import React from "react";
import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl lg:text-[80px] lg:leading-[95px] font-secondary",
  h2: "text-3xl md:text-4xl lg:text-[70px] lg:leading-[95px] font-secondary",
  h3: "text-2xl md:text-3xl lg:text-[60px] font-secondary",
  h4: "text-xl md:text-2xl lg:text-[50px] leading-[55px] font-secondary",
  h5: "text-lg font-secondary",
  h6: "text-sm font-secondary",
};

const Heading = ({ as: Tag = "h1", children, className = "" }: HeadingProps) => {
  return <Tag className={clsx(headingStyles[Tag], className)}>{children}</Tag>;
};

export default Heading;
