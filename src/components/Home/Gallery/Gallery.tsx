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
      <div className="min-h-screen w-full">
        <div className="container mx-auto max-w-8xl px-4 pt-section sm:px-6 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-section xl:grid-cols-3 xl:gap-section-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] w-full overflow-hidden shadow-md"
              >
                <Image
                  fill
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-103"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  quality={100}
                  priority={false}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-2 xs:p-3 text-center font-bold text-white text-xs xs:text-xs drop-shadow-md backdrop-blur-sm sm:p-4 sm:text-sm md:p-5 md:text-base lg:p-6 lg:text-lg xl:p-7 xl:text-xl 2xl:p-8 2xl:text-2xl">
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
