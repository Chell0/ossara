import Image from "next/image";

export default function Lobby() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/loby/img-27.jpg)" }}
        >
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#58bc90] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              Lokal.
              <br />
              Vernetzt.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#58bc90]">
          <div className="basis-full mx-auto">
            <p
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-semibold leading-normal tracking-normal
                pb-20 p-6"
            >
              Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
              Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
              Veränderungen auf politischer und gesellschaftlicher Ebene zu
              erreichen.
            </p>
          </div>
          <div className="flex md:flex-grow flex-row justify-end mt-20 pb-20">
            <div className="basis-1/2 text-black pt-20 mr-10">
              <p className="text-2xl">
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
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-8">
          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-center md:w-1/2">
            <h3
              className={`text-[#58bc90] text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left`}
            >
              NETZ:WERKSTATT – Netzwerken mal anders
            </h3>
            <p className="mt-2 text-lg">
              Die NETZ:WERKSTATT bietet einmal im Monat einen Raum, in dem
              Netzwerken und kreatives Arbeiten miteinander verbunden werden. In
              einer offenen und einladenden Atmosphäre haben Teilnehmende die
              Möglichkeit, ihre Ideen auszutauschen und gleichzeitig kreative
              Prozesse zu erleben. Unter der Leitung von Fabienne Schöter,
              Kunsttherapeutin, wird die Veranstaltung monatlich verschiedene
              kreative Ansätze bieten, die den Austausch und das gegenseitige
              Lernen fördern. Wir verstehen diesen Raum als Braver Space, in dem
              wir uns mutig ausdrücken und uns gegenseitig stärken können. Hier
              sind alle willkommen, die sich für eine solidarische Gesellschaft
              einsetzen und offen für interkulturellen Austausch sind. Wann &
              Wo? Die Veranstaltung findet einmal im Monat statt. Verfolgt
              unsere Veranstaltungsankündigungen und meldet euch an, um keine
              Termine zu verpassen!
              <br />
              <b className="text-[#58bc90]">Ort:</b>{" "}
              <span className="text-[#58bc90]">
                SV Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
              </span>
            </p>
            <p className="text-lg">Die Teilnahme ist kostenlos.</p>
          </div>
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center md:w-1/2">
            <div className="relative h-[60vh] w-full max-w-2xl md:h-[70vh]">
              <Image
                src={`/loby/netz-werkstatt/img-36.jpg`}
                alt="About Photo"
                fill
                quality={100}
                className="object-cover rounded-md shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
