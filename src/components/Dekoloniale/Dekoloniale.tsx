import Image from "next/image";
import Link from "next/link";

import ContactPerson from "@/components/ContactPerson/ContactPerson";

export default function Dekoloniale() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/InternationaleZusammenarbeit/INTERNATIONALEZUSAMMENARBEIT.jpg"
              fill
              alt="Home Page Header image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div className="3xl:space-y-13 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 ">
              <h1 className="font-extrabold 3xl:text-[160px] text-[#d3103e] xs2:text-5xl xs:text-4xl uppercase leading-[1.1]text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px]">
                <span className="block">Dekolonial.</span>
                <span className="block">Global.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen w-full px-8 text-[#d3103e]">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-52 mb-12 xs:mb-14 pt-8 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-48">
            <p className="mx-auto font-semibold 3xl:text-[10rem] text-2xl xs2:text-4xl xs:text-3xl leading-tight tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem]">
              Mit dekolonialer Perspektive setzen wir Projekte um, die die lokale Selbstbestimmung
              stärken, nachhaltige Verbesserungen in den Lebensbedingungen ermöglichen und
              langfristige Partnerschaften fördern.
            </p>
          </div>

          {/* small text */}
          <div className="flex w-full justify-center">
            <div className="max-w-7xl">
              <p className="text-left 3xl:text-3xl text-black text-sm xs2:text-xs xs:text-xs leading-relaxed sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Ossara e.V. verfolgt einen dekolonialen Ansatz in der internationalen
                Zusammenarbeit, um gleichwertige Partnerschaften und nachhaltige Entwicklung zu
                fördern. Wir setzen uns dafür ein, koloniale Strukturen zu hinterfragen und
                bestehende Machtungleichheiten zu überwinden. In enger Zusammenarbeit mit lokalen
                Partner:innen in Togo, Benin und Côte d'Ivoire arbeiten wir daran, die
                Selbstbestimmung der Gemeinschaften zu stärken und die Lebensbedingungen langfristig
                zu verbessern. Dabei legen wir großen Wert auf diasporische Stimmen, die Beteiligung
                der Menschen vor Ort und die Berücksichtigung ihrer Perspektiven. Unsere Projekte
                werden auf Augenhöhe und partizipativ entwickelt, um gemeinsam die sozialen und
                wirtschaftlichen Herausforderungen zu bewältigen und eine gerechte, inklusive
                Zukunft zu gestalten.
              </p>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-screen w-full items-center 3xl:py-48 py-12 xs2:py-16 text-[#d3103e] sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40">
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
              {/* Project List */}
              <div className="w-full space-y-4 lg:w-1/2 lg:space-y-6">
                <p className="text-left font-semibold text-xl xs2:text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Unsere Projekte umfassen:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-black xs2:text-lg">
                  <li>Bau von Schulgebäuden, Sanitäranlagen, Spielplätzen und Brunnen</li>
                  <li>Ausstattung von Schulen und Sportvereinen mit Möbeln und Trikots</li>
                  <li>Bildungsprogramme, Stipendien und Förderungen</li>
                  <li>Starthilfen für Frauen</li>
                  <li>Umweltbildung durch Wiederaufforstungsinitiativen</li>
                  <li>Aufklärungskampagnen zur Mundhygiene</li>
                  <li>Veranstaltungsangebote und Community-Aktivitäten</li>
                </ul>
              </div>

              {/* Kontaktperson */}
              <div className="mt-12 flex w-full flex-col items-center justify-center text-center lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
                <h3 className="mb-2 font-semibold 3xl:text-8xl text-2xl text-[#d3103e] xs2:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#d3103e] lg:mx-0" />
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
          className="relative flex min-h-screen w-full items-center justify-center px-4 py-12 xs2:py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32"
        >
          <div className="flex w-full max-w-8xl flex-col items-center justify-center gap-10 md:flex-row md:gap-14">
            {/* Text */}
            <div className="flex flex-col justify-center p-2 xs:p-4 md:basis-1/2 md:p-6 lg:p-8">
              <h3 className="mb-6 text-center font-semibold text-3xl text-[#d3103e] sm:text-4xl md:mb-8 md:text-left md:text-5xl lg:text-6xl">
                Projektprozess
              </h3>
              <p className="text-base text-black leading-relaxed sm:text-lg">
                Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von Anfragen aus der
                lokalen Bevölkerung oder Partnerorganisationen. Die aktive Beteiligung der lokalen
                Gemeinschaften an allen Projektphasen ist für uns entscheidend, um sicherzustellen,
                dass Projekte ihren Bedürfnissen entsprechen. Nach einem Feldbesuch, bei dem wir uns
                intensiv mit den Betroffenen austauschen und wichtige Daten sammeln, wird ein
                Projektantrag erstellt. Die Fördermittelakquise kann mehrere Monate bis Jahre
                dauern. Sobald die Mittel gesichert sind, startet die Umsetzung des Projekts in
                enger Zusammenarbeit mit lokalen Partner:innen. Wir begleiten den Prozess und
                stellen sicher, dass die Qualitätsstandards sowie die Fristen eingehalten werden.
                Nach dem Projektabschluss erfolgen eine Evaluierung und regelmäßige Nachkontrollen
                (Monitoring), um die Nachhaltigkeit des Projektes sicherzustellen.
              </p>
              <div className="mt-4 flex justify-start">
                <Link
                  href="/projects"
                  className="rounded-lg bg-[#d3103e] px-6 py-3 text-base text-white shadow-lg transition-colors duration-300 hover:bg-[#b20e35] md:px-8 md:py-4 md:text-lg"
                >
                  Aktuelle Projekte
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full max-w-2xl md:basis-1/2">
              <div className="relative aspect-square min-h-[400px] w-full overflow-hidden shadow-xl md:aspect-[4/3] md:min-h-[560px]">
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
          className="relative flex min-h-screen w-full items-center justify-center px-4 py-12 xs2:py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32"
        >
          <div className="flex w-full max-w-8xl flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-14">
            {/* Image */}
            <div className="w-full max-w-2xl md:basis-1/2">
              <div className="relative aspect-square min-h-[400px] w-full overflow-hidden shadow-xl md:aspect-[4/3] md:min-h-[560px]">
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
            <div className="flex flex-col justify-center p-2 xs:p-4 md:basis-1/2 md:p-6 lg:p-8">
              <h3 className="mb-6 text-center font-semibold text-3xl text-[#d3103e] sm:text-4xl md:mb-8 md:text-left md:text-5xl lg:text-6xl">
                Projektpartner
              </h3>
              <p className="text-base text-black leading-relaxed sm:text-lg">
                Der Projektpartner bei Ossara e.V. beginnt mit der Annahme von Anfragen aus der
                lokalen Bevölkerung oder Partnerorganisationen. Die aktive Beteiligung der lokalen
                Gemeinschaften an allen Projektphasen ist für uns entscheidend, um sicherzustellen,
                dass Projekte ihren Bedürfnissen entsprechen. Nach einem Feldbesuch, bei dem wir uns
                intensiv mit den Betroffenen austauschen und wichtige Daten sammeln, wird ein
                Projektantrag erstellt. Die Fördermittelakquise kann mehrere Monate bis Jahre
                dauern. Sobald die Mittel gesichert sind, startet die Umsetzung des Projekts in
                enger Zusammenarbeit mit lokalen Partner:innen. Wir begleiten den Prozess und
                stellen sicher, dass die Qualitätsstandards sowie die Fristen eingehalten werden.
                Nach dem Projektabschluss erfolgen eine Evaluierung und regelmäßige Nachkontrollen
                (Monitoring), um die Nachhaltigkeit des Projektes sicherzustellen.
              </p>
              <div className="mt-4 flex justify-start">
                <Link
                  href="/projekt_partners"
                  className="rounded-lg bg-[#d3103e] px-6 py-3 text-base text-white shadow-lg transition-colors duration-300 hover:bg-[#b20e35] md:px-8 md:py-4 md:text-lg"
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
