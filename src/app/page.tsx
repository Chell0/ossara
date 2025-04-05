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
        <section
          className="flex flex-col items-center justify-center 
    gap-4 xs:gap-5 sm:gap-6 md:gap-7 md2:gap-8 tab:gap-10 tab-xl:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 
    px-2 xs:px-3 sm:px-4 md:px-5 md2:px-6 tab:px-8 tab-xl:px-10 lg:px-12 xl:px-14 2xl:px-16 
    py-6 xs:py-8 sm:py-10 md:py-12 md2:py-14 tab:py-16 tab-xl:py-20 lg:py-24 xl:py-28 2xl:py-32 
    min-h-[50vh] xs:min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] md2:min-h-[70vh] tab:min-h-screen 
    tab:flex-row"
        >
          {/* Image Container */}
          <div
            className="flex flex-1 items-center justify-center w-full 
      tab:basis-1/2"
          >
            <div
              className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg md2:max-w-xl tab:max-w-md tab-xl:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 
        h-[20vh] xs:h-[25vh] sm:h-[30vh] md:h-[35vh] md2:h-[40vh] tab:h-[45vh] tab-xl:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh]"
            >
              <Image
                src="/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg"
                alt="About Photo"
                fill
                quality={100}
                className="object-cover rounded-md shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className="flex flex-1 flex-col justify-center w-full 
      tab:basis-1/2"
          >
            <p
              className="text-[10px] xs:text-xs sm:text-sm md:text-base md2:text-base tab:text-base tab-xl:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl 
        leading-relaxed text-black"
            >
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
        <div className="flex flex-col md:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 md:p-6 shadow-sm max-w-2xl mx-4 sm:mx-auto mt-6 md:mt-10 gap-4">
          <p className="text-gray-800 text-base text-center sm:text-left">
            Unterstütze Uns Und Werde Supporter*in
          </p>
          <Link
            href="/fordern"
            className="flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6ac00] transition-colors"
          >
            Fördern & Spenden
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-[#fcc41b] rounded-xl p-4 md:p-6 shadow-sm max-w-2xl mx-4 sm:mx-auto mt-6 md:mt-10 gap-4">
          <p className="text-gray-800 text-base text-center sm:text-left">
            Anmeldung zum Newsletter
          </p>
          <Link
            href="#"
            className="flex items-center justify-center space-x-1 px-4 py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white hover:bg-[#e6ac00] transition-colors"
          >
            Anmelden
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
}
