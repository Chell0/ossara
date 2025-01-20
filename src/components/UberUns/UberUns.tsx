import TeamSection from "@/components/UberUns/TeamSection/TeamSection";
import Image from "next/image";

export default function UberUns() {
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
              className={`text-[#f7cc55] text-[8rem] font-extrabold leading-tight drop-shadow-xl uppercase p-6 ml-10 mt-20`}
            >
              Inside.
            </h1>
          </div>
        </header>

        {/* Über uns */}
        <section className="relative w-full min-h-screen">
          <div className="flex md:flex-grow flex-row gap-10 pt-10 m-8">
            <div className="relative flex justify-center items-center basis-1/4 p-4 h-[360px] md:h-[400px] mt-20">
              <Image
                src="/bgs/img1.jpg"
                alt="About Photo"
                quality={100}
                width={480}
                height={400}
                className="w-full h-full shadow-lg transform -rotate-[5deg]"
              />
              {/* Tape effect */}
              <div
                className="absolute top-[-10px] right-[10px] w-20 h-10 bg-[#f7cc55] opacity-80 rotate-12 
                  before:absolute before:w-full before:h-full before:bg-title-bg before:rotate-[-6deg] 
                  before:opacity-50 before:top-0 before:left-0 before:content-['']"
              />
            </div>

            <div className="basis-3/4 p-6 mt-10">
              <h3
                className={`text-[#f7cc55] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-sm uppercase pt-10`}
              >
                Über Uns
              </h3>
              <p className="mt-6 text-md text-gray-800">
                Ossara e.V. ist eine Migrant:innen-Selbstorganisation (MSO), die
                sich mit einer dekolonialen Perspektive für Bildung, Gesundheit
                und interkulturelle Vielfalt einsetzt. Wir hinterfragen
                bestehende Machtstrukturen und engagieren uns für eine
                gleichwertige Zusammenarbeit, die auf Respekt, Solidarität und
                Selbstbestimmung beruht.
              </p>
              <p className="mt-6 text-md text-gray-800">
                Neben unserer internationalen Arbeit in Westafrika (Togo, Benin,
                Côte d’Ivoire) engagieren wir uns auch in Hamburg. Hier bieten
                wir integrative Stadtteilarbeit an und unterstützen mit
                Beratungsangeboten, die auf Hilfe zur Selbsthilfe abzielen. In
                unserer entwicklungspolitischen Bildungsarbeit in Hamburg setzen
                wir uns intensiv mit den Themen Dekolonisierung und
                Anti-Schwarzem Rassismus auseinander und schaffen Begegnungs-
                und empowernde Räume für BIPoC.
              </p>
              <p className="mt-6 text-md text-gray-800">
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
        <section className="relative w-full min-h-screen text-[#f7cc55]">
          <div className="flex md:flex-grow flex-row gap-10 m-8">
            <div className="basis-1/2 p-4">
              <h3
                className={`text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-left drop-shadow-sm`}
              >
                Verein
              </h3>
              <p className="mt-4 text-gray-800 text-md">
                Als eingetragener Verein (VR 23447) sind wir politisch und
                konfessionell neutral. Unsere Arbeit umfasst ein breites
                Spektrum an Tätigkeitsfeldern, darunter:
              </p>
              <ul className="mt-4 ml-10 space-y-2 text-base font-semibold text-[#f7cc55] list-disc">
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
              <p className="mt-4 text-md text-gray-800">
                Unsere Projekte werden durch ein starkes Netzwerk aus
                engagierten Mitgliedern, Mitarbeiter:innen, ehrenamtlichen
                Helfer:innen und Partnerorganisationen unterstützt. Dabei setzen
                wir auf die Vielfalt an Erfahrungen und Fähigkeiten in unserem
                Team, um effektiv, konstruktiv und nachhaltig zu arbeiten.
              </p>
              <p className="mt-4 text-md text-gray-800">
                Wir bieten Menschen, die unsere Werte teilen, die Möglichkeit,
                sich durch Praktika oder freiwillige Mitarbeit aktiv in Hamburg
                oder im westafrikanischen Büro einzubringen. Wer uns in unserer
                Arbeit unterstützen möchte, ist herzlich eingeladen, zu spenden
                oder Mitglied zu werden und gemeinsam mit uns an einer
                gerechteren und solidarischeren Zukunft zu arbeiten.
              </p>
            </div>
            <div className="basis-1/2 flex justify-center items-center p-4 h-[600px] md:h-[700px]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="About Photo"
                width={480}
                height={700}
                quality={100}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-28 pb-20">
          <h3
            id="team"
            className={`text-[#f7cc55] text-center text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-sm`}
          >
            Das Team
          </h3>
          {/* Team Photo Grid  */}
          <TeamSection />
        </section>

        {/* History Section */}
        <section className="relative w-full min-h-screen mt-20">
          <div className="flex md:flex-grow flex-row gap-10 m-8">
            <div className="flex justify-center items-center basis-1/2 p-4 h-[560px] md:h-[500px]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="History Photo"
                width={480}
                height={500}
                quality={100}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="basis-1/2 p-4">
              <h3
                className={`text-5xl sm:text-2xl md:text-4xl lg:text-6xl text-[#f7cc55] font-bold text-left drop-shadow-sm`}
              >
                Unsere Geschichte
              </h3>
              <p className="text-gray-800 text-md mt-4">
                Ossara e.V. wurde am 28. Oktober 2017 gegründet, um eine
                dekoloniale und machtkritische internationale Zusammenarbeit zu
                fördern. Der Name „Ossara“, der in der Lamba-Sprache aus dem
                Norden Togos „Alles wird gut!“ bedeutet, steht für unsere Vision
                einer positiven Veränderung, die durch eine gleichwertige
                Zusammenarbeit und die Stärkung der Selbstbestimmung erreicht
                wird.
              </p>
              <p className="text-md mt-4 text-gray-800">
                Unsere ersten Projekte begannen in Togo, wo wir mit lokalen
                Partner:innen Bildungs- und Infrastrukturprojekte durchführten.
                Im Laufe der Jahre haben wir unsere Arbeit auf weitere
                westafrikanische Länder ausgeweitet und gleichzeitig ein neues
                Arbeitsfeld in Hamburg etabliert, das sich auf die Stärkung von
                BIPoC-Communities sowie die Bekämpfung von Rassismus und
                Diskriminierung konzentriert.
              </p>
              <p className="text-md mt-4 text-gray-800">
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
