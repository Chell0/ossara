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
      <div
        className="absolute bottom-4 left-3 
            xs:bottom-5 xs:left-4
            xs2:bottom-6 xs2:left-5
            sm:bottom-7 sm:left-6
            sm2:bottom-8 sm2:left-7
            md:bottom-9 md:left-8
            md2:bottom-10 md2:left-9
            tab-sm:bottom-12 tab-sm:left-10
            tab:bottom-14 tab:left-12
            tab-lg:bottom-16 tab-lg:left-14
            tab-xl:bottom-18 tab-xl:left-16
            lg:bottom-20 lg:left-20
            lg2:bottom-22 lg2:left-22
            xl:bottom-24 xl:left-24
            xl2:bottom-26 xl2:left-28
            2xl:bottom-28 2xl:left-24
            3xl:bottom-32 3xl:left-36
            land-xs:bottom-2 land-xs:left-2
            land-sm:bottom-4 land-sm:left-4"
      >
        <div>
          <div
            className="text-white space-y-1
                xs:space-y-1.5
                xs2:space-y-2
                sm2:space-y-2.5
                md:space-y-3
                tab-sm:space-y-4
                tab:space-y-5
                tab-xl:space-y-6
                xl:space-y-7
                3xl:space-y-8"
          >
            <h1
              className="text-3xl font-bold
                  xs:text-[34px]
                  xs2:text-[38px]
                  sm:text-[42px]
                  sm2:text-[46px]
                  md:text-5xl
                  md2:text-[54px]
                  tab-sm:text-6xl
                  tab:text-[68px]
                  tab-lg:text-7xl
                  tab-xl:text-7xl
                  lg:text-9xl
                  lg2:text-[100px]
                  xl:text-[100px]
                  xl2:text-[120px]
                  2xl:text-[120px]
                  3xl:text-[140px]
                  land-xs:text-2xl
                  land-sm:text-3xl
                  leading-[1.1] md:leading-[1.05] uppercase"
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
