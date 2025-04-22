import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="container mx-auto mt-20 bg-white px-4 py-8">
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
        {/* Text Cells */}
        <div className="flex items-center justify-center p-2 col-span-2 xs:col-span-1">
          <p className="text-smokyBlack text-base font-semibold text-center">
            Gefördert durch: ENGAGEMENT GLOBAL
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <p className="text-smokyBlack text-base font-semibold text-center">
            mit Mitteln des
          </p>
        </div>

        {/* Sponsor Logos */}
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="relative flex items-center justify-center w-full h-[80px] xs:h-[100px] sm:h-[120px] md:h-[15vh]"
          >
            <Image
              src={`/logos/image-${num}.${num === 1 ? "png" : num === 2 ? "jpeg" : "jpg"}`}
              alt={`Sponsor Logo ${num}`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 15vw"
              quality={100}
              className="object-contain p-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
