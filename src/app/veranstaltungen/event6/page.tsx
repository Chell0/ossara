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
              src={`/veranstaltungen/decolonize-schonheit.png`}
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
            Decolonize Schönheit
          </h1>

          {/* Event Type */}
          <p className="mt-2 text-base text-gray-800">
            What: Podiumsdiskussion
          </p>

          {/* Event Date */}
          <p className="mt-2 text-base text-gray-800">Wann: 11. März 2024</p>

          {/* Event Time */}
          <p className="mt-2 text-base text-gray-800">Time: 18:30 Uhr</p>

          {/* Event Description */}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Unsere Decolonize-Veranstaltungsreihe setzt sich diesmal mit dem
            Thema Schönheits- und Körperideale auseinander und untersucht die
            koloniale Prägung von gesellschaftlichen Schönheitsvorstellungen.
            Wir fragen, wie „Schönheit“ in unseren Biografien verankert ist und
            wie diese Ideale mit bestehenden Machtstrukturen kollidieren. Ziel
            ist es, durch Empowerment und dekoloniale Perspektiven einen
            gesellschaftlichen Wandel zu fördern und bestehende Schönheitsnormen
            zu hinterfragen.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
