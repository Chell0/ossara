import Image from "next/image";

export default function LandingSection() {
  return (
    <div className="relative 3xl:h-[100vh] xs2:h-[20.1vh] xs:h-[17.2vh] w-full sm:h-[22.8vh] md:h-[41.2vh] lg:h-[55vh] xl:h-[68.6vh] 2xl:h-[77.2vh]">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/bgs/img1.jpg"
          alt="Mountain landscape with dramatic sky"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full">
        <section className="absolute bottom-1 left-1 flex h-full items-end px-4 sm:bottom-3 sm:left-1 sm:px-6 md:bottom-4 md:left-3 lg:bottom-6 lg:left-3">
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            <h1 className="animate-fade-in font-bold 3xl:text-[12rem] text-2xl text-white xs2:text-xl xs:text-lg uppercase leading-[1.1] sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
              <span className="block animate-slide-up">GEMEINSAM GEGEN</span>
              <span className="block animate-slide-up delay-200">
                Loremipsum dolor
              </span>
              <span className="block animate-slide-up delay-400">
                Lorem sit
              </span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
