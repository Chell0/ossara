import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-[#fff6ea]">
      <main className="p-6">
        <NavBar />
        <div className="container mx-auto mt-20 max-w-screen-md p-10">
          {/* Events Image */}
          <div className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/veranstaltungen/decolonize-europa.png`}
              alt={`Decolonize Polizei Photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`rounded-md object-contain object-center`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* Events Title */}
          <h1
            className={`mt-20 text-left font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            Decolonize Europa
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Podiumsdiskussion</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 30. Mai 2024</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Im Rahmen der Europawoche 2024 findet die Podiumsdiskussion „Europas koloniale
            Vergangenheit. Impulse und Initiativen zur dekolonialen Auseinandersetzung“ statt, die
            sich mit den aktuellen Ansätzen europäischer Länder zur Aufarbeitung ihrer kolonialen
            Geschichte beschäftigt. Diskutiert werden Themen wie Restitution, Entschädigung und die
            Rückgabe kulturellen Erbes sowie der interkulturelle Dialog und der Bewusstseinsprozess
            in der Zivilbevölkerung. Die Veranstaltung beleuchtet sowohl erfolgreiche dekoloniale
            Projekte als auch bestehende Herausforderungen und Bedarfe im Kontext der kolonialen
            Aufarbeitung.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
