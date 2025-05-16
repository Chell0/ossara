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
          sizes="(max-width: 320px) 100vw, (max-width: 2560px) 100vw, 100vw"
        />
      </div>

      {/* Sticky Text Content */}
      <div className="relative z-10 h-full">
        <div className="sticky bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 xl:bottom-section xl:left-section flex items-end h-full px-4 sm:px-6 xl:px-section">
          <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            <h1
              className="text-white text-3xl font-bold leading-[1.1] uppercase
            xs:text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-7xl
            2xl:text-9xl
            3xl:text-[180px]"
            >
              <span className="block">GEMEINSAM GEGEN</span>
              <span className="block">Loremipsum dolor</span>
              <span className="block">Lorem sit</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
