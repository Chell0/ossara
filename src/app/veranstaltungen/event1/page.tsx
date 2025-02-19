import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative">
      <main className="absolute bg-[#fff6ea] p-2">
        <NavBar />
        <div className="container max-w-screen-md mx-auto mt-6 sm:mt-10 p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Events Image */}
          <div className="flex items-center justify-center mt-14 sm:mt-16 mb-4 sm:mb-8">
            <Image
              src={`/veranstaltungen/decolonize-kirche.png`}
              alt={`Decolonize-kirche photo`}
              width={1080}
              height={872}
              priority
              quality={100}
              className="object-contain object-center rounded-md w-full h-auto max-h-[240px] sm:max-h-[320px] md:max-h-[400px] lg:max-h-[480px]"
            />
          </div>

          {/* Events Title */}
          <h1 className="mt-4 sm:mt-6 text-left text-[#eb7b24] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wide">
            Decolonize Kirche
          </h1>

          {/* Event Type */}
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-800">
            What: Podiumsdiskussion
          </p>

          {/* Event Date */}
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-800">
            Wann: 26. November 2024
          </p>

          {/* Event Time */}
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-800">
            Time: 18:30 Uhr
          </p>

          {/* Event Description */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
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
