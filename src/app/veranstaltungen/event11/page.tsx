import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#fff6ea] relative">
      <main className="p-6">
        <NavBar />
        <div className="container max-w-screen-md mx-auto mt-20 p-10">
          {/* Events Image */}
          <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-lg">
            <Image
              src={`/veranstaltungen/anti-rassismus-im-gesundheitswesen.png`}
              alt={`Decolonize Polizei Photo`}
              width={1080}
              height={872}
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
            (Anti-) Rassismus im Gesundheitswesen
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 07. Juni 2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 17:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Rassistische Strukturen machen krank und zeigen ihre Spuren auch im
            Gesundheitswesen. Im Afrozensus 2020 berichten fast 7 von 10
            Menschen über Rassismuserfahrung in ärztlicher Behandlung. In der
            Ausbildung von Gesundheitspersonal gibt es keine strukturierte
            Weiterbildung über Rassismus und andere Diskriminierungsformen.
            Dieser Workshop ist ein (Er-)Forschungsraum für Austausch,
            Reflexion, Bewegung und Strategien in gemeinsamen und geschützteren
            Räumen.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
