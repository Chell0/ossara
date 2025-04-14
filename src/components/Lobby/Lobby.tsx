import Image from "next/image";

export default function Lobby() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-[#f7e6ca] h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/Lobby/LOBBYARBEIT_LOKAL.VERNETZT.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain", // This ensures the entire image is visible
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1 className="text-[#58bc90] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10">
              Lokal.
              <br />
              Vernetzt.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#58bc90] pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20">
          {/* BIG TEXT */}
          <div className="mx-auto pt-12 mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-22 xl:mb-26 2xl:mb-32 3xl:mb-44">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem]  font-semibold leading-normal tracking-normal">
              Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
              Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
              Veränderungen auf politischer und gesellschaftlicher Ebene zu
              erreichen.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="max-w-full w-full">
              <p className="text-sm xs:text-base xs2:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl leading-relaxed text-left text-black">
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
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 xs:px-2 sm:px-3 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-10 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 md:flex-row">
          {/* Text Content */}
          <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
            <h3 className="text-[#58bc90] text-base xs:text-lg xs2:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl font-bold text-left leading-tight xs:leading-snug sm:leading-normal">
              NETZ:WERKSTATT –<br /> Netzwerken mal anders
            </h3>
            <div className="mt-2">
              <p className="text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-4xl leading-relaxed sm:leading-loose">
                Die NETZ:WERKSTATT bietet einmal im Monat einen Raum, in dem
                Netzwerken und kreatives Arbeiten miteinander verbunden werden.
                In einer offenen und einladenden Atmosphäre haben Teilnehmende
                die Möglichkeit, ihre Ideen auszutauschen und gleichzeitig
                kreative Prozesse zu erleben. Unter der Leitung von Fabienne
                Schöter, Kunsttherapeutin, wird die Veranstaltung monatlich
                verschiedene kreative Ansätze bieten, die den Austausch und das
                gegenseitige Lernen fördern. Wir verstehen diesen Raum als
                Braver Space, in dem wir uns mutig ausdrücken und uns
                gegenseitig stärken können. Hier sind alle willkommen, die sich
                für eine solidarische Gesellschaft einsetzen und offen für
                interkulturellen Austausch sind. Wann & Wo? Die Veranstaltung
                findet einmal im Monat statt. Verfolgt unsere
                Veranstaltungsankündigungen und meldet euch an, um keine Termine
                zu verpassen!
                <br />
                <span className="text-[#58bc90] text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-4xl">
                  <b>Ort:</b> SV Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
                </span>
                <br />
                Die Teilnahme ist kostenlos.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex items-center justify-center w-full md:w-1/2 p-2 xs:p-3 sm:p-4">
            <div
              className="relative w-full h-auto"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/Lobby/Netzwerkstatt/NETZWERKSTATT.jpg"
                alt="Netzwerkstatt Photo"
                fill
                quality={100}
                className="object-contain md:object-cover shadow-xl"
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
