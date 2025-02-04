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
              src={`/veranstaltungen/yoga-ist-fur-alle.png`}
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
            Yoga ist für ALLE
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 13. Mai 2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 13:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Yoga ist in den letzten Jahren immer beliebter geworden. Obwohl
            stark verwestlicht und eingenommen von mehrheitlich weißen,
            schlanken und reichen Frauen*, gehen die Ursprünge des Yoga nicht
            nur auf Indien zurück. Wie wir inzwischen wissen, ist diese heilige
            Praxis auch auf dem afrikanischen Kontinent verwurzelt. All
            gender/gemischter Kurs für BPoC Teilnahme ohne/mit geringen (A1)
            Deutschkenntnissen möglich!
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
