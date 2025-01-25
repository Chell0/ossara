import Image from "next/image";
import Link from "next/link";

export default function Bildungsarbeit() {
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
              className={`text-[#eb7b24] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase ml-10 mt-20`}
            >
              Macht.
              <br />
              Bewusst.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row mb-10">
            <div className="basis-full">
              <h3 className="text-6xl md:text-7xl font-semibold leading-tight m-4">
                Wir vernetzen lokale Initiativen und schaffen Räume für den
                Dialog über Dekolonialisierung und soziale Transformation – für
                eine gerechtere Zukunft.
              </h3>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end">
            <div className="basis-1/2 mr-10 mt-10">
              <p className="mt-4 text-md">
                Ossara e.V. setzt sich aktiv für die Sichtbarmachung und
                Auseinandersetzung mit <strong>kolonialen Erblasten</strong> und{" "}
                <strong>Dekolonialisierungsprozessen</strong> ein. Ein zentraler
                Aspekt unserer Arbeit ist es,{" "}
                <strong>dekoloniale Perspektiven</strong> sichtbar zu machen und
                die Themen <strong>Dekolonisierung</strong> und{" "}
                <strong>Rassismuskritik</strong> in breitere gesellschaftliche
                Diskussionen zu integrieren. Ossara engagiert sich darüber
                hinaus in der{" "}
                <strong>Vernetzung mit anderen Initiativen</strong>, um einen
                gemeinsamen Austausch zu fördern und eine breite Bewegung für
                soziale Gerechtigkeit zu unterstützen.
              </p>
              <p className="mt-4 text-md">
                Wir bieten verschiedene Formate an, die auf eine kritische
                Auseinandersetzung mit kolonialen Strukturen abzielen. Dazu
                gehören unter anderem Veranstaltungen und{" "}
                <strong>Podiumsdiskussionen</strong>, die sich mit den
                historischen und aktuellen Dimensionen des Kolonialismus
                befassen.
              </p>
              <p className="mt-4 text-md">
                Durch unsere Bildungsarbeit möchten wir dazu beitragen, den
                <strong>kolonialen Blick</strong> zu hinterfragen und zu einer
                gerechteren, inklusiveren Gesellschaft beizutragen.
              </p>
            </div>
          </div>
        </section>

        {/* MachtBewusst */}
        <section className="relative w-full min-h-screen text-[#eb7b24] flex justify-center items-center">
          <div className="flex flex-row gap-6 max-w-7xl mx-auto px-4">
            {/* Left: Image */}
            <div className="basis-1/2 p-4 flex justify-center items-center">
              <div className="w-full h-[320px] md:h-[380px]">
                <Link
                  href="https://machtbewusst-hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <Image
                    src="/sections/machtbewusst.png"
                    alt="About Photo"
                    width={620}
                    height={380}
                    quality={100}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </Link>
              </div>
            </div>

            {/* Right: Text */}
            <div className="basis-1/2 p-4">
              <h3 className="drop-shadow-md text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left">
                <Link
                  href="https://machtbewusst-hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MachtBewusst Hamburg
                </Link>
              </h3>
              <p className="mt-4 text-md">
                Bist du auf der Suche nach Themen zur Dekolonisierung? Möchtest
                du wissen, was in Hamburg passiert und wer sich aktiv für
                Veränderungen einsetzt? Dann bist du bei uns genau richtig!
              </p>
              <p className="mt-4 text-md">
                In unserem Blog „MachtBewusst Hamburg“ dreht sich alles um
                machtkritische und dekoloniale Perspektiven in der Hamburger
                Zivilgesellschaft. Wir beleuchten das Engagement von
                Initiativen, Organisationen und Einzelpersonen, die den
                Dekolonisierungsprozess in Hamburg vorantreiben. Hier findest du
                spannende Beiträge, wertvolles Fachwissen und inspirierende
                Geschichten, die zeigen, wie der Wandel in unserer Stadt
                gestaltet wird.
              </p>
              <p className="mt-4 text-md">
                Komm vorbei, lass dich von unseren Inhalten inspirieren und
                informiere dich über die vielfältigen Projekte und Aktionen, die
                das Ziel haben, gesellschaftliche Ungleichheiten zu bekämpfen
                und den Dialog über Dekolonisierung zu fördern.
              </p>
            </div>
          </div>
        </section>

        {/* Eine Welt-Promotorinnen */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row gap-10 m-8">
            <div className="basis-1/2 p-4">
              <h3
                className={`text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-left drop-shadow-md`}
              >
                Eine Welt-Promotor*innen Programm
              </h3>
              <p className="mt-4 text-md">
                Die Fachstelle dekoloniale Perspektiven im
                entwicklungspolitischen Engagement ist Teil des bundesweiten
                Eine Welt-Promotor:innen-Programms, welches in Hamburg von
                hamburg.global koordiniert wird. Unsere Eine Welt-Promotor:innen
                setzen sich dafür ein, die Stimmen von BIPoC und diasporischen
                Gemeinschaften zu stärken und Partizipationsprozesse zu fördern.
                Ihr Ziel ist es, das zivilgesellschaftliche Engagement für eine
                gerechtere, nachhaltigere Welt sichtbarer zu machen und neue
                Kooperationen zu fördern. Sie tragen aktiv zur Umsetzung der
                UN-Nachhaltigkeitsziele bei, insbesondere zur Reduzierung von
                Ungleichheiten (Ziel 10). Der Fokus liegt auf der Vernetzung und
                Beratung von zivilgesellschaftlichen Initiativen und
                Akteur:innen.
              </p>
              <p className="mt-4 text-md">
                Die Fachstelle Dekolonisierung ist Teil des bundesweiten Eine
                Welt-Promotor:innen-Programms, das in Hamburg von hamburg.global
                koordiniert wird.
              </p>
              <p className="mt-4 text-md">
                Weitere Informationen finden Sie{" "}
                <Link
                  href={`/eine_welt_promotorinnen`}
                  className="bg-[#eb7b24] text-white font-semibold shadow-xl p-1"
                >
                  hier
                </Link>
              </p>
            </div>
            <div className="basis-1/2 flex justify-center items-center h-[420px] md:h-[480px]">
              <Image
                src={`/sections/eine-welt-fach-promotorinnen.jpg`}
                alt="Eine Welt-Promotorinnen Photo"
                width={480}
                height={480}
                quality={100}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
