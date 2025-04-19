"use client";

import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="relative w-full h-[100dvh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bgs/img1.jpg"
          fill
          alt="Home Page Header image"
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-section left-section">
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-section-lg">
          <h1
            className="text-white font-bold leading-[1.1] uppercase
              text-3xl
              xs:text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              2xl:text-9xl
              3xl:text-[130px]"
          >
            <span className="block">GEMEINSAM GEGEN</span>
            <span className="block">Loremipsum dolor</span>
            <span className="block">Lorem sit</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
