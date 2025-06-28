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
              src={`/veranstaltungen/decolonize-literaur.png`}
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
            Decolonize Literatur
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What:
            Podiumsdiskussion</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 06. November
            2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Die Auftaktveranstaltung „Decolonize Literatur“ widmet sich der
            kritischen
            Auseinandersetzung mit den dekolonialen Perspektiven auf die
            Literatur. Wir analysieren,
            wie der eurozentrische Blick in der Literaturbranche Vorurteile und
            Stereotypen durch
            Sprache, Illustration und das Verlagswesen fortsetzt. Ziel ist es,
            neue
            Repräsentationsräume zu schaffen und marginalisierte Perspektiven
            stärker in den Fokus
            zu rücken.
          </p>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
