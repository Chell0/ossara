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
            className="mt-10 mb-5 flex max-w-screen-xl items-center justify-center">
            <Image
              src={`/veranstaltungen/uber-alltagsrassismus-reden.png`}
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
            “Alltagsrassismus begegnen”- Umgangsformen und
            Bewältigungskapazitäten von Rassimus
            erfahrenen
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 12. Mai 2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 16:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Rassismus ist ein großes Problem, das verändert werden muss. Die
            Geschichte des
            Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch
            Geschichten von
            Menschen, die sich dagegen gewehrt haben. Leider werden die
            Erfahrungen von denen, die
            Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf
            welche Ressourcen
            Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von
            Rassismus in
            Deutschland anzugehen
          </p>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
