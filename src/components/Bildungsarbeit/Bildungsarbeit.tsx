import Image from "next/image";
import Link from "next/link";

export default function Bildungsarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Bildungsarbeit/BILDUNGSARBEIT_MACHTBEWUSST.jpg"
              fill
              alt="Home Page Header image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content (moved left & down) */}
          <div
            className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10 "
          >
            <div
              className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 "
            >
              <h1
                className="font-extrabold 3xl:text-[160px] text-3xl text-[#eb7b24] xs2:text-5xl xs:text-4xl uppercase leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] "
              >
                <span className="block">Macht.</span>
                <span className="block">Bewusst.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen w-full px-8 text-[#eb7b24]">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-52 mb-12 xs:mb-14 pt-8 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-48">
            <p className="mx-auto font-semibold 3xl:text-[10rem] text-2xl xs2:text-4xl xs:text-3xl leading-tight tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem]">
              Wir vernetzen lokale Initiativen und schaffen Räume für den Dialog
              über Dekolonialisierung und soziale Transformation – für eine
              gerechtere Zukunft.
            </p>
          </div>

          {/* small text */}
          <div className="flex w-full justify-center">
            <div className="max-w-7xl">
              <p className="text-left 3xl:text-3xl text-black text-sm xs2:text-xs xs:text-xs leading-relaxed sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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

        {/* MachtBewusst Hamburg */}
        <section
          id="#machtbewusst"
          className="relative flex min-h-[80vh] w-full items-center justify-center py-section md:min-h-screen"
        >
          <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-12">
            {/* Image Container */}
            <div className="flex w-full items-center p-4 md:w-1/2">
              <div className="relative aspect-[21/9] max-h-[500px] w-full md:max-h-[600px]">
                <Link
                  href="https://machtbewusst-hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit MachtBewusst Hamburg website"
                >
                  <Image
                    src="/images/Bildungsarbeit/machtbewusst.jpg"
                    alt="machtBewusst image"
                    fill
                    quality={90}
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex w-full max-w-prose flex-col justify-center p-4 md:w-1/2">
              <h2 className="mb-6 font-bold text-3xl text-[#eb7b24] md:text-4xl lg:text-5xl">
                <Link
                  href="https://machtbewusst-hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  MachtBewusst Hamburg
                </Link>
              </h2>
              <div className="space-y-4 text-base text-black md:text-lg">
                <p>
                  Bist du auf der Suche nach Themen zur Dekolonisierung?
                  Möchtest du wissen, was in Hamburg passiert und wer sich aktiv
                  für Veränderungen einsetzt? Dann bist du bei uns genau
                  richtig!
                </p>
                <p>
                  In unserem Blog „MachtBewusst Hamburg" dreht sich alles um
                  machtkritische und dekoloniale Perspektiven in der Hamburger
                  Zivilgesellschaft. Wir beleuchten das Engagement von
                  Initiativen, Organisationen und Einzelpersonen, die den
                  Dekolonisierungsprozess in Hamburg vorantreiben.
                </p>
                <p>
                  Komm vorbei, lass dich von unseren Inhalten inspirieren und
                  informiere dich über die vielfältigen Projekte und Aktionen,
                  die das Ziel haben, gesellschaftliche Ungleichheiten zu
                  bekämpfen und den Dialog über Dekolonisierung zu fördern.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eine Welt-Promotor*innen */}
        <section className="relative flex min-h-[80vh] w-full items-center justify-center py-section md:min-h-screen">
          <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-12">
            {/* Text Content */}
            <div className="flex w-full max-w-prose flex-col justify-center p-4 md:w-1/2">
              <h3 className="mb-6 font-semibold text-3xl text-[#eb7b24] md:text-4xl lg:text-5xl">
                Eine Welt-Promotor*innen Programm
              </h3>
              <div className="space-y-4 text-base text-black md:text-lg">
                <p>
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
                <p>
                  Die Fachstelle Dekolonisierung ist Teil des bundesweiten Eine
                  Welt-Promotor:innen-Programms, das in Hamburg von
                  hamburg.global koordiniert wird.
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex w-full items-center justify-center p-4 md:w-1/2">
              <div className="relative aspect-square max-h-[500px] w-full md:max-h-[600px]">
                <Image
                  src="/images/Bildungsarbeit/eine-welt-fach-promotorinnen.jpg"
                  alt="Eine Welt-Promotor*innen team working in Hamburg"
                  fill
                  quality={90}
                  className="object-cover shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dekoloniale Bildungsreisen */}
        <section
          id="#bildungsreisen"
          className="relative flex min-h-[80vh] w-full items-center justify-center py-section md:min-h-screen"
        >
          <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-12">
            {/* Image Container */}
            <div className="flex w-full items-center justify-center p-4 md:w-1/2">
              <div className="relative aspect-square max-h-[500px] w-full md:max-h-[600px]">
                <Image
                  src="/images/Bildungsarbeit/Bildungsarbeit_Bildungsreisen.jpg"
                  alt="Group participating in dekoloniale Bildungsreisen"
                  fill
                  quality={90}
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex w-full max-w-prose flex-col justify-center p-4 md:w-1/2">
              <h3 className="mb-6 font-semibold text-3xl text-[#eb7b24] md:text-4xl lg:text-5xl">
                Dekoloniale Bildungsreisen
              </h3>
              <div className="space-y-4 text-base text-black md:text-lg">
                <p>
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
        <section className="relative flex min-h-[80vh] w-full items-center justify-center py-section md:min-h-screen">
          <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-12">
            {/* Text Content */}
            <div className="flex w-full max-w-prose flex-col justify-center p-4 md:w-1/2">
              <h3 className="mb-6 font-semibold text-3xl text-[#eb7b24] md:text-4xl lg:text-5xl">
                KoRaBi
              </h3>
              <div className="space-y-4 text-base text-black md:text-lg">
                <p>
                  Konzeptwerk Rassismuskritische Bildungsarbeit entwickelt
                  innovative Konzepte für rassismuskritische Bildungsarbeit und
                  professionalisiert Bildner:innen in diesem Bereich. Das
                  Projekt zielt darauf ab, Fachkräfte und Multiplikator:innen
                  mit praxisorientierten Ansätzen zu unterstützen,
                  rassismuskritische Perspektiven zu integrieren und in ihrer
                  Arbeit zu vermitteln.
                </p>
                <p>
                  KoRaBi wird ehrenamtlich von <b>Sam Schulz</b> und{" "}
                  <b>Tatiana La Mura Floes</b> geleitet, die beide über
                  umfassende Erfahrungen in der rassismuskritischen
                  Bildungsarbeit und in der Durchführung von Fortbildungen für
                  Multiplikator:innen verfügen. Ihre Expertise sorgt dafür, dass
                  die Bildungsarbeit sowohl theoretisch fundiert als auch
                  praktisch wirksam ist.
                </p>
                <p className="mt-6">
                  <Link
                    href="/korabi"
                    className="inline-block bg-[#eb7b24] px-6 py-2 font-medium text-white transition-colors hover:bg-[#d56a1e]"
                  >
                    Hier
                  </Link>
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex w-full items-center justify-center p-4 md:w-1/2">
              <div className="relative aspect-square max-h-[500px] w-full md:max-h-[600px]">
                <Image
                  src="/images/Bildungsarbeit/OSSARA_Integrative_Stadtarbeit.jpg"
                  alt="KoRaBi workshop session"
                  fill
                  quality={90}
                  className="object-cover shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
