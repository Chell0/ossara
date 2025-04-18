import Image from "next/image";
import Link from "next/link";

export default function Bildungsarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/Bildungsarbeit/BILDUNGSARBEIT_MACHTBEWUSST.jpg)",
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#eb7b24] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10"
            >
              Macht.
              <br />
              Bewusst.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24] pb-20 px-8">
          {/* BIG TEXT */}
          <div className="mx-auto pt-10 mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-22 xl:mb-26 2xl:mb-32 3xl:mb-44">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem]  font-semibold leading-normal tracking-normal">
              Wir vernetzen lokale Initiativen und schaffen Räume für den Dialog
              über Dekolonialisierung und soziale Transformation – für eine
              gerechtere Zukunft.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="max-w-full">
              <p className="text-sm xs:text-base xs2:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl leading-relaxed text-left text-black">
                Ossara e.V. setzt sich aktiv für die Sichtbarmachung und
                Auseinandersetzung mit kolonialen Erblasten und
                Dekolonialisierungsprozessen ein. Ein zentraler Aspekt unserer
                Arbeit ist es, dekoloniale Perspektiven sichtbar zu machen und
                die Themen Dekolonisierung und Rassismuskritik in breitere
                gesellschaftliche Diskussionen zu integrieren. Ossara engagiert
                sich darüber hinaus in der Vernetzung mit anderen Initiativen,
                um einen gemeinsamen Austausch zu fördern und eine breite
                Bewegung für soziale Gerechtigkeit zu unterstützen. Wir bieten
                verschiedene Formate an, die auf eine kritische
                Auseinandersetzung mit kolonialen Strukturen abzielen. Dazu
                gehören unter anderem Veranstaltungen und Podiumsdiskussionen,
                die sich mit den historischen und aktuellen Dimensionen des
                Kolonialismus befassen. Durch unsere Bildungsarbeit möchten wir
                dazu beitragen, den kolonialen Blick zu hinterfragen und zu
                einer gerechteren, inklusiveren Gesellschaft beizutragen.
              </p>
            </div>
          </div>
        </section>

        {/* MachtBewusst */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div
            id="machtbewusst"
            className="absolute inset-0 flex flex-col intems-center justify-center pt-20 pb-20"
          >
            <div className="flex md:flex-grow flex-row gap-6 pt-20 m-6">
              <div className="basis-2/3">
                <div className="relative h-[60vh] w-full md:h-[70vh]">
                  <Link
                    href="https://machtbewusst-hamburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/sections/machtbewusst.png`}
                      alt="Machtbewusst Photo"
                      fill
                      quality={100}
                      className="object-cover shadow-2xl"
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Right: Text */}
              <div className="basis-1/3">
                <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left">
                  <Link
                    href="https://machtbewusst-hamburg.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MachtBewusst Hamburg
                  </Link>
                </h2>
                <p className="mt-4 text-base text-black">
                  Bist du auf der Suche nach Themen zur Dekolonisierung?
                  Möchtest du wissen, was in Hamburg passiert und wer sich aktiv
                  für Veränderungen einsetzt? Dann bist du bei uns genau
                  richtig!
                </p>
                <p className="text-base text-black">
                  In unserem Blog „MachtBewusst Hamburg“ dreht sich alles um
                  machtkritische und dekoloniale Perspektiven in der Hamburger
                  Zivilgesellschaft. Wir beleuchten das Engagement von
                  Initiativen, Organisationen und Einzelpersonen, die den
                  Dekolonisierungsprozess in Hamburg vorantreiben. Hier findest
                  du spannende Beiträge, wertvolles Fachwissen und inspirierende
                  Geschichten, die zeigen, wie der Wandel in unserer Stadt
                  gestaltet wird.
                </p>
                <p className="text-base text-black">
                  Komm vorbei, lass dich von unseren Inhalten inspirieren und
                  informiere dich über die vielfältigen Projekte und Aktionen,
                  die das Ziel haben, gesellschaftliche Ungleichheiten zu
                  bekämpfen und den Dialog über Dekolonisierung zu fördern.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eine Welt-Promotorinnen */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div
            id="promotorinnen"
            className="absolute inset-0 flex flex-col intems-center justify-center pt-20"
          >
            <div className="flex md:flex-grow flex-row gap-10 pt-10 mt-20 m-6">
              <div className="basis-1/2">
                <h3
                  className={`text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-left`}
                >
                  Eine Welt-Promotor*innen Programm
                </h3>
                <p className="text-lg text-black">
                  Die Fachstelle dekoloniale Perspektiven im
                  entwicklungspolitischen Engagement ist Teil des bundesweiten
                  Eine Welt-Promotor:innen-Programms, welches in Hamburg von
                  hamburg.global koordiniert wird. Unsere Eine
                  Welt-Promotor:innen setzen sich dafür ein, die Stimmen von
                  BIPoC und diasporischen Gemeinschaften zu stärken und
                  Partizipationsprozesse zu fördern. Ihr Ziel ist es, das
                  zivilgesellschaftliche Engagement für eine gerechtere,
                  nachhaltigere Welt sichtbarer zu machen und neue Kooperationen
                  zu fördern. Sie tragen aktiv zur Umsetzung der
                  UN-Nachhaltigkeitsziele bei, insbesondere zur Reduzierung von
                  Ungleichheiten (Ziel 10). Der Fokus liegt auf der Vernetzung
                  und Beratung von zivilgesellschaftlichen Initiativen und
                  Akteur:innen.
                </p>
                <p className="text-lg text-black">
                  Die Fachstelle Dekolonisierung ist Teil des bundesweiten Eine
                  Welt-Promotor:innen-Programms, das in Hamburg von
                  hamburg.global koordiniert wird.
                </p>
                <p className="text-lg text-black">
                  Weitere Informationen finden Sie{" "}
                  <Link
                    href={`/eine_welt_promotorinnen`}
                    className="bg-[#eb7b24] text-white font-semibold shadow-xl p-1"
                  >
                    hier
                  </Link>
                </p>
              </div>
              <div className="basis-1/2">
                <div className="flex justify-center items-center h-[400px] md:h-[490px]">
                  <Image
                    src={`/sections/eine-welt-fach-promotorinnen.jpg`}
                    alt="Eine Welt-Promotorinnen Photo"
                    width={480}
                    height={490}
                    quality={100}
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dekoloniale Bildungsreisen */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div
            id="bildungsreisen"
            className="absolute inset-0 flex flex-col intems-center justify-center pt-20"
          >
            <div className="flex md:flex-grow flex-row gap-10 pt-10 mt-20 m-6">
              <div className="basis-1/2">
                <div className="flex justify-center items-center h-[400px] md:h-[460px]">
                  <Image
                    src={`/images/Bildungsarbeit/Bildungsarbeit_Bildungsreisen.jpg`}
                    alt="Bildungsreisen Photo"
                    width={480}
                    height={480}
                    quality={100}
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <h3
                  className={`text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-left`}
                >
                  Dekoloniale Bildungsreisen
                </h3>
                <p className="mt-4 text-lg text-black">
                  Unsere dekolonialen Bildungsreisen bieten dir die Möglichkeit,
                  historische und aktuelle Zusammenhänge von Kolonialismus und
                  Machtstrukturen auf eine neue Art und Weise zu entdecken.
                  Durch den direkten Austausch mit Menschen vor Ort, Besuche von
                  bedeutenden historischen Stätten und das Kennenlernen von
                  lokalen Perspektiven kannst du mehr über die Auswirkungen des
                  Kolonialismus erfahren und reflektieren. Dabei geht es nicht
                  nur um die Vergangenheit, sondern auch darum, wie diese
                  Geschichte noch heute das Leben und die Gesellschaft prägt.
                  Wir möchten ein kritisches Bewusstsein für koloniale
                  Erbschaften fördern und gleichzeitig die Chancen des
                  interkulturellen Dialogs und des gegenseitigen Lernens
                  aufzeigen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KoRaBi */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div
            id="korabi"
            className="absolute inset-0 flex flex-col intems-center justify-center pt-20"
          >
            <div className="flex md:flex-grow flex-row gap-10 pt-10 mt-20 m-6">
              <div className="basis-1/2">
                <h3
                  className={`text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-left`}
                >
                  KoRaBi
                </h3>
                <p className="mt-4 text-lg text-black">
                  Konzeptwerk Rassismuskritische Bildungsarbeit entwickelt
                  innovative Konzepte für rassismuskritische Bildungsarbeit und
                  professionalisiert Bildner:innen in diesem Bereich. Das
                  Projekt zielt darauf ab, Fachkräfte und Multiplikator:innen
                  mit praxisorientierten Ansätzen zu unterstützen,
                  rassismuskritische Perspektiven zu integrieren und in ihrer
                  Arbeit zu vermitteln.
                </p>
                <p className="mt-4 text-lg text-black">
                  KoRaBi wird ehrenamtlich von <b>Sam Schulz</b> und{" "}
                  <b>Tatiana La Mura Floes</b> geleitet, die beide über
                  umfassende Erfahrungen in der rassismuskritischen
                  Bildungsarbeit und in der Durchführung von Fortbildungen für
                  Multiplikator:innen verfügen. Ihre Expertise sorgt dafür, dass
                  die Bildungsarbeit sowohl theoretisch fundiert als auch
                  praktisch wirksam ist.
                  <Link
                    href="/korabi"
                    className="bg-[#eb7b24] text-white font-semibold shadow-xl p-1"
                  >
                    hier
                  </Link>
                </p>
              </div>
              <div className="basis-1/2">
                <div className="flex justify-center items-center h-[400px] md:h-[460px]">
                  <Image
                    src={`/images/Bildungsarbeit/OSSARA_Integrative_Stadtarbeit.jpg`}
                    alt="Korabi Photo"
                    width={480}
                    height={480}
                    quality={100}
                    className="w-full h-full object-cover shadow-lg"
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
