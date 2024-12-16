import { bebasNeue } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Bildungsarbeit() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-header font-bold leading-tight uppercase`}
          >
            Dekoloniale Bildungsarbeit
          </h1>
        </header>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 mb-20 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={560}
              height={480}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-sm text-gray-800">
              Ossara e.V. setzt sich aktiv für die Sichtbarmachung und
              Auseinandersetzung mit <strong>kolonialen Erblasten</strong> und
              <strong>Dekolonialisierungsprozessen</strong> ein. Ein zentraler
              Aspekt unserer Arbeit ist es,{" "}
              <strong>dekoloniale Perspektiven</strong> sichtbar zu machen und
              die Themen <strong>Dekolonisierung</strong> und{" "}
              <strong>Rassismuskritik</strong> in breitere gesellschaftliche
              Diskussionen zu integrieren. Ossara engagiert sich darüber hinaus
              in der <strong>Vernetzung mit anderen Initiativen</strong>, um
              einen gemeinsamen Austausch zu fördern und eine breite Bewegung
              für soziale Gerechtigkeit zu unterstützen.
              <br />
              <br />
              Wir bieten verschiedene Formate an, die auf eine kritische
              Auseinandersetzung mit kolonialen Strukturen abzielen. Dazu
              gehören unter anderem Veranstaltungen und{" "}
              <strong>Podiumsdiskussionen</strong>, die sich mit den
              historischen und aktuellen Dimensionen des Kolonialismus befassen.
              <br />
              <br />
              Durch unsere Bildungsarbeit möchten wir dazu beitragen, den
              <strong>kolonialen Blick</strong> zu hinterfragen und zu einer
              gerechteren, inklusiveren Gesellschaft beizutragen.
            </p>
          </div>
        </section>

        {/* Machtbewusst */}
        <section className="flex flex-col items-center py-10 mx-10 mt-20 mb-20 md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h2
              className={`${bebasNeue.className} drop-shadow-lg text-5xl font-bold text-[#ffb400] uppercase`}
            >
              <Link
                href="https://machtbewusst-hamburg.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machtbewusst-Hamburg
              </Link>
            </h2>
            <p className="mt-4 text-sm text-gray-800">
              Bist du auf der Suche nach Themen zur Dekolonisierung? Möchtest du
              wissen, was in Hamburg passiert und wer sich aktiv für
              Veränderungen einsetzt? Dann bist du bei uns genau richtig!
              <br />
              <br />
              In unserem Blog „MachtBewusst Hamburg“ dreht sich alles um
              machtkritische und dekoloniale Perspektiven in der Hamburger
              Zivilgesellschaft. Wir beleuchten das Engagement von Initiativen,
              Organisationen und Einzelpersonen, die den Dekolonisierungsprozess
              in Hamburg vorantreiben. Hier findest du spannende Beiträge,
              wertvolles Fachwissen und inspirierende Geschichten, die zeigen,
              wie der Wandel in unserer Stadt gestaltet wird.
              <br />
              <br />
              Komm vorbei, lass dich von unseren Inhalten inspirieren und
              informiere dich über die vielfältigen Projekte und Aktionen, die
              das Ziel haben, gesellschaftliche Ungleichheiten zu bekämpfen und
              den Dialog über Dekolonisierung zu fördern.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={560}
              height={480}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Eine Welt-Promotorinnen */}
        <section className="flex items-center justify-center w-full py-10 mt-10 ">
          <div className="max-w-3xl mx-auto">
            <h2
              className={`${bebasNeue.className} text-[#ffb400] mt-20 text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center drop-shadow-md`}
            >
              Eine Welt-Promotor*innen Program
            </h2>
          </div>
        </section>
        <section className="flex flex-col items-center py-10 mx-10 mt-10 mb-20 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={560}
              height={480}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-sm text-gray-800">
              Die Fachstelle dekoloniale Perspektiven im entwicklungspolitischen
              Engagement ist Teil des bundesweiten Eine
              Welt-Promotor:innen-Programms, welches in Hamburg von
              hamburg.global koordiniert wird. Unsere Eine Welt-Promotor:innen
              setzen sich dafür ein, die Stimmen von BIPoC und diasporischen
              Gemeinschaften zu stärken und Partizipationsprozesse zu fördern.
              Ihr Ziel ist es, das zivilgesellschaftliche Engagement für eine
              gerechtere, nachhaltigere Welt sichtbarer zu machen und neue
              Kooperationen zu fördern. Sie tragen aktiv zur Umsetzung der
              UN-Nachhaltigkeitsziele bei, insbesondere zur Reduzierung von
              Ungleichheiten (Ziel 10). Der Fokus liegt auf der Vernetzung und
              Beratung von zivilgesellschaftlichen Initiativen und Akteur:innen.
              <br />
              <br />
              Die Fachstelle Dekolonisierung ist Teil des bundesweiten Eine
              Welt-Promotor:innen-Programms, das in Hamburg von hamburg.global
              koordiniert wird.
              <br />
              <br />
              Weitere Informationen finden Sie{" "}
              <Link
                href={`/eine_welt_promotorinnen`}
                className="bg-main-bg text-[#ffb400] font-semibold rounded-lg shadow-xl p-1"
              >
                hier.
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
