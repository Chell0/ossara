import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      {/* Sponsors section */}
      <section className="flex items-center justify-center w-full sm:px-2">
        <div className="w-full max-w-md rounded-lg shadow-lg bg-blended-gradient sm:px-4">
          <h2 className="px-4 py-4 text-xl font-semibold text-center text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Unsere Sponsors
          </h2>
        </div>
      </section>
      <section className="px-4 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-center p-2 font-semibold bg-bone text-smokyBlack text-md">
            <p>Gefördert durch: ENGAGEMENT GLOBAL</p>
          </div>
          <div className="flex items-center justify-center p-2 font-semibold bg-bone text-smokyBlack text-md">
            <p>mit Mitteln des</p>
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-1.png`}
              alt="Sponsor Logo"
              width={150}
              height={150}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-2.jpeg`}
              alt="Sponsor Logo"
              width={150}
              height={150}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-3.jpg`}
              alt="Sponsor Logo"
              width={150}
              height={150}
              quality={100}
              className={`object-contain`}
            />
          </div>
          <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
            <Image
              src={`/logos/image-4.jpg`}
              alt="Sponsor Logo"
              width={150}
              height={150}
              quality={100}
              className={`object-contain`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
