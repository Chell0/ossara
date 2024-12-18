import { bebasNeue } from "@/app/fonts";
import PersonCard from "@/components/Dekoloniale/PersonCard/PersonCard";
import Image from "next/image";

export default function Dekoloniale() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center mt-10">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercase`}
          >
            Dekoloniale Internationale Zusammenarbeit
          </h1>
        </header>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-20">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="Dekoloniale Photo"
              width={480}
              height={520}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-800 text-base">
              Ossara e.V. verfolgt einen dekolonialen Ansatz in der
              internationalen Zusammenarbeit, um gleichwertige Partnerschaften
              und nachhaltige Entwicklung zu fördern. Wir setzen uns dafür ein,
              koloniale Strukturen zu hinterfragen und bestehende
              Machtungleichheiten zu überwinden. In enger Zusammenarbeit mit
              lokalen Partner:innen in <b>Togo</b>, <b>Benin</b> und{" "}
              <b>Côte d'Ivoire</b> arbeiten wir daran, die Selbstbestimmung der
              Gemeinschaften zu stärken und die Lebensbedingungen langfristig zu
              verbessern.
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Dabei legen wir großen Wert auf diasporische Stimmen, die
              Beteiligung der Menschen vor Ort und die Berücksichtigung ihrer
              Perspektiven. Unsere Projekte werden{" "}
              <b>auf Augenhöhe und partizipativ entwickelt</b>, um gemeinsam die
              sozialen und wirtschaftlichen Herausforderungen zu bewältigen und
              eine gerechte, inklusive Zukunft zu gestalten.
            </p>
          </div>
        </section>

        {/*Team Section*/}
        <section className="flex flex-col items-center gap-10 py-10 mt-20 mx-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="p-6">
              <p className="text-base text-gray-800">
                Unsere Projekte umfassen:
                <ul className="ml-10 space-y-2 mt-4 text-base list-disc text-yellow-500 font-semibold">
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
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2">
            <PersonCard />
          </div>
        </section>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-20">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="Dekoloniale Photo"
              width={480}
              height={520}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3
              className={` ${bebasNeue.className} text-[#ffb400] text-6xl px-4 mt-10 font-semibold text-center drop-shadow-xl`}
            >
              Projektprozess
            </h3>
            <p className="mt-4 text-gray-800 text-base">
              Der Projektprozess bei Ossara e.V. beginnt mit der Annahme von
              Anfragen aus der lokalen Bevölkerung oder Partnerorganisationen.{" "}
              <b>Die aktive Beteiligung der lokalen Gemeinschaften</b> an allen
              Projektphasen ist für uns entscheidend, um sicherzustellen, dass
              Projekte ihren Bedürfnissen entsprechen. Nach einem Feldbesuch,
              bei dem wir uns intensiv mit den Betroffenen intensiv austauschen
              und wichtige Daten sammeln, wird ein Projektantrag erstellt.
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Die Fördermittelakquise kann mehrere Monate bis Jahre dauern.
              Sobald die Mittel gesichert sind, startet die Umsetzung des
              Projekts in enger Zusammenarbeit mit lokalen Partner:innen. Wir
              begleiten den Prozess und stellen sicher, dass die
              Qualitätsstandards sowie die Fristen eingehalten werden.
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Nach dem Projektabschluss erfolgen eine Evaluierung und
              regelmäßige Nachkontrollen (Monitoring), um die Nachhaltigkeit des
              Projektes sicherzustellen. Dies wird durch (un-)angekündigte
              Besuche und Projektreisen gewährleistet und die regelmäßigen
              Kontakte unter allen Beteiligten.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
