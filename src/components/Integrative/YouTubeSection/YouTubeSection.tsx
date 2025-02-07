"use client";

import YouTube, { YouTubeProps } from "react-youtube";

import { YouTubeSectionProps } from "@/app/lib/interface";

export default function YouTubeSection({ videoId }: YouTubeSectionProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const playerOptions: YouTubeProps["opts"] = {
    height: "360",
    width: "620",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className={`rounded-xl py-10`}>
      {/* YouTube Video Player */}
      <YouTube videoId={videoId} opts={playerOptions} onReady={onPlayerReady} />
    </section>
  );
}
