import Image from "next/image";

export default function Projektpartners() {
  return (
    <>
      <div className="mx-auto">
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/InternationaleZusammenarbeit/OSSARA_Vorstand_Partners.jpg"
              fill
              alt="Home Page Header image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div
              className="3xl:space-y-13 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 "
            >
              <h1 className="font-extrabold 3xl:text-[160px] text-[#d3103e] xs2:text-5xl xs:text-4xl uppercase leading-[1.1]text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px]">
                <span className="block">Projekt.</span>
                <span className="block">Partners.</span>
              </h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
