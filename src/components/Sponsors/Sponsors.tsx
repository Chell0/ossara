import { bebasNeue } from "@/app/fonts";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      {/* Sponsors section */}
      <section className="flex items-center justify-center w-full sm:px-2 mt-40">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`${bebasNeue.className} mt-20 text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
          >
            Unsere Sponsors
          </h2>
        </div>
      </section>
      <section className="px-4 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-center p-2 font-semibold bg-bone text-smokyBlack text-base">
            <p>Gefördert durch: ENGAGEMENT GLOBAL</p>
          </div>
          <div className="flex items-center justify-center p-2 font-semibold bg-bone text-smokyBlack text-base">
            <p>mit Mitteln des</p>
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-1.png`}
              alt="Sponsor Logo"
              width={240}
              height={240}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-2.jpeg`}
              alt="Sponsor Logo"
              width={240}
              height={240}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-3.jpg`}
              alt="Sponsor Logo"
              width={240}
              height={240}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-4.jpg`}
              alt="Sponsor Logo"
              width={240}
              height={240}
              quality={100}
              className={`object-contain`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
