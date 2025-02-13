import Image from "next/image";

export default function Lobby() {
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
              className={`text-[#58bc90] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase ml-10 mt-20`}
            >
              Lokal.
              <br /> Vernetzt.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#58bc90]">
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <p className="text-[4rem] font-semibold leading-none p-2 mb-20">
                Durch Netzwerk- und Lobbyarbeit setzen wir uns für mehr Rechte,
                Sichtbarkeit und Teilhabe in Hamburg ein, um nachhaltige
                Veränderungen auf politischer und gesellschaftlicher Ebene zu
                erreichen.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end mt-20 m-6">
            <div className="basis-1/2 text-black">
              <p className="text-base">
                Die Stärkung der BIPoC-Communities hat für Ossara e.V. eine hohe
                Priorität. Ein zentraler Bestandteil unserer Arbeit ist die
                Lobbyarbeit für die Belange von BIPoC und migrantischen
                Mitbürger:innen, um ihre Stimme in politischen und
                gesellschaftlichen Prozessen zu stärken. Wir setzen uns aktiv
                für mehr Sichtbarkeit, Rechte und Teilhabe dieser Gruppen in
                Hamburg ein.
              </p>
              <p className="mt-2 text-base">
                Darüber hinaus bieten wir Unterstützung und Starthilfe für
                andere Initiativen, die sich mit ähnlichen Themen beschäftigen,
                und fördern die Vernetzung von Akteur:innen, Vereinen und
                Organisationen. Durch den Austausch von Wissen, Ressourcen und
                Erfahrungen tragen wir dazu bei, eine nachhaltige Veränderung
                auf politischer und sozialer Ebene zu erreichen.
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
            <p className="mt-2 text-base">
              Die NETZ:WERKSTATT bietet einmal im Monat einen Raum, in dem
              Netzwerken und kreatives Arbeiten miteinander verbunden werden. In
              einer offenen und einladenden Atmosphäre haben Teilnehmende die
              Möglichkeit, ihre Ideen auszutauschen und gleichzeitig kreative
              Prozesse zu erleben.
            </p>
            <p className="mt-2 text-base">
              Unter der Leitung von Fabienne Schöter, Kunsttherapeutin, wird die
              Veranstaltung monatlich verschiedene kreative Ansätze bieten, die
              den Austausch und das gegenseitige Lernen fördern. Wir verstehen
              diesen Raum als Braver Space, in dem wir uns mutig ausdrücken und
              uns gegenseitig stärken können. Hier sind alle willkommen, die
              sich für eine solidarische Gesellschaft einsetzen und offen für
              interkulturellen Austausch sind.
            </p>
            <p className="mt-2 text-base">
              Wann & Wo?
              <br />
              Die Veranstaltung findet einmal im Monat statt. Verfolgt unsere
              Veranstaltungsankündigungen und meldet euch an, um keine Termine
              zu verpassen!
              <br />
              <b className="text-[#58bc90]">Ort:</b>{" "}
              <span className="text-[#58bc90]">
                SV Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
              </span>
            </p>
            <p className="text-base">Die Teilnahme ist kostenlos.</p>
          </div>
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center md:w-1/2">
            <div className="relative h-[60vh] w-full max-w-2xl md:h-[70vh]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="About Photo"
                fill
                quality={100}
                className="object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
