import Image from "next/image";

import TeamSection from "@/components/UberUns/TeamSection/TeamSection";

export default function UberUns() {
  return (
    <>
      <div>
        {/* Header */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center md:items-start md:justify-start">
            <h1 className="text-[#f7cc55] drop-shadow-xl font-extrabold uppercase p-4 ml-0 mt-0 md:ml-10 md:mt-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Inside.
            </h1>
          </div>
        </header>

        {/* Über uns */}
        <section className="relative w-full min-h-screen">
          <div
            id="uber"
            className="flex flex-col md:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8 py-10 md:py-12 items-center"
          >
            {/* Image Container */}
            <div className="relative w-full md:basis-1/3 lg:basis-1/4 p-4 flex items-center justify-center h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
              <Image
                src="/bgs/img1.jpg"
                alt="About Photo"
                quality={100}
                width={480}
                height={400}
                className="w-full h-full object-cover shadow-lg transform -rotate-[5deg] hover:rotate-0 transition-transform duration-300"
              />
              {/* Tape effect */}
              <div
                className="absolute top-[-10px] right-[10px] w-16 sm:w-20 h-8 sm:h-10 bg-[#f7cc55] opacity-80 rotate-12 
          before:absolute before:w-full before:h-full before:bg-title-bg before:rotate-[-6deg] 
          before:opacity-50 before:top-0 before:left-0 before:content-['']"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:basis-2/3 lg:basis-3/4 p-4 sm:p-6 mt-8 md:mt-10">
              <h3 className="text-[#f7cc55] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center drop-shadow-sm uppercase pt-6 md:pt-10">
                Über Uns
              </h3>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-black leading-relaxed">
                Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO), die
                sich mit einer dekolonialen Perspektive für Bildung, Gesundheit
                und interkulturelle Vielfalt einsetzt. Wir hinterfragen
                bestehende Machtstrukturen und engagieren uns für eine
                gleichwertige Zusammenarbeit, die auf Respekt, Solidarität und
                Selbstbestimmung beruht.
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-black leading-relaxed">
                Neben unserer internationalen Arbeit in Westafrika (Togo, Benin,
                Côte d’Ivoire) engagieren wir uns auch in Hamburg. Hier bieten
                wir integrative Stadtteilarbeit an und unterstützen mit
                Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
                unserer entwicklungspolitischen Bildungsarbeit in Hamburg setzen
                wir uns intensiv mit den Themen Dekolonisierung und
                Anti-Schwarzem Rassismus auseinander und schaffen Begegnungs-
                und empowernde Räume für BIPoC.
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-black leading-relaxed">
                Unsere Arbeit basiert auf der Überzeugung, dass tiefgreifende
                und nachhaltige Veränderung nur durch einen dekolonialen und
                machtkritischen Ansatz erreicht werden kann, der die Stimmen und
                Bedürfnisse derjenigen in den Mittelpunkt stellt, die am
                stärksten von kolonialen und rassistischen Strukturen betroffen
                sind.
              </p>
            </div>
          </div>
        </section>

        {/* Verein */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-8">
          <div
            id="verein"
            className="flex flex-col md:flex-row gap-8 max-w-7xl w-full items-stretch"
          >
            {/* Text Content */}
            <div className="md:basis-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-center md:text-left text-[#f7cc55]">
                Verein
              </h3>
              <div className="space-y-4 text-sm sm:text-base md:text-lg">
                <p className="text-gray-800">
                  Als eingetragener Verein (VR 23447) sind wir politisch und
                  konfessionell neutral. Unsere Arbeit umfasst ein breites
                  Spektrum an Tätigkeitsfeldern, darunter:
                </p>
                <ul className="ml-5 space-y-2 font-semibold text-[#f7cc55] list-disc">
                  <li>Bildung</li>
                  <li>Kunst- und Kulturförderung</li>
                  <li>Nachhaltige internationale Zusammenarbeit</li>
                  <li>Hilfe für Geflüchtete, Verfolgte und Kriegsopfer</li>
                  <li>
                    Förderung von internationaler Verständigung, Toleranz und
                    kultureller Vielfalt
                  </li>
                  <li>
                    Verbesserung der öffentlichen Gesundheitsversorgung und
                    Gesundheitsfürsorge
                  </li>
                  <li>Unterstützung hilfsbedürftiger Menschen</li>
                </ul>
                <p className="text-gray-800">
                  Unsere Projekte werden durch ein starkes Netzwerk aus
                  engagierten Mitgliedern, Mitarbeiter:innen, ehrenamtlichen
                  Helfer:innen und Partnerorganisationen unterstützt.
                </p>
                <p className="text-gray-800">
                  Wir bieten Menschen, die unsere Werte teilen, die Möglichkeit,
                  sich durch Praktika oder freiwillige Mitarbeit aktiv in
                  Hamburg oder im westafrikanischen Büro einzubringen.
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="md:basis-1/2 flex items-center justify-center p-4">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/bgs/img1.jpg"
                  alt="About Photo"
                  fill
                  quality={100}
                  priority
                  className="object-cover rounded-lg shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 xl:py-24">
          <h3 className="text-[#f7cc55] text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight drop-shadow-sm mb-12 md:mb-16 lg:mb-20">
            Das Team
          </h3>
          <TeamSection />
        </section>

        {/* History Section */}
        <section
          id="geschichte"
          className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-8"
        >
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full items-stretch">
            {/* Image Column */}
            <div className="md:basis-1/2 flex items-center justify-center p-4 flex-1">
              <div className="relative w-full min-h-[300px] md:min-h-full">
                <Image
                  src="/bgs/img1.jpg"
                  alt="History Photo"
                  fill
                  quality={100}
                  priority
                  className="object-cover rounded-md shadow-lg"
                />
              </div>
            </div>
            {/* Text Column */}
            <div className="md:basis-1/2 flex flex-col justify-center p-4 flex-1">
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#f7cc55] font-semibold text-left">
                Unsere Geschichte
              </h3>
              <p className="text-black text-base mt-4">
                Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine
                dekoloniale und machtkritische internationale Zusammenarbeit zu
                fördern. Der Name „Ossara“, der in der Lamba-Sprache aus dem
                Norden Togos „Alles wird gut!“ bedeutet, steht für unsere Vision
                einer positiven Veränderung, die durch eine gleichwertige
                Zusammenarbeit und die Stärkung der Selbstbestimmung erreicht
                wird.
              </p>
              <p className="text-base mt-4 text-black">
                Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
                Partner:innen Bildungs- und Infrastrukturprojekte durchführten.
                Im Laufe der Jahre haben wir unsere Arbeit auf weitere
                westafrikanische Länder ausgeweitet und gleichzeitig ein neues
                Arbeitsfeld in Hamburg etabliert, das sich auf die Stärkung von
                BIPoC-Communities sowie die Bekämpfung von Rassismus und
                Diskriminierung konzentriert.
              </p>
              <p className="text-base mt-4 text-black">
                Heute ist Ossara e.V. ein Verein, der nicht nur in Westafrika
                aktiv ist, sondern auch auf lokaler Ebene durch
                entwicklungspolitische Bildungsarbeit, Empowerment und
                Vernetzung einen Beitrag zu einer gerechteren und nachhaltigeren
                Welt leistet. Ebenso ist der Verein in vielen regionalen und
                überregionalen Gremien sowie Netzwerken aktiv.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
