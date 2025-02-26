// "use client";

// import { YouTubeSectionProps } from "@/app/lib/interface";
// import YouTube, { YouTubeProps } from "react-youtube";

// export default function YouTubeSection({ videoId }: YouTubeSectionProps) {
//   const onPlayerReady: YouTubeProps["onReady"] = (event) => {
//     event.target.pauseVideo();
//   };

//   const playerOptions: YouTubeProps["opts"] = {
//     height: "100%",
//     width: "100%",
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   return (
//     <section className="rounded-xl overflow-hidden w-full aspect-video">
//       <div className="relative w-full h-full">
//         <YouTube
//           videoId={videoId}
//           opts={playerOptions}
//           onReady={onPlayerReady}
//           className="absolute top-0 left-0 w-full h-full"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { YouTubeSectionProps } from "@/app/lib/interface";
import YouTube, { YouTubeProps } from "react-youtube";

export default function YouTubeSection({ videoId }: YouTubeSectionProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const playerOptions: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1, // Cleaner UI
    },
  };

  return (
    <section className="rounded-xl overflow-hidden w-full aspect-video max-w-4xl mx-auto shadow-lg">
      <div className="relative w-full h-full">
        <YouTube
          videoId={videoId}
          opts={playerOptions}
          onReady={onPlayerReady}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full" // Ensure iframe fills container
        />
      </div>
    </section>
  );
}
