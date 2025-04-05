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
      {/* <div className="min-h-screen w-full">
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
      </div> */}
      <div
        className="w-full 
    min-h-[50vh] xs:min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] md2:min-h-[70vh] tab:min-h-screen tab-xl:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[95vh] 2xl:min-h-screen"
      >
        <div
          className="max-w-8xl mx-auto 
      px-2 xs:px-3 sm:px-4 md:px-5 md2:px-6 tab:px-8 tab-xl:px-10 lg:px-12 xl:px-14 2xl:px-16 
      pt-6 xs:pt-8 sm:pt-10 md:pt-12 md2:pt-14 tab:pt-16 tab-xl:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32"
        >
          <div
            className="grid grid-cols-1 gap-4 xs:gap-5 sm:gap-6 md:gap-7 md2:gap-8 tab:grid-cols-2 tab:gap-10 tab-xl:grid-cols-3 tab-xl:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 
        auto-rows-fr"
          >
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1679px) 33vw, 25vw"
                  quality={100}
                  priority={false}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p
                    className="p-2 xs:p-2.5 sm:p-3 md:p-3.5 md2:p-4 tab:p-5 tab-xl:p-6 lg:p-7 xl:p-8 2xl:p-9 
                text-center text-white text-[10px] xs:text-xs sm:text-sm md:text-base md2:text-lg tab:text-xl tab-xl:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl 
                font-bold drop-shadow-md backdrop-blur-sm"
                  >
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
