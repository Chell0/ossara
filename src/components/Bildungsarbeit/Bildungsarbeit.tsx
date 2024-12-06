import { bebasNeue } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Bildungsarbeit() {
  return (
    <>
      <div className="container mx-auto p-6">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-header font-bold leading-tight uppercase`}
          >
            Dekoloniale Bildungsarbeit
          </h1>
        </header>

        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
          <div className="w-full md:w-1/2 flex-shrink-0">
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
        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-600">
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
          <div className="w-full md:w-1/2 flex-shrink-0">
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

        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-600">
              {/* //TODO: REMOVE THIS PORTION AND MAKE IT THE HEADER IN THIS SECTION */}
              <Link href="/eine_welt_promotorinnen">
                Eine Welt-Promotorinnen Program
              </Link>
            </h2>
            {/* //TODO: CHANGE TEXT IN THIS SECTION */}
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </>
  );
}
