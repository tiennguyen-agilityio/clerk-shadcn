"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import clsx from "clsx";

import Button from "../Button";

interface PostProps {
  text: string;
  image: string;
  alt?: string;
  onReadMore?: () => void;
  className?: string;
}

const Post = ({ text, image, alt = "", className = "", onReadMore }: PostProps) => {
  return (
    <div className={clsx("flex flex-start gap-5 md:gap-0 md:flex-col", className)}>
      <div className="w-1/2 md:w-full h-38">
        <p className="text-sm line-clamp-4">{text}</p>
      </div>
      <div className="relative w-1/2 md:w-full h-auto">
        <img src={image} alt={alt} className="min-w-full min-h-auto object-cover" />

        {onReadMore && (
          <Button
            data-testid="readMore"
            variant="ghost"
            onClick={onReadMore}
            className="text-accent-foreground gap-6 absolute bottom-0 right-0 text-sx md:text-sm h-12 md:h-15 md:w-57 bg-background rounded-none"
          >
            Read More
            <MoveRight />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Post;
