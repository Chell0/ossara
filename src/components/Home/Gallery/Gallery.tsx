import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/images/Veranstaltungen/OSSARA_Lobbyarbeit_Netzwerken.jpg",
      text: "VERANSTALTUNGEN",
    },
    {
      src: "/images/Bildungsarbeit/BILDUNGSARBEIT_MACHTBEWUSST.jpg",
      text: "DEKOLONIALE BILDUNGSARBEIT",
    },
    {
      src: "/images/IntegrativeStadtteilarbeit/INTEGRATIVESTADTTEILARBEIT_STADTTEIL_ARBEIT.jpg",
      text: "INTEGRATIVE STADTTEILARBEIT",
    },
    {
      src: "/images/Lobby/LOBBYARBEIT_LOKAL.VERNETZT.jpg",
      text: "LOBBY UND NETZWERKSTATT",
    },
    {
      src: "/images/AntischwarzerRassismus/ANTISCHWARZERRASSISMUS.jpg",
      text: "ANTI-SCHWARZEN RASSISMUS",
    },
    {
      src: "/images/InternationaleZusammenarbeit/INTERNATIONALEZUSAMMENARBEIT.jpg",
      text: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl pt-section">
          <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-section xl:grid-cols-3 xl:gap-section-lg auto-rows-fr">
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  quality={100}
                  priority={false}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 text-center text-white text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold drop-shadow-md backdrop-blur-sm">
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
