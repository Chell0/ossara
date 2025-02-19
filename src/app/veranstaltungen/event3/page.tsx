import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative">
      <main className="adbsolute p-1 bg-[#fff6ea]">
        <NavBar />
        <div className="container max-w-screen-md mx-auto mt-20 p-10">
          {/* Events Image */}
          <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-lg">
            <Image
              src={`/veranstaltungen/netzwerkstatt1.png`}
              alt={`Netzwerkstatt2 photo`}
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
            Netz:werkstatt
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">
            What: Netzwerken und Workshop
          </p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">
            Wann: 19. September 2024
          </p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken
            und Werken im Rahmen von kreativen Angeboten zu verbinden. Was:
            Gemeinsam werden wir die Technik des Linoldruckes kennenlernen und
            uns hier ausprobieren. Mit Fabienne Schöter, Kunsttherapeutin.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
