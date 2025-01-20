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
      <section className="p-6">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-w-16 h-72 overflow-hidden shadow-xl group"
            >
              <Image
                fill={true}
                src={image.src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:brightness-50"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col space-y-1 bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-extrabold text-left text-white text-lg uppercase">
                  {image.name}
                </p>
                <p className="font-medium text-left text-white text-base">
                  {image.position}
                </p>
                <p className="font-medium text-left text-white text-base">
                  {image.büro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
