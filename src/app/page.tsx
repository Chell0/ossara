import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Home/Gallery/Gallery";
import HeaderCarousel from "@/components/Home/HeaderCarousel/HeaderCarousel";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        {/* Carousel */}
        <HeaderCarousel />
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-8">
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center md:w-1/2">
            <div className="relative h-[30vh] w-full max-w-2xl md:h-[40vh]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="About Photo"
                fill
                quality={100}
                className="object-cover rounded-md shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-center md:w-1/2">
            <p className="text-base leading-relaxed text-black md:text-md md:leading-loose">
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
        <div
          className={`flex justify-between items-center border border-[#fcc41b] rounded-xl p-8 shadow-sm max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-gray-800 text-lg`}>
            Unterstütze Uns Und Werde Supporter*in
          </p>
          <Link
            href={`/fordern`}
            className={`flex items-center space-x-2 px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white`}
          >
            Fördern & Spenden
          </Link>
        </div>
        {/* Newsletter Section */}
        <div
          className={`flex justify-between items-center border border-[#fcc41b] rounded-xl p-8 shadow-sm max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-gray-800 text-lg`}>Anmeldung zum Newsletter</p>
          <Link
            href={`#`}
            className={`flex items-center space-x-2 px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-sm bg-[#fcc41b] text-white`}
          >
            Anmelden
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
}
