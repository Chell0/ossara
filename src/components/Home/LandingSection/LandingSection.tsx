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
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full px-4 pb-8 md:px-8 md:pb-16 lg:px-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-white space-y-2 md:space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none uppercase">
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
