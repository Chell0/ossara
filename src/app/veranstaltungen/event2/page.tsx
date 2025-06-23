import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-[rgb(255,246,234)]">
      <main className="p-1">
        <NavBar/>
        <div className="container mx-auto mt-20 max-w-screen-md p-10">
          {/* Events Image */}
          <div
            className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/veranstaltungen/netzwerkstatt2.png`}
              alt={`Netzwerkstatt2 photo`}
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
            Netz:werkstatt
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Netzwerken und
            Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 24. October
            2024</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken
            und Werken im Rahmen
            von kreativen Angeboten zu verbinden. Was: Teller bemalen - Hier
            kannst du deinen neuen
            Lieblings Frühstücksteller oder einen Wandteller gestalten Mit
            Fabienne Schöter,
            Kunsttherapeutin.
          </p>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
