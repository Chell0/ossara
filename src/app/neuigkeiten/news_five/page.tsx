import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-white">
      <main className="p-6">
        <NavBar />
        <div className="container mx-auto mt-20 max-w-screen-md rounded-lg bg-[#fff6ea] p-10 shadow-sm">
          {/* News Date */}
          <h3 className="mb-5 text-center text-gray-500 uppercase">
            06. November 2023
          </h3>

          {/* News Title */}
          <h1
            className={`mb-10 text-center font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            Podiumsdiskussion Decolonize Literatur
          </h1>

          {/* News Image */}
          <div className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/news/picture-1.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`object-cover object-center`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* News Content */}
          <section className="prose prose-sm prose-stone prose-a:target:_blank prose-a:rel:noreferrer mx-auto mt-20 max-w-screen-md prose-headings:font-semibold prose-a:text-orange-500 prose-headings:text-2xl prose-headings:text-orange-500">
            <p className="mt-4 text-[#eb7b24] text-base">
              <b>Wann?</b> 06.11.2023, 18:30 Uhr
            </p>
            <p className="mt-4 text-[#eb7b24] text-base">
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
              Vordergrund zu stellen. Bei unserer Auftaktveranstaltung
              Decolonize Literatur wollen wir uns mit dekolonialen Perspektiven
              auf die Literatur beschäftigen und uns kritisch mit den heutigen
              Auswirkungen des Kolonialismus auf die Literaturbranche
              auseinandersetzen. Wir analysieren den eurozentrischen Blick auf
              Literatur und werfen in den Raum, wie die weiß dominierte
              Gegenwartsliteratur Vorurteile und Stereotypen u. a. durch
              Illustration, Sprache, im Verlagswesen reproduziert und wie neue
              Repräsentationsräume für weitere Perspektiven geschaffen werden
              können.
            </p>
            <p className="mt-4 text-[#eb7b24] text-base">
              <b>Podiumsgäste:</b> Millicent Adjei, Dayan Kodua, Dan Thy Nguyen
            </p>
            <p className="mt-4 text-[#eb7b24] text-base">
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
              Die Veranstaltung findet in deutscher Lautsprache statt. Der
              Eintritt ist kostenlos. Anmeldung bitte bis zum 05.11.2023. Die
              Veranstaltung ist der Auftakt einer Decolonize-Reihe, die den
              interkulturellen Dialog und den Austausch von verschiedenen
              Stimmen und Perspektiven aus der Community fördert.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
