import Image from "next/image";

export default function Lokal() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Lobby/LOBBYARBEIT_LOKAL.VERNETZT.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content (moved left & down) */}
          <div
            className="
              absolute
                bottom-6    left-2
              xs:bottom-8  xs:left-3
              xs2:bottom-9 xs2:left-4
              sm:bottom-10 sm:left-6
              md:bottom-11 md:left-7
              lg:bottom-12 lg:left-8
              xl:bottom-13 xl:left-9
              2xl:bottom-14 2xl:left-10
            "
          >
            <div
              className="
                space-y-2
                xs:space-y-3
                sm:space-y-4
                md:space-y-6
                lg:space-y-8
                xl:space-y-10
                2xl:space-y-12
              "
            >
              <h1
                className="
                  text-[#58bc90] font-extrabold uppercase leading-[1.1]
                  text-3xl
                  xs:text-4xl
                  xs2:text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                  2xl:text-[140px]
                  3xl:text-[160px]
                "
              >
                <span className="block">Lokal.</span>
                <span className="block">Vernetzt.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#58bc90] pb-20 px-8">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-52 3xl:mb-52">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem] font-semibold leading-tight tracking-normal mx-auto">
              Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
              Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
              Veränderungen auf politischer und gesellschaftlicher Ebene zu
              erreichen.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="max-w-7xl">
              <p className="text-sm xs:text-xs xs2:text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black leading-relaxed text-left">
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
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center py-section">
          <div className="container flex flex-col md:flex-row gap-8 w-full items-stretch">
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center max-w-prose">
              <h3 className="text-[#58bc90] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-left leading-tight">
                NETZ:WERKSTATT –<br /> Netzwerken mal anders
              </h3>
              <div className="mt-2 space-y-4 text-sm sm:text-base md:text-lg text-gray-800">
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
                  <span className="text-[#58bc90] font-semibold">Ort:</span> SV
                  Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
                  <br />
                  Die Teilnahme ist kostenlos.
                </p>
              </div>
            </div>

            {/* Image Container - Optimized for 8192x5464 */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-[3/2] max-h-[80vh] md:max-h-[90vh]">
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
