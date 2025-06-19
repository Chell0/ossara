import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Home/Gallery/Gallery";
import LandingSection from "@/components/Home/LandingSection/LandingSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="relative bg-[#fef5db]">
        <NavBar/>
        <div className="h-screen">
          <LandingSection/>
        </div>

        <section
          className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-6 xs:gap-8 px-4 py-section sm:gap-10 sm:px-6 md:gap-12 lg:flex-row lg:gap-section lg:px-8 xl:gap-section-lg">
          {/* Image Container */}
          <div
            className="flex w-full flex-1 items-center justify-center lg:basis-1/2">
            <div
              className="relative aspect-[4/3] w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              <Image
                src="/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg"
                alt="About Photo"
                fill
                quality={100}
                className="object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className="flex w-full flex-1 flex-col justify-center lg:basis-1/2">
            <p
              className="3xl:text-5xl text-black text-xs xs:text-xs leading-relaxed sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum
              est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum
              lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus
              nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius
              eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery/>

        {/* Support Section */}
        <div
          className="container mx-auto mt-section flex max-w-2xl flex-col items-center justify-between rounded-xl border border-[#fcc41b] p-4 xs:p-5 px-4 shadow-sm sm:p-6 sm:px-6 md:flex-row md:p-8 lg:px-8">
          <p
            className="text-center text-gray-800 text-sm xs:text-sm sm:text-left sm:text-base md:text-lg lg:text-xl">
            Unterstütze Uns Und Werde Supporter*in
          </p>
          <Link
            href="/spenden"
            className="flex items-center justify-center space-x-2 rounded-lg bg-[#fcc41b] px-4 xs:px-5 py-2 xs:py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#e6ac00] sm:px-6 sm:py-3 md:px-8 md:py-4"
          >
            Spenden
          </Link>
        </div>

        {/* Newsletter Section */}
        <div
          className="container mx-auto mt-section flex max-w-2xl flex-col items-center justify-between rounded-xl border border-[#fcc41b] p-4 xs:p-5 px-4 shadow-sm sm:p-6 sm:px-6 md:flex-row md:p-8 lg:px-8">
          <p
            className="text-center text-gray-800 text-sm xs:text-sm sm:text-left sm:text-base md:text-lg lg:text-xl">
            Anmeldung zum Newsletter
          </p>
          <Link
            href="#"
            className="flex items-center justify-center space-x-1 rounded-lg bg-[#fcc41b] px-4 xs:px-5 py-2 xs:py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#e6ac00] sm:px-6 sm:py-3 md:px-8 md:py-4"
          >
            Anmelden
          </Link>
        </div>

        <Footer/>
      </main>
    </div>
  );
}
