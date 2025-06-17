import Image from "next/image";

export default function LandingSection() {
  return (
    <div className="relative w-full xs:h-[17.2vh] xs2:h-[20.1vh] sm:h-[22.8vh] md:h-[41.2vh] lg:h-[55vh] xl:h-[68.6vh] 2xl:h-[77.2vh] 3xl:h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
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
        <section className="absolute bottom-1 left-1 sm:bottom-3 sm:left-1 md:bottom-4 md:left-3 lg:bottom-6 lg:left-3 flex items-end h-full px-4 sm:px-6">
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            <h1 className="text-white font-bold leading-[1.1] uppercase text-2xl xs:text-lg xs2:text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl 3xl:text-[12rem] animate-fade-in">
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
