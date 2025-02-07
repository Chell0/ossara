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
              src={`/veranstaltungen/decolonizing-bodies.png`}
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
            Decolonizing Bodies
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">What: Workshop</p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 06. Juni 2023</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 15:00 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Die Auftaktveranstaltung „Decolonize Literatur“ widmet sich der
            kritischen Auseinandersetzung mit den dekolonialen Perspektiven auf
            die Literatur. Wir analysieren, wie der eurozentrische Blick in der
            Literaturbranche Vorurteile und Stereotypen durch Sprache,
            Illustration und das Verlagswesen fortsetzt. Ziel ist es, neue
            Repräsentationsräume zu schaffen und marginalisierte Perspektiven
            stärker in den Fokus zu rücken.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
