import Image from "next/image";

import TeamSection from "@/components/UberUns/TeamSection/TeamSection";

export default function UberUns() {
  return (
    <>
      <div>
        {/* Header */}
        <header
          className="w-full bg-cover bg-center relative 
    h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] md2:h-[70vh] tab:h-[85vh] tab-xl:h-[90vh] lg:h-[95vh] xl:h-screen 2xl:h-screen"
          style={{
            backgroundImage: "url(/images/UberUns/ÜBERUNS_INSIDE.jpg)",
          }}
        >
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#f7cc55] font-extrabold leading-tight uppercase 
        text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] 
        pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 
        pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48"
            >
              Inside.
            </h1>
          </div>
        </header>

        {/* Über uns */}
        <section className="relative w-full min-h-screen flex items-center justify-center">
          <div className="flex flex-col md2:flex-row gap-6 xs:gap-7 sm:gap-8 md:gap-10 tab:gap-12 lg:gap-14 px-4 xs:px-5 sm:px-6 md:px-8 tab:px-10 lg:px-12 xl:px-14 2xl:px-16 py-10 xs:py-12 sm:py-14 md:py-16 tab:py-20 lg:py-24 w-full max-w-7xl mx-auto">
            {/* Image Container - Updated with better aspect ratio */}
            <div className="relative w-full md2:basis-2/5 lg:basis-1/3 p-4 xs:p-5 flex items-center justify-center h-[280px] xs:h-[320px] sm:h-[360px] md:h-[400px] md2:h-[440px] tab:h-[480px] lg:h-[520px] xl:h-[560px] 2xl:h-[600px]">
              <div className="relative w-full h-full overflow-hidden shadow-lg xs:shadow-xl sm:shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out">
                <Image
                  src="/images/UberUns/ÜBERUNS_SMALL PICTURE.jpg"
                  alt="Team members working together at Ossara"
                  quality={100}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center brightness-95 hover:brightness-100 transition-all duration-300"
                  priority
                />
              </div>
              {/* Enhanced tape effect */}
              <div
                className="absolute top-[-12px] xs:top-[-14px] right-[20px] w-20 xs:w-24 h-10 xs:h-12 bg-[#f7cc55] opacity-85 rotate-12 z-10
        before:absolute before:w-full before:h-full before:bg-yellow-200 before:rotate-[-8deg] 
        before:opacity-60 before:top-0 before:left-0 before:content-['']"
              />
            </div>

            {/* Text Content - Updated with better typography */}
            <div className="w-full md2:basis-3/5 lg:basis-2/3 p-4 xs:p-5 sm:p-6 flex flex-col justify-center">
              <h3 className="text-[#f7cc55] text-3xl xs:text-4xl sm:text-5xl md:text-5.5xl tab:text-6xl lg:text-6.5xl xl:text-7xl 2xl:text-8xl font-bold text-center drop-shadow-md uppercase pb-6 xs:pb-8 tab:pb-10 tracking-tight">
                Über Uns
              </h3>
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                <p className="text-base xs:text-lg sm:text-xl md:text-xl tab:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-gray-800 leading-relaxed sm:leading-loose">
                  Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO),
                  die sich mit einer dekolonialen Perspektive für Bildung,
                  Gesundheit und interkulturelle Vielfalt einsetzt. Wir
                  hinterfragen bestehende Machtstrukturen und engagieren uns für
                  eine gleichwertige Zusammenarbeit, die auf Respekt,
                  Solidarität und Selbstbestimmung beruht.
                </p>
                <p className="text-base xs:text-lg sm:text-xl md:text-xl tab:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-gray-800 leading-relaxed sm:leading-loose">
                  Neben unserer internationalen Arbeit in Westafrika (Togo,
                  Benin, Côte d'Ivoire) engagieren wir uns auch in Hamburg. Hier
                  bieten wir integrative Stadtteilarbeit an und unterstützen mit
                  Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
                  unserer entwicklungspolitischen Bildungsarbeit in Hamburg
                  setzen wir uns intensiv mit den Themen Dekolonisierung und
                  Anti-Schwarzem Rassismus auseinander und schaffen Begegnungs-
                  und empowernde Räume für BIPoC.
                </p>
                <p className="text-base xs:text-lg sm:text-xl md:text-xl tab:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-gray-800 leading-relaxed sm:leading-loose">
                  Unsere Arbeit basiert auf der Überzeugung, dass tiefgreifende
                  und nachhaltige Veränderung nur durch einen dekolonialen und
                  machtkritischen Ansatz erreicht werden kann, der die Stimmen
                  und Bedürfnisse derjenigen in den Mittelpunkt stellt, die am
                  stärksten von kolonialen und rassistischen Strukturen
                  betroffen sind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verein */}
        <section className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 xs:px-5 sm:px-6 md2:px-8 tab:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div
            id="verein"
            className="flex flex-col tab:flex-row gap-8 max-w-7xl w-full items-stretch"
          >
            {/* Text Content */}
            <div className="basis-full tab:basis-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl tab:text-6xl xl:text-7xl 2xl:text-[5rem] font-semibold mb-6 text-center tab:text-left text-[#eb7b24]">
                Verein
              </h3>
              <div className="space-y-4 text-sm sm:text-base md:text-lg tab:text-xl lg:text-[1.25rem] xl:text-[1.35rem] 2xl:text-[1.45rem]">
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
            <div className="basis-full tab:basis-1/2 flex items-center justify-center p-4">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[470px] tab:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px]">
                <Image
                  src="/images/UberUns/ÜBERUNS_Verein.jpg"
                  alt="About Photo"
                  fill
                  quality={100}
                  priority
                  className="object-cover shadow-xl rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 xl:py-24">
          <h3 className="text-[#eb7b24] text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight drop-shadow-sm mb-12 md:mb-16 lg:mb-20">
            Das Team
          </h3>
          <TeamSection />
        </section>

        {/* History Section */}
        <section
          id="geschichte"
          className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 xs:px-5 sm:px-8 md2:px-10 tab:px-12 lg:px-14 xl:px-16 2xl:px-20"
        >
          <div className="flex flex-col tab:flex-row gap-6 w-full items-stretch">
            {/* Image Column */}
            <div className="basis-full tab:basis-1/2 flex items-center justify-center">
              <div className="relative w-full h-[300px] xs:h-[340px] sm:h-[360px] md:h-[400px] tab:h-[500px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
                <Image
                  src="/images/UberUns/ÜBERUNS_UNSERE GESCHICHTE.jpg"
                  alt="History Photo"
                  fill
                  quality={100}
                  priority
                  className="object-cover shadow-lg"
                />
              </div>
            </div>
            {/* Text Column */}
            <div className="basis-full tab:basis-1/2 flex flex-col justify-center p-2">
              <h3 className="text-3xl xs:text-4xl sm:text-4xl md:text-4xl tab:text-6xl lg:text-6xl xl:text-7xl font-semibold text-left text-[#eb7b24]">
                Unsere Geschichte
              </h3>
              <p className="text-black text-base xs:text-lg sm:text-lg md:text-xl">
                Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine
                dekoloniale und machtkritische internationale Zusammenarbeit zu
                fördern. Der Name „Ossara“, der in der Lamba-Sprache aus dem
                Norden Togos „Alles wird gut!“ bedeutet, steht für unsere Vision
                einer positiven Veränderung, die durch eine gleichwertige
                Zusammenarbeit und die Stärkung der Selbstbestimmung erreicht
                wird.
              </p>
              <p className="text-black text-base xs:text-lg sm:text-lg md:text-xl">
                Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
                Partner:innen Bildungs- und Infrastrukturprojekte durchführten.
                Im Laufe der Jahre haben wir unsere Arbeit auf weitere
                westafrikanische Länder ausgeweitet und gleichzeitig ein neues
                Arbeitsfeld in Hamburg etabliert, das sich auf die Stärkung von
                BIPoC-Communities sowie die Bekämpfung von Rassismus und
                Diskriminierung konzentriert.
              </p>
              <p className="text-black text-base xs:text-lg sm:text-lg md:text-xl">
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
