import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white relative">
      <main className="p-6">
        <NavBar />
        <div className="container max-w-screen-lg mx-auto mt-20 bg-[#fff6ea] p-10 rounded-lg shadow-2xl">
          {/* News Date */}
          <h3 className="text-center text-gray-500 mb-5 uppercase">
            01. Oktober 2024
          </h3>

          {/* News Title */}
          <h1
            className={`mb-10 text-center text-[#eb7b24] text-2xl sm:text-lg md:text-xl lg:text-3xl font-bold uppercase leading-8 tracking-wide`}
          >
            Neu im Team Ossara- Hamburg
          </h1>

          {/* News Image */}
          <div className="flex items-center justify-center mt-10 mb-5 max-w-screen-xl">
            <Image
              src={`/news/picture-6.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width={1080}
              height={872}
              priority
              quality={100}
              className={`object-cover object-center rounded-md shadow-xl`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* News Content */}
          <section className="max-w-screen-lg mx-auto mt-20 prose prose-sm prose-stone prose-headings:text-2xl prose-headings:text-orange-500 prose-headings:font-semibold prose-a:text-orange-500 prose-a:target:_blank prose-a:rel:noreferrer">
            <p className="mt-4 text-base text-gray-800">
              Seit September 2024 ist Katja Heyn im Ossara-Team Hamburg als
              Bewerbungstrainerin und Orientierungshilfe dabei. Egal ob Schule,
              Ausbildung, Studium oder Jobsuche- sie hilft dir gerne weiter.
              Auch bei Fragen rund um Wohnungssuche, Gesundheit oder
              Alltagsproblemen steht sie dir zur Seite. Du brauchst
              Unterstützung beim Ausfüllen von Formularen oder einfach jemanden,
              der dich bei deinen nächsten Schritten berät? Katja ist für dich
              da und begleitet dich auf deinem Weg!
              <br />
              Katja Heyn erreicht ihr unter:
              <br />
              <ul className="mt-4 ml-10 space-y-2 text-sm font-semibold text-[#eb7b24] list-disc">
                <li>(+49) 157 5140 6184</li>
                <li>bewerbungstraining@ossara.de</li>
              </ul>
              <br />
              Katja Heyn ist die Nachfolgerin von Martina von Kaltenborn. Wir
              danken Martina von Kaltenborn für all ihr Engagement in den
              letzten Jahren.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
