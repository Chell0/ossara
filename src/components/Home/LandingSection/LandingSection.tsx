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
      <div className="absolute bottom-3 left-4">
        <div>
          <div
            className="text-white space-y-1
          xs:space-y-1.5
          xs2:space-y-2
          sm:space-y-2.5
          md:space-y-3
          lg:space-y-4
          xl:space-y-6
          2xl:space-y-7
          3xl:space-y-8"
          >
            <h1
              className="text-3xl font-bold leading-[1.1] uppercase
            xs:text-[34px]
            xs2:text-[38px]
            sm:text-[42px]
            md:text-5xl md:leading-[1.05]
            lg:text-7xl
            xl:text-[90px]
            2xl:text-[110px]
            3xl:text-[130px]"
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
