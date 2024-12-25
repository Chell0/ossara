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
          <p className="text-base font-semibold">01. Oktober 2024</p>
        </section>
        {/* Title */}
        <section className="text-[#ffb400] text-center py-6 mt-5">
          <h2
            className={`${bebasNeue.className} drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Neu im Team Ossara- Hamburg
          </h2>
        </section>
        {/* Image */}
        <section className="flex items-center justify-center mt-20">
          <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
              src={`/news/picture-6.png`}
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
              Seit September 2024 ist Katja Heyn im Ossara-Team Hamburg als
              Bewerbungstrainerin und Orientierungshilfe dabei.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Egal ob Schule, Ausbildung, Studium oder Jobsuche- sie hilft dir
              gerne weiter. Auch bei Fragen rund um Wohnungssuche, Gesundheit
              oder Alltagsproblemen steht sie dir zur Seite.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Du brauchst Unterstützung beim Ausfüllen von Formularen oder
              einfach jemanden, der dich bei deinen nächsten Schritten berät?
              Katja ist für dich da und begleitet dich auf deinem Weg!
            </p>
            <p className="mt-4 text-base text-gray-800">
              Katja Heyn erreicht ihr unter:
            </p>
            <ul className="mt-4 ml-10 space-y-2 text-sm font-semibold text-[#ffb400] list-disc">
              <li>(+49) 157 5140 6184</li>
              <li>bewerbungstraining@ossara.de</li>
            </ul>
            <p className="mt-4 text-base text-gray-800">
              Katja Heyn ist die Nachfolgerin von Martina von Kaltenborn. Wir
              danken Martina von Kaltenborn für all ihr Engagement in den
              letzten Jahren.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
