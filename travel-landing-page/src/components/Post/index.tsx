import React from "react";
import Button from "../Button";
import { MoveRight } from "lucide-react";

interface PostProps {
  text: string;
  image: string;
  alt?: string;
  onReadMore?: () => void;
}

const Post = ({ text, image, alt = "", onReadMore }: PostProps) => {
  return (
    <div>
      <p className="text-sm h-38 line-clamp-4">{text}</p>
      <div className="relative">
        <img src={image} alt={alt} className="min-w-full h-auto object-cover" />

        {onReadMore && (
          <Button
            data-testid="readMore"
            variant="ghost"
            onClick={onReadMore}
            className="text-accent-foreground gap-6 absolute bottom-0 right-0 h-15 w-57 bg-white rounded-none"
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
