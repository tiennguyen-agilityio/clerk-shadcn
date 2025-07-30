import React from "react";

interface TestimonialItemProps {
  title: string;
  descriptions: string;
  authorAvatar: string;
  authorName: string;
}

const TestimonialItem = ({
  title,
  descriptions,
  authorAvatar = "",
  authorName,
}: TestimonialItemProps) => {
  return (
    <div className="flex flex-col shadow h-full p-7.5 pb-10 bg-background">
      <p className="font-abel text-base line-clamp-2">{title}</p>
      <p className="text-sm mt-3.5 line-clamp-7">{descriptions}</p>
      <div className="flex items-center gap-2.5 mt-auto mb-0">
        <img className="w-10 h-10 rounded-full" src={authorAvatar} />
        <span className="text-sm line-clamp-1">{authorName}</span>
      </div>
    </div>
  );
};

export default TestimonialItem;
