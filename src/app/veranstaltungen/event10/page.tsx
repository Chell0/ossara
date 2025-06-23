import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-[#fff6ea]">
      <main className="p-6">
        <NavBar/>
        <div className="container mx-auto mt-20 max-w-screen-md p-10">
          {/* Events Image */}
          <div
            className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/veranstaltungen/wenDo.png`}
              alt={`Decolonize Polizei Photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`rounded-md object-contain object-center`}
              style={{maxHeight: "640px"}}
            />
          </div>

          {/* Events Title */}
          <h1
            className={`mt-20 text-left font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            WenDo-Kurs für Frauen
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 10. - 11. Juni
            2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 10:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            WenDo heißt die eigenen Handlungsmöglichkeiten kennen, das eigene
            Gefühl ernst nehmen
            und Vertrauen in die eigene Stärke und Wehrhaftigkeit haben. So
            können Konflikte und
            Bedrohungssituationen erfolgreich gelöst werden. Auf der Arbeit, in
            der U-Bahn, im
            Freund*innenkreis oder der Familie.
          </p>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
