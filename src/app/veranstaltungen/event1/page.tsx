import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative">
      <main className="absolute bg-[#fff6ea] p-2">
        <NavBar />
        <div className="container mx-auto mt-6 max-w-screen-md p-4 sm:mt-10 sm:p-6 md:p-8 lg:p-10">
          {/* Events Image */}
          <div className="mt-14 mb-4 flex items-center justify-center sm:mt-16 sm:mb-8">
            <Image
              src={`/veranstaltungen/decolonize-kirche.png`}
              alt={`Decolonize-kirche photo`}
              width={1080}
              height={872}
              priority
              quality={100}
              className="h-auto max-h-[240px] w-full rounded-md object-contain object-center sm:max-h-[320px] md:max-h-[400px] lg:max-h-[480px]"
            />
          </div>

          {/* Events Title */}
          <h1 className="mt-4 text-left font-bold text-2xl text-[#eb7b24] uppercase leading-tight tracking-wide sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Decolonize Kirche
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800 sm:mt-3 sm:text-lg md:text-xl">
            What: Podiumsdiskussion
          </p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800 sm:mt-3 sm:text-lg md:text-xl">
            Wann: 26. November 2024
          </p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800 sm:mt-3 sm:text-lg md:text-xl">
            Time: 18:30 Uhr
          </p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed sm:mt-4 sm:text-lg md:text-xl">
            In unserer bevorstehenden Veranstaltung werden wir die
            vielschichtige Beziehung zwischen Kirche und Kolonialismus
            beleuchten und die weitreichenden Auswirkungen dieser Verbindung auf
            die globalen Gesellschaften untersuchen. Wir werden dabei die
            missionarischen Aktivitäten der Kirchen, ihre Rolle bei der
            Legitimation kolonialer Unternehmungen und die Folgen für Bildung
            und Kultur in betroffenen Regionen thematisieren. Zudem werfen wir
            einen Blick auf die heutige Partnerschaftsarbeit und zeigen
            verschiedene Perspektiven auf – von der Unterstützung des
            Kolonialismus durch die Kirche bis hin zu den Widerstandsbewegungen
            innerhalb kirchlicher Gemeinschaften.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
