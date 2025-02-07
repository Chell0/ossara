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
          <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-lg">
            <Image
              src={`/veranstaltungen/runder-tisch.png`}
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
            11. Runder Tisch Koloniales Erbe
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Vernetzung</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 08. Mai 2024</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Am 08. Mai 2024 lädt der 11. Runde Tisch Koloniales Erbe von 18 bis
            21 Uhr zu einem zivilgesellschaftlichen Austausch und einer
            Diskussion über den Fortschritt der Dekolonisierungsprojekte im
            Jupiter in der Mönckebergstraße 2-4 in Hamburg ein. Der Eintritt ist
            frei und die Veranstaltung ist öffentlich, wobei Beiträge zu
            aktuellen Projekten vorab an Catherine Schlüter gesendet werden
            können, spontane Beiträge sind ebenfalls willkommen.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
