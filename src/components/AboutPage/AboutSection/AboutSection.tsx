import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      {/* Über uns */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            quality={100}
            width={560}
            height={640}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="mt-4 text-gray-700">
            Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO), die
            sich mit einer dekolonialen Perspektive für Bildung, Gesundheit und
            interkulturelle Vielfalt einsetzt. Wir hinterfragen bestehende
            Machtstrukturen und engagieren uns für eine gleichwertige
            Zusammenarbeit, die auf Respekt, Solidarität und Selbstbestimmung
            beruht.
            <br />
            Neben unserer internationalen Arbeit in Westafrika (Togo, Benin,
            Côte d’Ivoire) engagieren wir uns auch in Hamburg. Hier bieten wir
            integrative Stadtteilarbeit an und unterstützen mit
            Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
            unserer entwicklungspolitischen Bildungsarbeit in Hamburg setzen wir
            uns intensiv mit den Themen Dekolonisierung und Anti-Schwarzem
            Rassismus auseinander und schaffen Begegnungs- und empowernde Räume
            für BIPoC.
            <br />
            <br />
            Unsere Arbeit basiert auf der Überzeugung, dass tiefgreifende und
            nachhaltige Veränderung nur durch einen dekolonialen und
            machtkritischen Ansatz erreicht werden kann, der die Stimmen und
            Bedürfnisse derjenigen in den Mittelpunkt stellt, die am stärksten
            von kolonialen und rassistischen Strukturen betroffen sind.
          </p>
        </div>
      </section>

      {/* Verein */}
      <section className="w-full flex items-center justify-center mt-20">
        <div className="max-w-md">
          <h2 className="text-[#ffb400] text-6xl py-4 px-4 mt-10 sm:text-4xl md:text5xl lg:text-7xl font-semibold text-center drop-shadow-xl">
            Verein
          </h2>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-10">
        <div className="w-full md:w-1/2">
          <div className="p-6">
            <p className="font-semibold text-gray-800 text-lg mb-4">
              Als eingetragener Verein (VR 23447) sind wir politisch und
              konfessionell neutral. Unsere Arbeit umfasst ein breites Spektrum
              an Tätigkeitsfeldern, darunter:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-500">
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
          </div>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            width={520}
            height={480}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center gap-10 mx-10 mb-20">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <p className="mt-4 text-gray-700">
            Unsere Projekte werden durch ein starkes Netzwerk aus engagierten
            Mitgliedern, Mitarbeiter:innen, ehrenamtlichen Helfer:innen und
            Partnerorganisationen unterstützt. Dabei setzen wir auf die Vielfalt
            an Erfahrungen und Fähigkeiten in unserem Team, um effektiv,
            konstruktiv und nachhaltig zu arbeiten.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mt-4 text-gray-700">
            Wir bieten Menschen, die unsere Werte teilen, die Möglichkeit, sich
            durch Praktika oder freiwillige Mitarbeit aktiv in Hamburg oder im
            westafrikanischen Büro einzubringen. Wer uns in unserer Arbeit
            unterstützen möchte, ist herzlich eingeladen, zu spenden oder
            Mitglied zu werden und gemeinsam mit uns an einer gerechteren und
            solidarischeren Zukunft zu arbeiten.
          </p>
        </div>
      </section>
    </>
  );
}
