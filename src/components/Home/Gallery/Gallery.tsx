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
      <div className="min-h-screen w-full p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-48 overflow-hidden shadow-xl group sm:h-64 rounded-xl"
            >
              <Image
                fill={true}
                src={image.src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100">
                <p className="p-1 font-bold text-center text-white text-xl drop-shadow-xl">
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
