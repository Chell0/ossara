"use client";

import YouTube, { YouTubeProps } from "react-youtube";

import { YouTubeSectionProps } from "@/app/lib/interface";

export default function YouTubeSection({ videoId }: YouTubeSectionProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const playerOptions: YouTubeProps["opts"] = {
    height: "100%", // Make height responsive
    width: "100%", // Make width responsive
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="w-full h-full rounded-xl overflow-hidden">
      {/* YouTube Video Player */}
      <div className="relative w-full h-0 pb-[56.25%]">
        {" "}
        {/* 16:9 Aspect Ratio */}
        <YouTube
          videoId={videoId}
          opts={playerOptions}
          onReady={onPlayerReady}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
}
