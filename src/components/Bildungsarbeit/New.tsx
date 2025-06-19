import Image from "next/image";
import Link from "next/link";

export default function New() {
  return (
    <>
      <section className="relative min-h-[80vh] w-full items-center justify-center px-4 sm:px-6 md:min-h-screenflex md:px-10">
        <div className="container flex w-full flex-col items-stretch gap-8 md:flex-row md:gap-16">
          {/* Image Container - Now using object-contain */}
          <div className="flex w-full items-center md:w-1/2">
            <div className="relative h-full min-h-[400px] w-full">
              <Image
                src="/images/Bildungsarbeit/machtbewusst.png"
                alt="Full screenshot of MachtBewusst Hamburg website showing all decolonization resources"
                width={2000}
                height={870}
                quality={90}
                className="h-full w-full object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex w-full flex-col justify-center py-10 md:w-1/2">
            <h2 className="mb-6 font-extrabold text-4xl text-[#eb7b24] leading-tight sm:text-5xl md:text-6xl">
              <Link
                href="https://machtbewusst-hamburg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                MachtBewusst Hamburg
              </Link>
            </h2>

            <div className="space-y-6 text-base text-black sm:text-lg md:text-xl">
              <p>
                Bist du auf der Suche nach Themen zur Dekolonisierung? Möchtest
                du wissen, was in Hamburg passiert und wer sich aktiv für
                Veränderungen einsetzt? Dann bist du bei uns genau richtig!
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
                informiere dich über die vielfältigen Projekte und Aktionen, die
                das Ziel haben, gesellschaftliche Ungleichheiten zu bekämpfen
                und den Dialog über Dekolonisierung zu fördern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eine Welt-Promotorinnen */}
      <section className="relative min-h-screen w-full text-[#eb7b24]">
        <div
          id="promotorinnen"
          className="intems-center absolute inset-0 flex flex-col justify-center pt-20"
        >
          <div className="m-6 mt-20 flex flex-row gap-10 pt-10 md:flex-grow">
            <div className="basis-1/2">
              <h3
                className={`text-left font-semibold text-4xl sm:text-2xl md:text-3xl lg:text-5xl`}
              >
                Eine Welt-Promotor*innen Programm
              </h3>
              <p className="text-black text-lg">
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
              <p className="text-black text-lg">
                Die Fachstelle Dekolonisierung ist Teil des bundesweiten Eine
                Welt-Promotor:innen-Programms, das in Hamburg von hamburg.global
                koordiniert wird.
              </p>
            </div>
            <div className="basis-1/2">
              <div className="flex h-[400px] items-center justify-center md:h-[490px]">
                <Image
                  src={`/sections/eine-welt-fach-promotorinnen.jpg`}
                  alt="Eine Welt-Promotorinnen Photo"
                  width={480}
                  height={490}
                  quality={100}
                  className="h-full w-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dekoloniale Bildungsreisen */}
      <section className="relative min-h-screen w-full text-[#eb7b24]">
        <div
          id="bildungsreisen"
          className="intems-center absolute inset-0 flex flex-col justify-center pt-20"
        >
          <div className="m-6 mt-20 flex flex-row gap-10 pt-10 md:flex-grow">
            <div className="basis-1/2">
              <div className="flex h-[400px] items-center justify-center md:h-[460px]">
                <Image
                  src={`/images/Bildungsarbeit/Bildungsarbeit_Bildungsreisen.jpg`}
                  alt="Bildungsreisen Photo"
                  width={480}
                  height={480}
                  quality={100}
                  className="h-full w-full object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="basis-1/2">
              <h3
                className={`text-left font-semibold text-4xl sm:text-2xl md:text-3xl lg:text-5xl`}
              >
                Dekoloniale Bildungsreisen
              </h3>
              <p className="mt-4 text-black text-lg">
                Unsere dekolonialen Bildungsreisen bieten dir die Möglichkeit,
                historische und aktuelle Zusammenhänge von Kolonialismus und
                Machtstrukturen auf eine neue Art und Weise zu entdecken. Durch
                den direkten Austausch mit Menschen vor Ort, Besuche von
                bedeutenden historischen Stätten und das Kennenlernen von
                lokalen Perspektiven kannst du mehr über die Auswirkungen des
                Kolonialismus erfahren und reflektieren. Dabei geht es nicht nur
                um die Vergangenheit, sondern auch darum, wie diese Geschichte
                noch heute das Leben und die Gesellschaft prägt. Wir möchten ein
                kritisches Bewusstsein für koloniale Erbschaften fördern und
                gleichzeitig die Chancen des interkulturellen Dialogs und des
                gegenseitigen Lernens aufzeigen.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* KoRaBi */}
      <section className="relative min-h-screen w-full text-[#eb7b24]">
        <div
          id="korabi"
          className="intems-center absolute inset-0 flex flex-col justify-center pt-20"
        >
          <div className="m-6 mt-20 flex flex-row gap-10 pt-10 md:flex-grow">
            <div className="basis-1/2">
              <h3
                className={`text-left font-semibold text-4xl sm:text-2xl md:text-3xl lg:text-5xl`}
              >
                KoRaBi
              </h3>
              <p className="mt-4 text-black text-lg">
                Konzeptwerk Rassismuskritische Bildungsarbeit entwickelt
                innovative Konzepte für rassismuskritische Bildungsarbeit und
                professionalisiert Bildner:innen in diesem Bereich. Das Projekt
                zielt darauf ab, Fachkräfte und Multiplikator:innen mit
                praxisorientierten Ansätzen zu unterstützen, rassismuskritische
                Perspektiven zu integrieren und in ihrer Arbeit zu vermitteln.
              </p>
              <p className="mt-4 text-black text-lg">
                KoRaBi wird ehrenamtlich von <b>Sam Schulz</b> und{" "}
                <b>Tatiana La Mura Floes</b> geleitet, die beide über umfassende
                Erfahrungen in der rassismuskritischen Bildungsarbeit und in der
                Durchführung von Fortbildungen für Multiplikator:innen verfügen.
                Ihre Expertise sorgt dafür, dass die Bildungsarbeit sowohl
                theoretisch fundiert als auch praktisch wirksam ist.
                <Link
                  href="/korabi"
                  className="bg-[#eb7b24] p-1 font-semibold text-white shadow-xl"
                >
                  hier
                </Link>
              </p>
            </div>
            <div className="basis-1/2">
              <div className="flex h-[400px] items-center justify-center md:h-[460px]">
                <Image
                  src={`/images/Bildungsarbeit/OSSARA_Integrative_Stadtarbeit.jpg`}
                  alt="Korabi Photo"
                  width={480}
                  height={480}
                  quality={100}
                  className="h-full w-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
