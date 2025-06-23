import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-white">
      <main className="p-2 sm:p-4 md:p-6">
        <NavBar/>
        <div
          className="container mx-auto mt-20 max-w-screen-md rounded-lg bg-[#fff6ea] p-6 shadow-sm sm:mt-26 sm:p-8 md:p-10">
          {/* News Date */}
          <h3
            className="mb-4 text-center text-gray-500 text-sm uppercase sm:mb-5 sm:text-base">
            01. Oktober 2024
          </h3>

          {/* News Title */}
          <h1
            className={`mb-6 text-center font-bold text-[#eb7b24] text-xl uppercase leading-6 tracking-wide sm:mb-10 sm:text-2xl sm:leading-8 md:text-3xl`}
          >
            Neu im Team Ossara- Hamburg
          </h1>

          {/* News Image */}
          <div
            className="mt-6 mb-4 flex items-center justify-center sm:mt-10 sm:mb-5">
            <Image
              src={`/news/picture-6.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width={1080}
              height={872}
              priority
              quality={100}
              className={`h-auto max-h-[400px] w-full rounded-md object-contain object-center sm:max-h-[500px] md:max-h-[640px]`}
            />
          </div>

          {/* News Content */}
          <section
            className="prose prose-sm sm:prose-base prose-stone prose-a:target:_blank prose-a:rel:noreferrer mx-auto mt-10 max-w-screen-md prose-headings:font-semibold prose-a:text-orange-500 prose-headings:text-orange-500 prose-headings:text-xl sm:mt-20 sm:prose-headings:text-2xl">
            <p className="mt-4 text-gray-800 text-sm sm:text-base">
              Seit September 2024 ist Katja Heyn im Ossara-Team Hamburg als
              Bewerbungstrainerin und
              Orientierungshilfe dabei. Egal ob Schule, Ausbildung, Studium
              oder Jobsuche- sie hilft
              dir gerne weiter. Auch bei Fragen rund um Wohnungssuche,
              Gesundheit oder
              Alltagsproblemen steht sie dir zur Seite. Du brauchst
              Unterstützung beim Ausfüllen von
              Formularen oder einfach jemanden, der dich bei deinen nächsten
              Schritten berät? Katja
              ist für dich da und begleitet dich auf deinem Weg!
            </p>
            <p className="mt-4 text-gray-800 text-sm sm:text-base">
              Katja Heyn erreicht ihr unter:
            </p>
            <ul
              className="mt-4 ml-6 list-disc space-y-2 font-semibold text-[#eb7b24] text-sm sm:ml-10">
              <li>(+49) 157 5140 6184</li>
              <li>bewerbungstraining@ossara.de</li>
            </ul>
            <p className="mt-4 text-gray-800 text-sm sm:text-base">
              Katja Heyn ist die Nachfolgerin von Martina von Kaltenborn. Wir
              danken Martina von
              Kaltenborn für all ihr Engagement in den letzten Jahren.
            </p>
          </section>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
