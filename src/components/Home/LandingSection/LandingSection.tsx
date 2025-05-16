import Image from "next/image";

export default function LandingSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bgs/img1.jpg"
          alt="Mountain landscape with dramatic sky"
          fill
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full">
        <section className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 flex items-end h-full px-4 sm:px-6">
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            <h1 className="text-white text-3xl font-bold leading-[1.1] uppercase xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl animate-fade-in">
              <span className="block animate-slide-up">GEMEINSAM GEGEN</span>
              <span className="block animate-slide-up animation-delay-200">
                Loremipsum dolor
              </span>
              <span className="block animate-slide-up animation-delay-400">
                Lorem sit
              </span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
