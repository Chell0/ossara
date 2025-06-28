import Image from "next/image";

import TeamSection from "@/components/UberUns/TeamSection/TeamSection";

export default function UberUns() {
  return (
    <>
      {/* Header  Section*/}
      <div className="relative 3xl:h-[100vh] xs2:h-[15.8vh] xs:h-[13.5vh] w-full sm:h-[17.9vh] md:h-[32.2vh] lg:h-[43vh] xl:h-[53.7vh] 2xl:h-[90.5vh]">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/UberUns/UberUns_Inside.jpg"
            alt="Über Uns Header Image"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full">
          <section className="absolute bottom-1 left-1 flex h-full items-end px-4 sm:bottom-3 sm:left-1 sm:px-6 md:bottom-4 md:left-3 lg:bottom-6 lg:left-3">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              <h1 className="animate-fade-in font-bold 3xl:text-[12rem] text-2xl text-[#f7cc55] xs2:text-xl xs:text-lg uppercase leading-[1.1] sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
                <span className="block animate-slide-up delay-200">Inside.</span>
              </h1>
            </div>
          </section>
        </div>
      </div>

      {/* Über uns */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#fff6ea] px-4 py-section">
        <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
          {/* Image Container */}
          <div className="relative h-auto w-full max-w-full rotate-[-2deg] overflow-hidden shadow-2xl md:max-w-lg lg:max-w-xl">
            <Image
              src="/images/UberUns/uber-uns.jpg"
              alt="Über Uns"
              quality={100}
              width={526}
              height={789}
              className="h-auto w-full object-cover object-top"
              priority
            />
            {/* Tape on top-left */}
            <div
              className="-top-3 -left-3 absolute z-10 h-10 w-20 rotate-[15deg] shadow-sm"
              style={{ backgroundColor: "#E0E0E0", opacity: 0.9 }}
            />
          </div>

          {/* Text Content */}
          <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="pb-4 font-extrabold text-6xl text-orange-600 uppercase tracking-tight sm:text-7xl md:text-8xl">
              Über uns
            </h3>
            <p className="mb-4 text-black text-sm leading-loose sm:text-base md:text-lg">
              Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO), die sich mit einer
              dekolonialen Perspektive für Bildung, Gesundheit und interkulturelle Vielfalt
              einsetzt. Wir hinterfragen bestehende Machtstrukturen und engagieren uns auch in
              Hamburg. Hier bieten wir integrative Stadtteilarbeit an und unterstützen mit
              Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In unserer
              entwicklungspolitischen Bildungsarbeit in Hamburg setzen wir uns intensiv mit den
              Themen Dekolonisierung und Anti-Schwarzem Rassismus auseinander und schaffen
              Begegnungs- und empowernde Räume für BIPoC.
            </p>
            <p className="mb-4 text-black text-sm leading-loose sm:text-base md:text-lg">
              Neben unserer internationalen Arbeit in Westafrika (Togo, Benin, Côte d'Ivoire)
              engagieren wir uns auch in Hamburg. Hier bieten wir integrative Stadtteilarbeit an und
              unterstützen mit Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
              unserer entwicklungspolitischen Bildungsarbeit in Hamburg setzen wir uns intensiv mit
              den Themen Dekolonisierung und Anti-Schwarzem Rassismus auseinander und schaffen
              Begegnungs- und empowernde Räume für BIPoC.
            </p>
            <p className="mb-8 text-black text-sm leading-loose sm:text-base md:text-lg">
              Unsere Arbeit basiert auf der Überzeugung, dass tiefgreifende und nachhaltige
              Veränderung nur durch einen dekolonialen und machtkritischen Ansatz erreicht werden
              kann, der die Stimmen und Bedürfnisse derjenigen in den Mittelpunkt stellt, die am
              stärksten von kolonialen und rassistischen Strukturen betroffen sind.
            </p>
          </div>
        </div>
      </section>

      {/* Verein */}
      <section className="relative flex min-h-[auto] xs:min-h-[80vh] w-full items-center justify-center px-4 xs:px-5 py-16 sm:px-6 md:min-h-screen md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          id="verein"
          className="container flex w-full flex-col items-stretch gap-6 md:flex-row md:gap-8"
        >
          {/* Text Content */}
          <div className="flex basis-full flex-col justify-center p-4 xs:p-5 sm:p-6 md:basis-1/2 md:p-8">
            <h3 className="mb-6 text-center font-semibold text-3xl text-[#eb7b24] xs:text-3xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
              Verein
            </h3>
            <div className="space-y-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] 2xl:text-[1.35rem]">
              <p className="text-gray-800">
                Als eingetragener Verein (VR 23447) sind wir politisch und konfessionell neutral.
                Unsere Arbeit umfasst ein breites Spektrum an Tätigkeitsfeldern, darunter:
              </p>
              <ul className="ml-5 list-disc space-y-2 font-semibold text-[#eb7b24]">
                <li>Bildung</li>
                <li>Kunst- und Kulturförderung</li>
                <li>Nachhaltige internationale Zusammenarbeit</li>
                <li>Hilfe für Geflüchtete, Verfolgte und Kriegsopfer</li>
                <li>
                  Förderung von internationaler Verständigung, Toleranz und kultureller Vielfalt
                </li>
                <li>Verbesserung der öffentlichen Gesundheitsversorgung und Gesundheitsfürsorge</li>
                <li>Unterstützung hilfsbedürftiger Menschen</li>
              </ul>
              <p className="text-gray-800">
                Unsere Projekte werden durch ein starkes Netzwerk aus engagierten Mitgliedern,
                Mitarbeiter:innen, ehrenamtlichen Helfer:innen und Partnerorganisationen
                unterstützt.
              </p>
              <p className="text-gray-800">
                Wir bieten Menschen, die unsere Werte teilen, die Möglichkeit, sich durch Praktika
                oder freiwillige Mitarbeit aktiv in Hamburg oder im westafrikanischen Büro
                einzubringen.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex basis-full items-center justify-center p-4 xs:p-5 sm:p-6 md:basis-1/2 md:p-8">
            <div className="relative aspect-[2/3] xs:aspect-[2/3] max-h-[600px] w-full md:aspect-[2/3] md:max-h-[700px] lg:aspect-[2/3] xl:aspect-[2/3] xl:max-h-[800px]">
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
      <section id="team" className="px-4 xs2:px-6 py-section lg:px-8 xl:py-section-lg">
        <h3 className="mb-12 text-center font-bold text-4xl text-[#eb7b24] leading-tight drop-shadow-sm sm:mb-16 sm:text-5xl md:text-6xl lg:mb-20 lg:text-7xl 2xl:text-8xl">
          Das Team
        </h3>
        <TeamSection />
      </section>

      {/* History Section */}
      <section
        id="geschichte"
        className="relative mx-auto w-full max-w-8xl px-4 xs:px-5 py-section sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20"
      >
        <div className="flex flex-col items-stretch gap-8 lg:flex-row">
          {/* Image Column */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="relative aspect-[4/3] xs:aspect-[5/4] h-[300px] xs:h-[340px] w-full max-w-3xl shadow-lg sm:aspect-[3/2] sm:h-[380px] md:h-[420px] lg:aspect-auto lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
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
          <div className="flex w-full flex-col justify-center p-2 lg:w-1/2">
            <h3 className="text-left font-semibold text-3xl text-[#eb7b24] xs2:text-4xl leading-none sm:text-5xl md:text-6xl xl:text-7xl">
              Unsere Geschichte
            </h3>
            <p className="text-black text-sm xs2:text-base leading-relaxed sm:text-lg md:text-xl">
              Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine dekoloniale und
              machtkritische internationale Zusammenarbeit zu fördern. Der Name „Ossara“, der in der
              Lamba-Sprache aus dem Norden Togos „Alles wird gut!“ bedeutet, steht für unsere Vision
              einer positiven Veränderung, die durch eine gleichwertige Zusammenarbeit und die
              Stärkung der Selbstbestimmung erreicht wird.
            </p>
            <p className="text-black text-sm xs2:text-base leading-relaxed sm:text-lg md:text-xl">
              Unsere ersten Projekte begannen in Togo, wo wir mit lokalen Partner:innen Bildungs-
              und Infrastrukturprojekte durchführten. Im Laufe der Jahre haben wir unsere Arbeit auf
              weitere westafrikanische Länder ausgeweitet und gleichzeitig ein neues Arbeitsfeld in
              Hamburg etabliert, das sich auf die Stärkung von BIPoC-Communities sowie die
              Bekämpfung von Rassismus und Diskriminierung konzentriert.
            </p>
            <p className="text-black text-sm xs2:text-base leading-relaxed sm:text-lg md:text-xl">
              Heute ist Ossara e.V. ein Verein, der nicht nur in Westafrika aktiv ist, sondern auch
              auf lokaler Ebene durch entwicklungspolitische Bildungsarbeit, Empowerment und
              Vernetzung einen Beitrag zu einer gerechteren und nachhaltigeren Welt leistet. Ebenso
              ist der Verein in vielen regionalen und überregionalen Gremien sowie Netzwerken aktiv.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
