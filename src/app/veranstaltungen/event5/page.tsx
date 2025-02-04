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
              src={`/veranstaltungen/decolonize-europa.png`}
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
            Decolonize Europa
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">
            What: Podiumsdiskussion
          </p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 30. Mai 2024</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Im Rahmen der Europawoche 2024 findet die Podiumsdiskussion „Europas
            koloniale Vergangenheit. Impulse und Initiativen zur dekolonialen
            Auseinandersetzung“ statt, die sich mit den aktuellen Ansätzen
            europäischer Länder zur Aufarbeitung ihrer kolonialen Geschichte
            beschäftigt. Diskutiert werden Themen wie Restitution, Entschädigung
            und die Rückgabe kulturellen Erbes sowie der interkulturelle Dialog
            und der Bewusstseinsprozess in der Zivilbevölkerung. Die
            Veranstaltung beleuchtet sowohl erfolgreiche dekoloniale Projekte
            als auch bestehende Herausforderungen und Bedarfe im Kontext der
            kolonialen Aufarbeitung.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
