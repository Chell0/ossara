import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Home/Gallery/Gallery";
import LandingSection from "@/components/Home/LandingSection/LandingSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        {/* Carousel */}
        <LandingSection />
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:gap-12 md:px-8 lg:px-12 xl:px-20">
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center w-full md:w-1/2">
            <div className="relative w-full max-w-2xl h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]">
              <Image
                src="/bgs/img1.jpg"
                alt="About Photo"
                fill
                quality={100}
                className="object-cover rounded-md shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-center w-full md:w-1/2">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-black">
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
