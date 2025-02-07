import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="bg-[#fff6ea] relative">
      <main className="p-6">
        <NavBar />
        <div className="container max-w-screen-md mx-auto mt-20 p-10">
          {/* Events Image */}
          <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-xl">
            <Image
              src={`/veranstaltungen/uber-alltagsrassismus-reden.png`}
              alt={`Decolonize Polizei Photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`object-contain object-center rounded-md`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* Events Title */}
          <h1
            className={`mt-20 text-left text-[#eb7b24] text-2xl sm:text-lg md:text-xl lg:text-3xl font-bold uppercase leading-8 tracking-wide`}
          >
            “Alltagsrassismus begegnen”- Umgangsformen und
            Bewältigungskapazitäten von Rassimus erfahrenen
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
            Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es
            gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben.
            Leider werden die Erfahrungen von denen, die Rassismus erfahren oft
            nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen
            Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von
            Rassismus in Deutschland anzugehen
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
