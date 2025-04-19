"use client";

import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bgs/img1.jpg"
          fill
          alt="Home Page Header image"
          className="object-cover"
          priority
          sizes="(max-width: 320px) 100vw, (max-width: 1920px) 100vw, 100vw"
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 xl:bottom-section xl:left-section">
        <div>
          <div className="text-white space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            <h1
              className="text-3xl font-bold leading-[1.1] uppercase
              xs:text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              2xl:text-9xl
              3xl:text-[130px]" // 130px still custom, optional: define "10xl" if you want
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
