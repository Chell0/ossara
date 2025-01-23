import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Image from "next/image";
import Link from "next/link";

export default function Dekoloniale() {
  return (
    <>
      <div className="mx-auto">
        <header
          className="h-screen w-full bg-cover bg-center relative mb-10 p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start`}
          >
            <h1
              className={`text-[#d3103e] text-[8rem] font-extrabold leading-tight drop-shadow-xl uppercase p-6 ml-10 mt-20`}
            >
              DEKOLONIAL.
              <br />
              GLOBAL.
            </h1>
          </div>
        </header>

        <section className="reltaive w-full min-h-screen text-[#d3103e]">
          <div className="flex md:flex-grow flex-row mb-10">
            <div className="basis-full">
              <h3 className="text-6xl md:text-7xl font-semibold leading-tight m-4">
                Mit dekolonialer Perspektive setzen wir Projekte um, die die
                lokale Selbstbestimmung stärken, nachhaltige Verbesserungen in
                den Lebensbedingungen ermöglichen und langfristige
                Partnerschaften fördern.
              </h3>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end">
            <div className="basis-1/2 mr-10 mt-10 mb-20 text-lg">
              <p className="mt-4">
                Ossara e.V. verfolgt einen dekolonialen Ansatz in der
                internationalen Zusammenarbeit, um gleichwertige Partnerschaften
                und nachhaltige Entwicklung zu fördern. Wir setzen uns dafür
                ein, koloniale Strukturen zu hinterfragen und bestehende
                Machtungleichheiten zu überwinden. In enger Zusammenarbeit mit
                lokalen Partner:innen in <b>Togo</b>, <b>Benin</b> und{" "}
                <b>Côte d'Ivoire</b> arbeiten wir daran, die Selbstbestimmung
                der Gemeinschaften zu stärken und die Lebensbedingungen
                langfristig zu verbessern.
              </p>
              <p className="mt-4">
                Dabei legen wir großen Wert auf diasporische Stimmen, die
                Beteiligung der Menschen vor Ort und die Berücksichtigung ihrer
                Perspektiven. Unsere Projekte werden{" "}
                <b>auf Augenhöhe und partizipativ entwickelt</b>, um gemeinsam
                die sozialen und wirtschaftlichen Herausforderungen zu
                bewältigen und eine gerechte, inklusive Zukunft zu gestalten.
              </p>
            </div>
          </div>
        </section>

        {/* Kontaktperson */}
        <section className="reltaive w-full min-h-screen text-[#d3103e] py-20">
          <div className="flex md:flex-grow flex-row gap-6 m-8">
            <div className="basis-1/2 p-4">
              <p className="text-2xl font-semibold">
                Unsere Projekte umfassen:
              </p>
              <ul className="ml-5 space-y-2 mt-4 text-lg list-disc text-[#5a8e8e]">
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
            <div className="basis-1/2 p-4">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-4xl font-semibold text-[#d3103e] mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-16 border-2 border-[#d3103e] mb-6" />
              </div>
              <div className="flex flex-col items-center w-full shadow-md rounded-md">
                <ContactPerson
                  name="Gaetan Tagba"
                  position="Projektkoordination"
                  email="gaetan.tagba[@]ossara.de"
                  phone="(+228) 91 077338"
                  imageSrc="/contact-person/contact_person.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projektprozess */}
        <section className="relative w-full min-h-screen">
          <div className="flex md:flex-grow flex-row gap-10 m-8 text-[#d3103e]">
            <div className="basis-1/2 p-4">
              <h3
                className={`text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-left drop-shadow-sm`}
              >
                Projektprozess
              </h3>
              <p className="mt-4 text-lg">
                Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von
                Anfragen aus der lokalen Bevölkerung oder Partnerorganisationen.{" "}
                <b>Die aktive Beteiligung der lokalen Gemeinschaften</b> an
                allen Projektphasen ist für uns entscheidend, um
                sicherzustellen, dass Projekte ihren Bedürfnissen entsprechen.
                Nach einem Feldbesuch, bei dem wir uns intensiv mit den
                Betroffenen intensiv austauschen und wichtige Daten sammeln,
                wird ein Projektantrag erstellt.
              </p>
              <p className="mt-4 text-lg">
                Die Fördermittelakquise kann mehrere Monate bis Jahre dauern.
                Sobald die Mittel gesichert sind, startet die Umsetzung des
                Projekts in enger Zusammenarbeit mit lokalen Partner:innen. Wir
                begleiten den Prozess und stellen sicher, dass die
                Qualitätsstandards sowie die Fristen eingehalten werden.
              </p>
              <p className="mt-4 text-lg">
                Nach dem Projektabschluss erfolgen eine Evaluierung und
                regelmäßige Nachkontrollen (Monitoring), um die Nachhaltigkeit
                des Projektes sicherzustellen. Dies wird durch (un-)angekündigte
                Besuche und Projektreisen gewährleistet und die regelmäßigen
                Kontakte unter allen Beteiligten.
              </p>
              <button className="mt-5 px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold shadow-xl bg-[#d3103e] text-white">
                <Link
                  href={`/projects`}
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2`}
                >
                  Aktuelle Projekte
                </Link>
              </button>
            </div>

            <div className="basis-1/2 flex justify-center items-center p-4 h-[600px] md:h-[690px]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="Dekoloniale Photo"
                width={480}
                height={690}
                quality={100}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
