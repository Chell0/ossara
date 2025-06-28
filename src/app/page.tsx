import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
// import Gallery from "@/components/Home/Gallery/Gallery";
import LandingSection from "@/components/Home/LandingSection/LandingSection";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <main className="relative bg-[#fef5db] min-h-screen">
        <NavBar />
        <LandingSection />

        {/* Responsive About Section */}
        <div className="h-screen">
          <div className="grid md:grid-cols-2 gap-8 md:items-center md:text-left py-12 px-12 mx-auto w-full">
            {/* Image Container */}
            <div className="relative w-full h-full">
              <Image
                src="/images/Neuigkeiten/Arbeitssituation.jpg"
                alt="About Photo"
                fill
                quality={100}
                className="object-cover h-full shadow-md"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex items-center justify-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.
                Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
                Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.
                Integer augue odio, elementum ut pretium sed, gravida vel purus. Nulla vestibulum diam a sollicitudin viverra.
                Aenean convallis finibus laoreet. Quisque posuere odio odio, ac condimentum urna varius eu. Cras congue dolor id ante iaculis facilisis.
                Nullam in gravida massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum ut massa suscipit, vitae laoreet ligula condimentum.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {/* <Gallery /> */}

        {/* Support Section */}
        <div
          className="container mx-auto mt-12 flex max-w-2xl flex-col items-center justify-between rounded-xl border border-[#fcc41b] p-4 xs:p-5 px-4 shadow-sm sm:p-6 sm:px-6 md:flex-row md:p-8 lg:px-8 gap-4 md:gap-0">
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
          className="container mx-auto mt-8 flex max-w-2xl flex-col items-center justify-between rounded-xl border border-[#fcc41b] p-4 xs:p-5 px-4 shadow-sm sm:p-6 sm:px-6 md:flex-row md:p-8 lg:px-8 gap-4 md:gap-0">
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

        <Footer />
      </main>
    </div>
  );
}
