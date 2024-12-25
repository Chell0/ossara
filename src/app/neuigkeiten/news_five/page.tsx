import { bebasNeue } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        {/* Date */}
        <section className="text-center text-gray-800">
          <p className="text-base font-semibold">06. November 2023</p>
        </section>
        {/* Title */}
        <section className="text-[#ffb400] text-center py-6 mt-5">
          <h2
            className={`${bebasNeue.className} drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Podiumsdiskussion Decolonize Literatur
          </h2>
        </section>
        {/* Image */}
        <section className="flex items-center justify-center mt-20">
          <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
              src={`/news/picture-1.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width={400}
              height={400}
              className={`object-cover object-center`}
              quality={100}
            />
          </div>
        </section>
        {/* Text */}
        <section className="flex flex-col items-center justify-center mt-10">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-base text-gray-800">
              <b>Wann?</b> 06.11.2023, 18:30 Uhr
            </p>
            <p className="mt-4 text-base text-gray-800">
              <b>Wo?</b> Bücherhalle Altona, Ottenser Hauptstr. 8-10, Mercado 2.
              Stock, 22765 Hamburg
            </p>
            <p className="mt-4 text-base text-gray-800">
              Die anhaltende Präsenz kolonialer Denkweisen und Strukturen ist in
              verschiedenen Bereichen unserer Gesellschaft immer noch zu spüren
              und macht sich u.a. in Form von rassistischer Diskriminierung,
              wirtschaftlicher, kultureller und politischer Ausbeutung sichtbar.
              Die dekoloniale Perspektive zielt darauf ab, die vom Kolonialismus
              geschaffene globale Ungleichheit kritisch zu betrachten und die
              bestehenden Machtstrukturen und Hierarchien zu hinterfragen und zu
              dekonstruieren. Dies setzt voraus, dass Dekolonisierung als
              interdisziplinäres Querschnittsthema behandelt wird, und dazu
              ermutigt, marginalisierte Stimmen und Erfahrungen in den
              Vordergrund zu stellen.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Bei unserer Auftaktveranstaltung Decolonize Literatur wollen wir
              uns mit dekolonialen Perspektiven auf die Literatur beschäftigen
              und uns kritisch mit den heutigen Auswirkungen des Kolonialismus
              auf die Literaturbranche auseinandersetzen. Wir analysieren den
              eurozentrischen Blick auf Literatur und werfen in den Raum, wie
              die weiß dominierte Gegenwartsliteratur Vorurteile und Stereotypen
              u. a. durch Illustration, Sprache, im Verlagswesen reproduziert
              und wie neue Repräsentationsräume für weitere Perspektiven
              geschaffen werden können.
            </p>
            <p className="mt-4 text-base text-gray-800">
              <b>Podiumsgäste:</b> Millicent Adjei, Dayan Kodua, Dan Thy Nguyen
            </p>
            <p className="mt-4 text-base text-gray-800">
              <b>Moderation:</b> Cane Çağlar
            </p>
            <div className="relative mt-20 overflow-hidden">
              <Image
                src={`/news/picture-2.png`}
                alt={`Neu im Team Ossara- Hamburg photo`}
                width={2032}
                height={1352}
                className={`object-cover object-center`}
                quality={100}
              />
            </div>
            <p className="mt-10 text-base text-gray-800">
              Die Veranstaltung findet in deutscher Lautsprache statt.
            </p>
            <p className="mt-2 text-base text-gray-800">
              Der Eintritt ist kostenlos.
            </p>
            <p className="mt-2 text-base text-gray-800">
              Anmeldung bitte bis zum 05.11.2023.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Die Veranstaltung ist der Auftakt einer Decolonize-Reihe, die den
              interkulturellen Dialog und den Austausch von verschiedenen
              Stimmen und Perspektiven aus der Community fördert.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
