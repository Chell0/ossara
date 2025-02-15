import Image from "next/image";

export default function TeamSection() {
  const images = [
    {
      src: "/team/SalwaTchakala.JPG",
      name: "Salwa Tchakala",
      position: "Assistentin der Geschäftsführung",
      büro: "Kara, Togo",
    },
    {
      src: "/team/NataanmanLare.JPG",
      name: "Nataan-man Lare",
      position: "Assistentin für Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/team/Logtabamaana.JPG",
      name: "B. Logtaba Maana",
      position: "Leitung Monitoring und Evaluation",
      büro: "Kara, Togo",
    },
    {
      src: "/team/SalwaTchakala.JPG",
      name: "Salwa Tchakala",
      position: "Assistentin der Geschäftsführung",
      büro: "Kara, Togo",
    },
    {
      src: "/team/NataanmanLare.JPG",
      name: "Nataan-man Lare",
      position: "Assistentin für Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/team/Logtabamaana.JPG",
      name: "B. Logtaba Maana",
      position: "Leitung Monitoring und Evaluation",
      büro: "Kara, Togo",
    },
    {
      src: "/team/SalwaTchakala.JPG",
      name: "Salwa Tchakala",
      position: "Assistentin der Geschäftsführung",
      büro: "Kara, Togo",
    },
    {
      src: "/team/NataanmanLare.JPG",
      name: "Nataan-man Lare",
      position: "Assistentin für Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/team/Logtabamaana.JPG",
      name: "B. Logtaba Maana",
      position: "Leitung Monitoring und Evaluation",
      büro: "Kara, Togo",
    },
    {
      src: "/team/SalwaTchakala.JPG",
      name: "Salwa Tchakala",
      position: "Assistentin der Geschäftsführung",
      büro: "Kara, Togo",
    },
    {
      src: "/team/NataanmanLare.JPG",
      name: "Nataan-man Lare",
      position: "Assistentin für Projektmanagement",
      büro: "Kara, Togo",
    },
    {
      src: "/team/Logtabamaana.JPG",
      name: "B. Logtaba Maana",
      position: "Leitung Monitoring und Evaluation",
      büro: "Kara, Togo",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     sm:gap-6 md:gap-8"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden rounded-lg shadow-xl
                      hover:shadow-2xl transition-all duration-300 group"
            >
              <Image
                src={image.src}
                alt={`Portrait of ${image.name}`}
                fill
                sizes="(max-width: 640px) 90vw,
                     (max-width: 768px) 45vw,
                     (max-width: 1024px) 30vw,
                     23vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={90}
                priority={index < 4} // Only prioritize first 4 images
              />

              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/70">
                <p className="font-bold text-white text-sm sm:text-base md:text-lg truncate">
                  {image.name}
                </p>
                <p className="text-white text-xs sm:text-sm md:text-base opacity-90 truncate">
                  {image.position}
                </p>
                <p className="text-white text-xs sm:text-sm opacity-80 truncate">
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
