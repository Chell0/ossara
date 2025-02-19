import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery/img-1.jpg", text: "ÜBER UNS" },
    {
      src: "/gallery/integrative.jpg",
      text: "INTEGRATIVE STADTTEILARBEIT",
    },
    { src: "/gallery/lobby.jpg", text: "LOBBY UND NETZWERKARBEIT" },
    { src: "/gallery/bildungsarbeit.jpg", text: "DEKOLONIALE BILDUNGSARBEIT" },
    { src: "/gallery/anti-schwarzer.jpg", text: "ANTI-SCHWARZEN RASSISMUS" },
    {
      src: "/gallery/dekoloniale-internationiale-zusammenarbeit.jpg",
      text: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-square overflow-hidden shadow-xl group rounded-2xl"
              >
                <Image
                  fill
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-4 text-center text-white text-lg md:text-xl font-bold drop-shadow-lg backdrop-blur-sm">
                    {image.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
