import Image from "next/image";
import Link from "next/link";

import ContactPerson from "@/components/ContactPerson/ContactPerson";

export default function Dekoloniale() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/InternationaleZusammenarbeit/INTERNATIONALEZUSAMMENARBEIT.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-2 xs:bottom-8 xs:left-3 xs2:bottom-9 xs2:left-4 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div
              className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-13
              "
            >
              <h1 className="text-[#d3103e] font-extrabold uppercase leading-[1.1]text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] 3xl:text-[160px]">
                <span className="block">Dekolonial.</span>
                <span className="block">Global.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#d3103e] px-8">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-48 3xl:mb-52">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem] font-semibold leading-tight tracking-normal mx-auto">
              Mit dekolonialer Perspektive setzen wir Projekte um, die die
              lokale Selbstbestimmung stärken, nachhaltige Verbesserungen in den
              Lebensbedingungen ermöglichen und langfristige Partnerschaften
              fördern.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="mx-auto">
              <p className="text-sm xs:text-sm xs2:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed text-left text-black">
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

        <section className="relative w-full min-h-screen py-12 xs2:py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 3xl:py-48 text-[#d3103e] flex items-center">
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Project List */}
              <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                <p className="text-2xl xs2:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-left">
                  Unsere Projekte umfassen:
                </p>
                <ul className="mt-4 text-base xs2:text-lg list-disc text-black space-y-2 pl-5">
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

              {/* Kontaktperson */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-12 lg:mt-0">
                <h3 className="text-[#d3103e] text-2xl xs2:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mb-6 mx-auto lg:mx-0 border-[#d3103e]" />
                <ContactPerson
                  name="Gaetan Tagba"
                  position="Projektmanagement"
                  email="gaetan.tagba[at]ossara.de"
                  phone="(+228) 91 077338"
                  imageSrc="/images/UberUns/Team/GaetanTagba.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projektprozess */}
        <section
          id="projekte"
          className="relative w-full min-h-screen flex items-center justify-center py-12 xs2:py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 max-w-8xl w-full items-center justify-center">
            {/* Text */}
            <div className="md:basis-1/2 flex flex-col justify-center p-2 xs:p-4 md:p-6 lg:p-8">
              <h3 className="text-[#d3103e] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left mb-6 md:mb-8">
                Projektprozess
              </h3>
              <p className="text-black text-base sm:text-lg leading-relaxed">
                Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von
                Anfragen aus der lokalen Bevölkerung oder Partnerorganisationen.
                Die aktive Beteiligung der lokalen Gemeinschaften an allen
                Projektphasen ist für uns entscheidend, um sicherzustellen, dass
                Projekte ihren Bedürfnissen entsprechen. Nach einem Feldbesuch,
                bei dem wir uns intensiv mit den Betroffenen austauschen und
                wichtige Daten sammeln, wird ein Projektantrag erstellt. Die
                Fördermittelakquise kann mehrere Monate bis Jahre dauern. Sobald
                die Mittel gesichert sind, startet die Umsetzung des Projekts in
                enger Zusammenarbeit mit lokalen Partner:innen. Wir begleiten
                den Prozess und stellen sicher, dass die Qualitätsstandards
                sowie die Fristen eingehalten werden. Nach dem Projektabschluss
                erfolgen eine Evaluierung und regelmäßige Nachkontrollen
                (Monitoring), um die Nachhaltigkeit des Projektes
                sicherzustellen.
              </p>
              <div className="flex justify-start mt-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg shadow-lg bg-[#d3103e] text-white hover:bg-[#b20e35] transition-colors duration-300"
                >
                  Aktuelle Projekte
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="md:basis-1/2 w-full max-w-2xl">
              <div className="relative w-full aspect-square md:aspect-[4/3] min-h-[400px] md:min-h-[560px] overflow-hidden shadow-xl">
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
          className="relative w-full min-h-screen flex items-center justify-center py-12 xs2:py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 max-w-8xl w-full items-center justify-center">
            {/* Image */}
            <div className="md:basis-1/2 w-full max-w-2xl">
              <div className="relative w-full aspect-square md:aspect-[4/3] min-h-[400px] md:min-h-[560px] overflow-hidden shadow-xl">
                <Image
                  src="/images/InternationaleZusammenarbeit/OSSARA_Vorstand_Partners.jpg"
                  alt="Projektpartner"
                  fill
                  quality={100}
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:basis-1/2 flex flex-col justify-center p-2 xs:p-4 md:p-6 lg:p-8">
              <h3 className="text-[#d3103e] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left mb-6 md:mb-8">
                Projektpartner
              </h3>
              <p className="text-black text-base sm:text-lg leading-relaxed">
                Der Projektpartner bei Ossara e.V. beginnt mit der Annahme von
                Anfragen aus der lokalen Bevölkerung oder Partnerorganisationen.
                Die aktive Beteiligung der lokalen Gemeinschaften an allen
                Projektphasen ist für uns entscheidend, um sicherzustellen, dass
                Projekte ihren Bedürfnissen entsprechen. Nach einem Feldbesuch,
                bei dem wir uns intensiv mit den Betroffenen austauschen und
                wichtige Daten sammeln, wird ein Projektantrag erstellt. Die
                Fördermittelakquise kann mehrere Monate bis Jahre dauern. Sobald
                die Mittel gesichert sind, startet die Umsetzung des Projekts in
                enger Zusammenarbeit mit lokalen Partner:innen. Wir begleiten
                den Prozess und stellen sicher, dass die Qualitätsstandards
                sowie die Fristen eingehalten werden. Nach dem Projektabschluss
                erfolgen eine Evaluierung und regelmäßige Nachkontrollen
                (Monitoring), um die Nachhaltigkeit des Projektes
                sicherzustellen.
              </p>
              <div className="flex justify-start mt-4">
                <Link
                  href="/projekt_partners"
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg shadow-lg bg-[#d3103e] text-white hover:bg-[#b20e35] transition-colors duration-300"
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
