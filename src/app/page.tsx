import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Home/Gallery/Gallery";
import LandingSection from "@/components/Home/LandingSection/LandingSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="bg-[#fef5db] relative">
        <NavBar />
        <LandingSection />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-section min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-section xl:gap-section-lg">
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center w-full lg:basis-1/2">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-[4/3]">
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
          <div className="flex flex-1 flex-col justify-center w-full lg:basis-1/2">
            <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-5xl leading-relaxed text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Support Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm max-w-2xl mt-section">
          <p className="text-gray-800 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl text-center sm:text-left">
            Unterstütze Uns Und Werde Supporter*in
          </p>
          <Link
            href="/fordern"
            className="flex items-center justify-center space-x-2 px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold rounded-lg shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6ac00] transition-colors"
          >
            Spenden
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm max-w-2xl mt-section">
          <p className="text-gray-800 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl text-center sm:text-left">
            Anmeldung zum Newsletter
          </p>
          <Link
            href="#"
            className="flex items-center justify-center space-x-1 px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold rounded-lg shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6ac00] transition-colors"
          >
            Anmelden
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
}
