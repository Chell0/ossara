import Image from "next/image";
import Link from "next/link";

import ContactPerson from "@/components/ContactPerson/ContactPerson";

export default function Dekoloniale() {
  return (
    <>
      <div className="mx-auto">
        <header
          className="h-screen w-full bg-cover bg-center relative mb-10 p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            id="dekoloniale"
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

        <section className="relative w-full min-h-screen text-[#d3103e] pb-20">
          <div className="flex flex-col md:flex-row md:flex-grow">
            <div className="basis-full">
              <p className="text-[4rem] font-semibold leading-none p-2 mb-20">
                Mit dekolonialer Perspektive setzen wir Projekte um, die die
                lokale Selbstbestimmung stärken, nachhaltige Verbesserungen in
                den Lebensbedingungen ermöglichen und langfristige
                Partnerschaften fördern.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end mt-20">
            <div className="basis-1/2 text-black text-base p-2">
              <p className="mt-4">
                Ossara e.V. verfolgt einen dekolonialen Ansatz in der
                internationalen Zusammenarbeit, um gleichwertige Partnerschaften
                und nachhaltige Entwicklung zu fördern. Wir setzen uns dafür
                ein, koloniale Strukturen zu hinterfragen und bestehende
                Machtungleichheiten zu überwinden. In enger Zusammenarbeit mit
                lokalen Partner:innen in <b>Togo</b>, <b>Benin</b> und{" "}
                <b>Côte d&apos;Ivoire</b> arbeiten wir daran, die
                Selbstbestimmung der Gemeinschaften zu stärken und die
                Lebensbedingungen langfristig zu verbessern.
              </p>
              <p className="mt-2">
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
        <section className="relative w-full min-h-screen text-[#d3103e]">
          <div className="absolute inset-0 flex flex-row items-center justify-center">
            <div className="flex md:flex-grow flex-row gap-3 md:gap-6">
              <div className="basis-1/2 m-2">
                <p className="text-2xl md:text-3xl lg:text-4xl mb-2 text-center font-semibold leading-none">
                  Unsere Projekte umfassen:
                </p>
                <ul className="ml-20 mt-4 text-base list-disc text-black space-y-2">
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

              {/* Contact Section */}
              <div className="basis-1/2">
                <div className="text-center">
                  <h3 className="text-[#d3103e] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#d3103e]" />
                </div>
                <ContactPerson
                  name="Gaetan Tagba"
                  position="Projektkoordination"
                  email="gaetan.tagba[at]ossara.de"
                  phone="(+228) 91 077338"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projektprozess */}
        <section className="relative w-full min-h-screen">
          <div
            id="projekte"
            className="absolute inset-0 flex flex-col intems-center justify-center"
          >
            <div className="flex md:flex-grow flex-row gap-6 m-6">
              <div className="basis-1/2">
                <h3
                  className={`text-[#d3103e] text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-left`}
                >
                  Projektprozess
                </h3>
                <p className="mt-2 text-base text-black">
                  Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von
                  Anfragen aus der lokalen Bevölkerung oder
                  Partnerorganisationen.{" "}
                  <b>Die aktive Beteiligung der lokalen Gemeinschaften</b> an
                  allen Projektphasen ist für uns entscheidend, um
                  sicherzustellen, dass Projekte ihren Bedürfnissen entsprechen.
                  Nach einem Feldbesuch, bei dem wir uns intensiv mit den
                  Betroffenen intensiv austauschen und wichtige Daten sammeln,
                  wird ein Projektantrag erstellt.
                </p>
                <p className="mt-2 text-base text-black">
                  Die Fördermittelakquise kann mehrere Monate bis Jahre dauern.
                  Sobald die Mittel gesichert sind, startet die Umsetzung des
                  Projekts in enger Zusammenarbeit mit lokalen Partner:innen.
                  Wir begleiten den Prozess und stellen sicher, dass die
                  Qualitätsstandards sowie die Fristen eingehalten werden.
                </p>
                <p className="mt-2 text-base text-black">
                  Nach dem Projektabschluss erfolgen eine Evaluierung und
                  regelmäßige Nachkontrollen (Monitoring), um die Nachhaltigkeit
                  des Projektes sicherzustellen. Dies wird durch
                  (un-)angekündigte Besuche und Projektreisen gewährleistet und
                  die regelmäßigen Kontakte unter allen Beteiligten.
                </p>
                <button className="mt-5 px-8 py-4 text-md sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg shadow-xl bg-[#d3103e] text-white">
                  <Link
                    href={`/projects`}
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2`}
                  >
                    Aktuelle Projekte
                  </Link>
                </button>
              </div>
              <div className="basis-1/2">
                <div className="relative h-[60vh] w-full md:h-[70vh]">
                  <Image
                    src={`/bgs/img1.jpg`}
                    alt="Dekoloniale Photo"
                    fill
                    priority
                    quality={100}
                    className="object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
