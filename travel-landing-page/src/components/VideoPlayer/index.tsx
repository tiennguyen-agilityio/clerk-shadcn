"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";

import PauseIcon from "../Icons/PauseIcon";
import PlayIcon from "../Icons/PlayIcon";

interface VideoPlayerProps {
  src: string;
  poster: string;
  autoPlay?: boolean;
  hasPlayed?: boolean;
  iconPosition?: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const VideoPlayer = ({
  src,
  poster,
  hasPlayed = false,
  iconPosition = "center",
  autoPlay = false,
  className = "",
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-[33%] left-[33%]";
      case "top-right":
        return "top-[33%] right-[33%]";
      case "bottom-left":
        return "bottom-[33%] left-[25%]";
      case "bottom-right":
        return "bottom-[33%] right-[25%]";
      case "center":
      default:
        return "inset-0 m-auto";
    }
  };

  return (
    <div className="relative w-full min-w-full">
      <video
        ref={videoRef}
        className={clsx("w-full", className)}
        autoPlay={autoPlay}
        poster={poster}
        muted
      >
        <source src={src} type="video/mp4" />
      </video>

      {hasPlayed && (
        <div
          className={clsx(
            "w-21.25 h-21.25 absolute p-3 rounded-full border border-accent z-40",
            getPositionClasses(iconPosition)
          )}
        >
          <button
            data-testid="btn-icon"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            onClick={togglePlay}
            className="flex items-center justify-center w-15 h-15 rounded-full bg-accent transition-colors cursor-pointer"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon className="w-10 h-10" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
