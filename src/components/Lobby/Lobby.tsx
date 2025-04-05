import Image from "next/image";

export default function Lobby() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full bg-cover bg-center relative 
    h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] md2:h-[70vh] tab:h-[85vh] tab-xl:h-[90vh] lg:h-[95vh] xl:h-screen 2xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/Lobby/LOBBYARBEIT_LOKAL.VERNETZT.jpg)",
          }}
        >
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#58bc90] font-extrabold leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] 
        pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 
        pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48"
            >
              Lokal.
              <br />
              Vernetzt.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#58bc90]">
          <div className="basis-full mx-auto">
            <p
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
      font-semibold leading-relaxed md:leading-normal tracking-normal 
      py-8 p-8"
            >
              Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
              Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
              Veränderungen auf politischer und gesellschaftlicher Ebene zu
              erreichen.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-end mt-10 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 pb-10 xs:pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32">
            <div className="w-full md:basis-full text-gray-800 pt-10 xs:pt-12 sm:pt-16 md:pt-20 lg:pt-24 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12">
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-normal sm:leading-relaxed md:leading-relaxed">
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
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 md:flex-row">
          {/* Text Content */}
          <div className="flex flex-col justify-center basis-full md:basis-1/2 lg:basis-2/5 xl:basis-2/5 p-4 xs:p-5 sm:p-6">
            <h3 className="text-[#58bc90] text-3xl xs:text-3.5xl sm:text-4xl md:text-4.5xl lg:text-5xl xl:text-5.5xl 2xl:text-6xl font-bold text-left leading-tight xs:leading-snug sm:leading-normal">
              NETZ:WERKSTATT – Netzwerken mal anders
            </h3>
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 mt-4 xs:mt-5 sm:mt-6">
              <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl leading-relaxed sm:leading-loose">
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
                <b className="text-[#58bc90]">Ort:</b>{" "}
                <span className="text-[#58bc90]">
                  SV Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
                </span>
              </p>
              <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                Die Teilnahme ist kostenlos.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex items-center justify-center basis-full md:basis-1/2 lg:basis-3/5 xl:basis-3/5 p-4 xs:p-5 sm:p-6">
            <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] max-w-2xl">
              <Image
                src="/images/Lobby/Netzwerkstatt/NETZWERKSTATT.jpg"
                alt="Netzwerkstatt Photo"
                fill
                quality={100}
                className="object-cover rounded-lg shadow-xl xs:shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
