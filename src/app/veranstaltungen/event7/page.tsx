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
              src={`/veranstaltungen/runder-tisch.png`}
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
