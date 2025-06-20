import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="container mx-auto mt-20 bg-white px-4 py-8">
      <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6">
        {/* Text Cells */}
        <div className="col-span-2 xs:col-span-1 flex items-center justify-center p-2">
          <p className="text-center font-semibold text-base text-smokyBlack">
            Gefördert durch: ENGAGEMENT GLOBAL
          </p>
        </div>
        <div className="flex items-center justify-center p-2">
          <p className="text-center font-semibold text-base text-smokyBlack">mit Mitteln des</p>
        </div>

        {/* Sponsor Logos */}
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="relative flex h-[80px] xs:h-[100px] w-full items-center justify-center sm:h-[120px] md:h-[15vh]"
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
