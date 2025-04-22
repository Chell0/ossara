import Image from "next/image";

import TeamSection from "@/components/UberUns/TeamSection/TeamSection";

export default function UberUns() {
  return (
    <>
      <div>
        {/* Header */}
        <header className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/UberUns/ÜBERUNS_INSIDE.jpg"
              fill
              alt="Über Uns Header Image"
              className="object-cover"
              priority
              sizes="(max-width: 319px) 100vw, (max-width: 424px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, (max-width: 1439px) 100vw, (max-width: 2559px) 100vw, 100vw"
            />
          </div>

          {/* Text Section */}
          <div className="absolute bottom-2 left-1 xs:bottom-3 xs:left-2 sm:bottom-4 sm:left-3 md:bottom-6 md:left-4 lg:bottom-10 lg:left-8 xl:bottom-12 xl:left-10">
            <h1 className="text-[#f7cc55] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] 3xl:text-[14rem] p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10">
              Inside.
            </h1>
          </div>
        </header>

        {/* Über uns */}
        <section className="bg-[#fff6ea] relative w-full flex items-center justify-center py-section px-4 overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 max-w-7xl">
            {/* Image Container */}
            <div className="relative w-full max-w-full md:max-w-lg lg:max-w-xl h-auto shadow-2xl rotate-[-2deg] overflow-hidden">
              <Image
                src="/images/UberUns/uber-uns.jpg"
                alt="Über Uns"
                quality={100}
                width={526}
                height={789}
                className="w-full h-auto object-cover object-top"
                priority
              />
              {/* Tape on top-left */}
              <div
                className="absolute -top-3 -left-3 w-20 h-10 rotate-[15deg] z-10 shadow-sm"
                style={{ backgroundColor: "#E0E0E0", opacity: 0.9 }}
              />
            </div>

            {/* Text Content */}
            <div className="w-full flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
              <h3 className="text-orange-600 text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight pb-4">
                Über uns
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-loose mb-4">
                Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO), die
                sich mit einer dekolonialen Perspektive für Bildung, Gesundheit
                und interkulturelle Vielfalt einsetzt. Wir hinterfragen
                bestehende Machtstrukturen und engagieren uns auch in Hamburg.
                Hier bieten wir integrative Stadtteilarbeit an und unterstützen
                mit Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen.
                In unserer entwicklungspolitischen Bildungsarbeit in Hamburg
                setzen wir uns intensiv mit den Themen Dekolonisierung und
                Anti-Schwarzem Rassismus auseinander und schaffen Begegnungs-
                und empowernde Räume für BIPoC.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black leading-loose mb-4">
                Neben unserer internationalen Arbeit in Westafrika (Togo, Benin,
                Côte d'Ivoire) engagieren wir uns auch in Hamburg. Hier bieten
                wir integrative Stadtteilarbeit an und unterstützen mit
                Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
                unserer entwicklungspolitischen Bildungsarbeit in Hamburg setzen
                wir uns intensiv mit den Themen Dekolonisierung und
                Anti-Schwarzem Rassismus auseinander und schaffen Begegnungs-
                und empowernde Räume für BIPoC.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black leading-loose mb-8">
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
        <section className="relative w-full min-h-[auto] xs:min-h-[80vh] md:min-h-screen flex items-center justify-center py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div
            id="verein"
            className="container flex flex-col md:flex-row gap-6 md:gap-8 w-full items-stretch"
          >
            {/* Text Content */}
            <div className="basis-full md:basis-1/2 flex flex-col justify-center p-4 xs:p-5 sm:p-6 md:p-8">
              <h3 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-semibold mb-6 text-center md:text-left text-[#eb7b24]">
                Verein
              </h3>
              <div className="space-y-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] 2xl:text-[1.35rem]">
                <p className="text-gray-800">
                  Als eingetragener Verein (VR 23447) sind wir politisch und
                  konfessionell neutral. Unsere Arbeit umfasst ein breites
                  Spektrum an Tätigkeitsfeldern, darunter:
                </p>
                <ul className="ml-5 space-y-2 font-semibold text-[#eb7b24] list-disc">
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
            <div className="basis-full md:basis-1/2 flex items-center justify-center p-4 xs:p-5 sm:p-6 md:p-8">
              <div className="relative w-full aspect-[2/3] xs:aspect-[2/3] md:aspect-[2/3] lg:aspect-[2/3] xl:aspect-[2/3] max-h-[600px] md:max-h-[700px] xl:max-h-[800px]">
                <Image
                  src="/images/UberUns/ÜBERUNS_Verein.jpg"
                  alt="About Photo"
                  fill
                  quality={100}
                  priority
                  className="object-cover shadow-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="py-section px-4 xs2:px-6 lg:px-8 xl:py-section-lg"
        >
          <h3 className="text-[#eb7b24] text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-tight drop-shadow-sm mb-12 sm:mb-16 lg:mb-20">
            Das Team
          </h3>
          <TeamSection />
        </section>

        {/* History Section */}
        <section
          id="geschichte"
          className="relative w-full py-section px-4 xs:px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 max-w-8xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Image Column */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] xs:aspect-[5/4] sm:aspect-[3/2] lg:aspect-auto h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] max-w-3xl shadow-lg">
                <Image
                  src="/images/UberUns/ÜBERUNS_UNSERE GESCHICHTE.jpg"
                  alt="History Photo"
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 425px) 100vw,
         (max-width: 768px) 90vw,
         (max-width: 1024px) 48vw,
         (max-width: 1440px) 45vw,
         40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center p-2">
              <h3 className="text-[#eb7b24] text-3xl xs2:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-left leading-none">
                Unsere Geschichte
              </h3>
              <p className="text-black text-sm xs2:text-base sm:text-lg md:text-xl leading-relaxed">
                Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine
                dekoloniale und machtkritische internationale Zusammenarbeit zu
                fördern. Der Name „Ossara“, der in der Lamba-Sprache aus dem
                Norden Togos „Alles wird gut!“ bedeutet, steht für unsere Vision
                einer positiven Veränderung, die durch eine gleichwertige
                Zusammenarbeit und die Stärkung der Selbstbestimmung erreicht
                wird.
              </p>
              <p className="text-black text-sm xs2:text-base sm:text-lg md:text-xl leading-relaxed">
                Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
                Partner:innen Bildungs- und Infrastrukturprojekte durchführten.
                Im Laufe der Jahre haben wir unsere Arbeit auf weitere
                westafrikanische Länder ausgeweitet und gleichzeitig ein neues
                Arbeitsfeld in Hamburg etabliert, das sich auf die Stärkung von
                BIPoC-Communities sowie die Bekämpfung von Rassismus und
                Diskriminierung konzentriert.
              </p>
              <p className="text-black text-sm xs2:text-base sm:text-lg md:text-xl leading-relaxed">
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
