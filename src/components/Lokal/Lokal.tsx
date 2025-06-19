import Image from "next/image";

export default function Lokal() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Lobby/LOBBYARBEIT_LOKAL.VERNETZT.jpg"
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
                className="font-extrabold 3xl:text-[160px] text-3xl text-[#58bc90] xs2:text-5xl xs:text-4xl uppercase leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] "
              >
                <span className="block">Lokal.</span>
                <span className="block">Vernetzt.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen w-full px-8 pb-20 text-[#58bc90]">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-52 mb-12 xs:mb-14 pt-8 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-52">
            <p className="mx-auto font-semibold 3xl:text-[10rem] text-2xl xs2:text-4xl xs:text-3xl leading-tight tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem]">
              Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
              Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
              Veränderungen auf politischer und gesellschaftlicher Ebene zu
              erreichen.
            </p>
          </div>

          {/* small text */}
          <div className="flex w-full justify-center">
            <div className="max-w-7xl">
              <p className="text-left 3xl:text-3xl text-black text-sm xs2:text-xs xs:text-xs leading-relaxed sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Die Stärkung der BIPoC-Communities hat für Ossara e.V. eine hohe
                Priorität. Ein zentraler Bestandteil unserer Arbeit ist die
                Lobbyarbeit für die Belange von BIPoC und migrantischen
                Mitbürger:innen, um ihre Stimme in politischen und
                gesellschaftlichen Prozessen zu stärken. Wir setzen uns aktiv
                für mehr Sichtbarkeit, Rechte und Teilhabe dieser Gruppen in
                Hamburg ein. Darüber hinaus bieten wir Unterstützung und
                Starthilfe für andere Initiativen, die sich mit ähnlichen Themen
                beschäftigen, und fördern die Vernetzung von Akteur:innen,
                Vereinen und Organisationen. Durch den Austausch von Wissen,
                Ressourcen und Erfahrungen tragen wir dazu bei, eine nachhaltige
                Veränderung auf politischer und sozialer Ebene zu erreichen.
              </p>
            </div>
          </div>
        </section>

        {/*Netzwerkarbeit*/}
        <section className="relative flex min-h-[80vh] w-full items-center justify-center py-section md:min-h-screen">
          <div className="container flex w-full flex-col items-stretch gap-8 md:flex-row">
            {/* Text Content */}
            <div className="flex w-full max-w-prose flex-col justify-center md:w-1/2">
              <h3 className="text-left font-bold text-2xl text-[#58bc90] leading-tight sm:text-3xl md:text-4xl lg:text-4xl">
                NETZ:WERKSTATT –<br /> Netzwerken mal anders
              </h3>
              <div className="mt-2 space-y-4 text-gray-800 text-sm sm:text-base md:text-lg">
                <p>
                  Die NETZ:WERKSTATT bietet einmal im Monat einen Raum, in dem
                  Netzwerken und kreatives Arbeiten miteinander verbunden
                  werden. In einer offenen und einladenden Atmosphäre haben
                  Teilnehmende die Möglichkeit, ihre Ideen auszutauschen und
                  gleichzeitig kreative Prozesse zu erleben. Unter der Leitung
                  von Fabienne Schöter, Kunsttherapeutin, wird die Veranstaltung
                  monatlich verschiedene kreative Ansätze bieten, die den
                  Austausch und das gegenseitige Lernen fördern.
                </p>
                <p>
                  Wir verstehen diesen Raum als Braver Space, in dem wir uns
                  mutig ausdrücken und uns gegenseitig stärken können. Hier sind
                  alle willkommen, die sich für eine solidarische Gesellschaft
                  einsetzen und offen für interkulturellen Austausch sind.
                </p>
                <p>
                  Wann & Wo? Die Veranstaltung findet einmal im Monat statt.
                  Verfolgt unsere Veranstaltungsankündigungen und meldet euch
                  an, um keine Termine zu verpassen!
                </p>
                <p>
                  <span className="font-semibold text-[#58bc90]">Ort:</span> SV
                  Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
                  <br />
                  Die Teilnahme ist kostenlos.
                </p>
              </div>
            </div>

            {/* Image Container - Optimized for 8192x5464 */}
            <div className="flex w-full items-center justify-center md:w-1/2">
              <div className="relative aspect-[3/2] max-h-[80vh] w-full md:max-h-[90vh]">
                <Image
                  src="/images/Lobby/Netzwerkstatt/NETZWERKSTATT.jpg"
                  alt="Netzwerkstatt Photo"
                  width={8192}
                  height={5464}
                  quality={90} // Reduced from 100 for better performance
                  className="object-cover shadow-xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 
                 (max-width: 1024px) 50vw,
                 40vw"
                  style={{
                    objectPosition: "center center", // Ensures optimal cropping
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
