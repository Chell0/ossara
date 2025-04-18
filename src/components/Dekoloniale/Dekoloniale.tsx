import Image from "next/image";
import Link from "next/link";

import ContactPerson from "@/components/ContactPerson/ContactPerson";

export default function Dekoloniale() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/InternationaleZusammenarbeit/INTERNATIONALEZUSAMMENARBEIT.jpg)",
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#d3103e] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-9xl 3xl:text-[14rem] pl-4 pt-10"
            >
              DEKOLONIAL.
              <br />
              GLOBAL.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#d3103e] pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-22 xl:mb-26 2xl:mb-32 3xl:mb-44">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem]  font-semibold leading-normal tracking-normal">
              Mit dekolonialer Perspektive setzen wir Projekte um, die die
              lokale Selbstbestimmung stärken, nachhaltige Verbesserungen in den
              Lebensbedingungen ermöglichen und langfristige Partnerschaften
              fördern.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="max-w-full">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black leading-relaxed text-left">
                Ossara e.V. verfolgt einen dekolonialen Ansatz in der
                internationalen Zusammenarbeit, um gleichwertige Partnerschaften
                und nachhaltige Entwicklung zu fördern. Wir setzen uns dafür
                ein, koloniale Strukturen zu hinterfragen und bestehende
                Machtungleichheiten zu überwinden. In enger Zusammenarbeit mit
                lokalen Partner:innen in Togo, Benin und Côte d'Ivoire arbeiten
                wir daran, die Selbstbestimmung der Gemeinschaften zu stärken
                und die Lebensbedingungen langfristig zu verbessern. Dabei legen
                wir großen Wert auf diasporische Stimmen, die Beteiligung der
                Menschen vor Ort und die Berücksichtigung ihrer Perspektiven.
                Unsere Projekte werden auf Augenhöhe und partizipativ
                entwickelt, um gemeinsam die sozialen und wirtschaftlichen
                Herausforderungen zu bewältigen und eine gerechte, inklusive
                Zukunft zu gestalten.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full min-h-screen py-12 xs2:py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 3xl:py-48 text-[#d3103e]">
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="flex md:flex-grow flex-row gap-10">
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4 flex justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl ml-16 mb-2 text-left font-semibold leading-none">
                  Unsere Projekte umfassen:
                </p>
                <ul className="ml-20 mt-4 text-lg list-disc text-black space-y-2">
                  <li>
                    Bau von Schulgebäuden, Sanitäranlagen, Spielplätzen und
                    Brunnen
                  </li>
                  <li>
                    Ausstattung von Schulen und Sportvereinen mit Möbeln und
                    Trikots
                  </li>
                  <li>Bildungsprogramme, Stipendien und Förderungen</li>
                  <li>Starthilfen für Frauen</li>
                  <li>Umweltbildung durch Wiederaufforstungsinitiativen</li>
                  <li>Aufklärungskampagnen zur Mundhygiene</li>
                  <li>Veranstaltungsangebote und Community-Aktivitäten</li>
                </ul>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-10 lg:pt-0">
                <h3 className="text-[#d3103e] text-2xl xs2:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mb-6 mx-auto lg:mx-0 border-[#d3103e]" />
              </div>
              <ContactPerson
                name="Gaetan Tagba"
                position="Projektmanagement"
                email="gaetan.tagba[at]ossara.de"
                phone="(+228) 91 077338"
                imageSrc="/images/UberUns/Team/GaetanTagba.jpg"
              />
            </div>
          </div>
        </section>

        {/* Projektprozess */}
        <section
          id="projekte"
          className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl w-full items-center justify-center">
            {/* Text Content */}
            <div className="md:basis-1/2 flex flex-col justify-center p-4 md:p-6 lg:p-8">
              <h3
                className="text-[#d3103e] text-4xl font-semibold text-center md:text-left
                    md:text-5xl lg:text-6xl mb-6 md:mb-8"
              >
                Projektprozess
              </h3>

              <div className="space-y-1 md:space-y-2">
                <p className="text-black text-lg">
                  Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von
                  Anfragen aus der lokalen Bevölkerung oder
                  Partnerorganisationen. Die aktive Beteiligung der lokalen
                  Gemeinschaften an allen Projektphasen ist für uns
                  entscheidend, um sicherzustellen, dass Projekte ihren
                  Bedürfnissen entsprechen. Nach einem Feldbesuch, bei dem wir
                  uns intensiv mit den Betroffenen austauschen und wichtige
                  Daten sammeln, wird ein Projektantrag erstellt. Die
                  Fördermittelakquise kann mehrere Monate bis Jahre dauern.
                  Sobald die Mittel gesichert sind, startet die Umsetzung des
                  Projekts in enger Zusammenarbeit mit lokalen Partner:innen.
                  Wir begleiten den Prozess und stellen sicher, dass die
                  Qualitätsstandards sowie die Fristen eingehalten werden. Nach
                  dem Projektabschluss erfolgen eine Evaluierung und regelmäßige
                  Nachkontrollen (Monitoring), um die Nachhaltigkeit des
                  Projektes sicherzustellen.
                </p>
              </div>

              <div className="flex justify-start mt-2 md:mt-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg
                   rounded-lg shadow-lg bg-[#d3103e] text-white hover:bg-[#b20e35]
                   transition-colors duration-300 inline-block"
                >
                  Aktuelle Projekte
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="md:basis-1/2 w-full max-w-2xl md:max-w-none">
              <div
                className="relative h-full w-full aspect-square md:aspect-auto
                     min-h-[400px] md:min-h-[560px] overflow-hidden
                     shadow-xl"
              >
                <Image
                  src="/images/InternationaleZusammenarbeit/OSSARA_Lobbyarbeit_Netzwerken_ProjektProzess.jpg"
                  alt="Projektprozess"
                  fill
                  quality={100}
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projektpartner */}
        <section
          id="projekte"
          className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl w-full items-center justify-center">
            {/* Image Container */}
            <div className="md:basis-1/2 w-full max-w-2xl md:max-w-none">
              <div
                className="relative h-full w-full aspect-square md:aspect-auto
                     min-h-[400px] md:min-h-[560px] overflow-hidden
                     shadow-xl"
              >
                <Image
                  src="/images/InternationaleZusammenarbeit/OSSARA_Vorstand_Partners.jpg"
                  alt="Projektprozess Visualisierung"
                  fill
                  quality={100}
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="md:basis-1/2 flex flex-col justify-center p-4 md:p-6 lg:p-8">
              <h3
                className="text-[#d3103e] text-4xl font-semibold text-center md:text-left
                    md:text-5xl lg:text-6xl mb-6 md:mb-8"
              >
                Projektpartner
              </h3>

              <div className="space-y-1 md:space-y-2">
                <p className="text-black text-lg">
                  Der Projektpartner bei Ossara e.V. beginnt mit der Annahme von
                  Anfragen aus der lokalen Bevölkerung oder
                  Partnerorganisationen. Die aktive Beteiligung der lokalen
                  Gemeinschaften an allen Projektphasen ist für uns
                  entscheidend, um sicherzustellen, dass Projekte ihren
                  Bedürfnissen entsprechen. Nach einem Feldbesuch, bei dem wir
                  uns intensiv mit den Betroffenen austauschen und wichtige
                  Daten sammeln, wird ein Projektantrag erstellt. Die
                  Fördermittelakquise kann mehrere Monate bis Jahre dauern.
                  Sobald die Mittel gesichert sind, startet die Umsetzung des
                  Projekts in enger Zusammenarbeit mit lokalen Partner:innen.
                  Wir begleiten den Prozess und stellen sicher, dass die
                  Qualitätsstandards sowie die Fristen eingehalten werden. Nach
                  dem Projektabschluss erfolgen eine Evaluierung und regelmäßige
                  Nachkontrollen (Monitoring), um die Nachhaltigkeit des
                  Projektes sicherzustellen.
                </p>
              </div>

              <div className="flex justify-start mt-2 md:mt-4">
                <Link
                  href="/projekt_partners"
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg
                   rounded-lg shadow-lg bg-[#d3103e] text-white hover:bg-[#b20e35]
                   transition-colors duration-300 inline-block"
                >
                  Projekte Partners
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
