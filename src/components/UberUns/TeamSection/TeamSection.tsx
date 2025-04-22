import Image from "next/image";

export default function TeamSection() {
  const images = [
    {
      src: "/images/UberUns/Team/NicolasMoumouni.jpg",
      name: "Nicolas A. S. Moumouni",
      position: "Vorstandsvorsitzender",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/placeholderTeamMate.jpg",
      name: "Dr. Sewa Okpar",
      position: "Vorstandsmitglied",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/JuliaKarimi.jpg",
      name: "Julia Karimi",
      position: "Vorstandsmitglied",
      büro: "Hamburg, Germany",
    },
    {
      src: "/images/UberUns/Team/GaetanTagba.jpg",
      name: "Gaetan Tagba",
      position: "Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/images/UberUns/Team/SalwaTchakala.jpg",
      name: "Salwa Tchakala",
      position: "Assistentin der Geschäftsführung",
      büro: "Kara, Togo",
    },
    {
      src: "/images/UberUns/Team/RitaZulu-Diawara.jpg",
      name: "Rita Zulu-Diawara",
      position: "Projektkoordination Integrative Stadtteilarbeit",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/HayfordAnyidoho.jpg",
      name: "Hayford Anyidoho",
      position: "Projektleitung Sprachförderung und Prüfungsvorbereitung",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/KatjaHeyn.jpg",
      name: "Katja Miriam Heyn",
      position: "Projektleitung Beratungs- und Bewerbungstraing",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/EmmaDittler.jpg",
      name: "Emma Dittler",
      position: "Projektassistenz Öffentlichkeitsarbeit",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/NataanmanLare.jpg",
      name: "Nataan-man Lare",
      position: "Assistentin Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/images/UberUns/Team/CatherineSchlueter.jpg",
      name: "Catherine Schlüter",
      position:
        "Fachpromotorin und Veranstaltungsmanagement für Dekolonisierung",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/Sonia.jpg",
      name: "Sonia Octavio",
      position: "Fachpromotorin und Öffentlichkeitsarbeit Dekolonisierung",
      büro: "Hamburg, Deutschland",
    },
    {
      src: "/images/UberUns/Team/CamiloAngola.jpg",
      name: "Camilo Angola",
      position:
        "Projektkoordination Vernetzung und Bewusstseinsbildung zu Anti-Schwarzen Rassismus",
      büro: "Hamburg, Deutschland",
    },
  ];

  return (
    <>
      <div className="container max-w-8xl">
        <div className="grid grid-cols-1 gap-4 xs2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs2:gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Image
                src={image.src}
                alt={`Portrait of ${image.name}`}
                fill
                sizes="(max-width: 425px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={100}
                priority={index < 4}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-2 xs:p-3 sm:p-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-white text-xs xs:text-sm sm:text-base md:text-lg truncate">
                  {image.name}
                </p>
                <p className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base opacity-90 line-clamp-3">
                  {image.position}
                </p>
                <p className="text-white text-[10px] xs:text-xs sm:text-sm opacity-80 truncate">
                  {image.büro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
