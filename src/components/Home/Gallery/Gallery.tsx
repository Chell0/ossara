import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/engagieren/engagieren.jpg", text: "ÜBER UNS" },
    {
      src: "/integrative/img-05.jpg",
      text: "INTEGRATIVE STADTTEILARBEIT",
    },
    { src: "/loby/img-27.jpg", text: "LOBBY UND NETZWERKARBEIT" },
    { src: "/bildungsarbeit/img-49.jpg", text: "DEKOLONIALE BILDUNGSARBEIT" },
    { src: "/rassismus/img-54.jpg", text: "ANTI-SCHWARZEN RASSISMUS" },
    {
      src: "/dekoloniale/img-40.jpg",
      text: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] overflow-hidden shadow-md group"
              >
                <Image
                  fill
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-103"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  quality={70}
                  priority={false}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-3 text-center text-white text-sm md:text-lg font-bold drop-shadow-md backdrop-blur-sm">
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
