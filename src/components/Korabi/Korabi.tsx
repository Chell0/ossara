import Image from "next/image";

export default function Korabi() {
  return (
    <>
      <div>
        {/* Header Setion */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Bildungsarbeit/OSSARA_Integrative_Stadtarbeit.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-2 xs:bottom-8 xs:left-3 xs2:bottom-9 xs2:left-4 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div
              className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-13
              "
            >
              <h1 className="text-[#eb7b24] font-extrabold uppercase leading-[1.1]text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] 3xl:text-[160px]">
                <span className="block">KoRaBi.</span>
              </h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
