"use client";

import YouTube, { type YouTubeProps } from "react-youtube";
import type { YouTubeSectionProps } from "@/app/lib/interface";

export default function YouTubeSection({ videoId }: YouTubeSectionProps) {
  const onPlayerReady: YouTubeProps["onReady"] = event => {
    event.target.pauseVideo();
  };

  const playerOptions: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0, // Disable related videos at end
    },
  };

  return (
    <section className="mx-auto aspect-video w-full max-w-4xl overflow-hidden shadow-lg">
      <div className="relative h-full w-full">
        <YouTube
          videoId={videoId}
          opts={playerOptions}
          onReady={onPlayerReady}
          className="absolute top-0 left-0 h-full w-full"
          iframeClassName="w-full h-full"
          title="YouTube video player"
        />
      </div>
    </section>
  );
}
