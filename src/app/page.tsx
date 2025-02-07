import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import Donate from "@/components/Home/Donate/Donate";
import Gallery from "@/components/Home/Gallery/Gallery";
import HeaderCarousel from "@/components/Home/HeaderCarousel/HeaderCarousel";
import NavBar from "@/components/NavBar/NavBar";
import NewsLetter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <main className="container p-6 mx-auto">
        <NavBar />
        {/* Carousel */}
        <section className="mt-20">
          <HeaderCarousel />
        </section>
        <section className="flex flex-col items-center gap-10 py-10 mx-10 mt-20 mb-20 md:flex-row">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width="480"
              height="640"
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-base text-gray-700">
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
        <section className="min-h-screen mt-10">
          <Gallery />
        </section>
        {/* Support Section & Newsletter Section */}
        <section className="flex flex-col items-center gap-10 mt-10 mb-20 md:flex-row">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Donate />
          </div>
          <div className="w-full md:w-1/2">
            <NewsLetter />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
