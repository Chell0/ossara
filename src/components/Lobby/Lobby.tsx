import { bebasNeue } from "@/app/fonts";
import Image from "next/image";

export default function Lobby() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={` ${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercase `}
          >
            Lobby- un Netzwerkarbeit
          </h1>
        </header>

        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="Lobby Photo"
              width={480}
              height={560}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-800 text-base">
              Die Stärkung der BIPoC-Communities hat für Ossara e.V. eine hohe
              Priorität. Ein zentraler Bestandteil unserer Arbeit ist die
              Lobbyarbeit für die Belange von BIPoC und migrantischen
              Mitbürger:innen, um ihre Stimme in politischen und
              gesellschaftlichen Prozessen zu stärken. Wir setzen uns aktiv für
              mehr Sichtbarkeit, Rechte und Teilhabe dieser Gruppen in Hamburg
              ein.
            </p>
            <p className="mt-4 text-gray-800 text-base">
              Darüber hinaus bieten wir Unterstützung und Starthilfe für andere
              Initiativen, die sich mit ähnlichen Themen beschäftigen, und
              fördern die Vernetzung von Akteur:innen, Vereinen und
              Organisationen. Durch den Austausch von Wissen, Ressourcen und
              Erfahrungen tragen wir dazu bei, eine nachhaltige Veränderung auf
              politischer und sozialer Ebene zu erreichen.
            </p>
          </div>
        </section>

        {/* Ansprechperson */}
        <section className="flex items-center justify-center w-full mt-20 sm:px-2">
          <div className="text-[#ffb400] text-center py-8">
            <h2
              className={`${bebasNeue.className} drop-shadow-md text-6xl font-bold leading-tight`}
            >
              Ansprechperson
            </h2>
          </div>
        </section>

        {/* Ansprechperson Person */}
        <section className="flex flex-col items-center py-10 mx-10 mt-10 mb-10 md:flex-row gap-10">
          <div className="flex justify-center flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="Ansprechperson Photo"
              width={480}
              height={520}
              quality={100}
              className="shadow-xl rounded-xl sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
            />
          </div>
          <div className="w-full max-w-lg p-1 bg-gray-50 md:w-1/2 shadow-md rounded-md">
            <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
              <p className={`text-base font-semibold`}>
                Name:{" "}
                <span className={`text-base font-semibold text-blue-500`}>
                  Julia Karimi
                </span>
              </p>
              <p className={`text-base font-semibold`}>
                Position:{" "}
                <span className={`font-semibold text-blue-500`}>
                  Projektkoordination Inlandsarbeit
                </span>
              </p>
              <p className={`text-base font-semibold`}>
                Kontakt:{" "}
                <span className={`font-semibold text-blue-500`}>
                  info[a]ossara.de
                </span>
              </p>
              <p className={`text-base font-bold`}>
                Telefon:{" "}
                <span className={`font-semibold text-blue-500`}>
                  (+49) 1521 3062798
                </span>
              </p>
            </div>
          </div>
        </section>

        {/*Netzwerkarbeit*/}
        <section className="flex items-center justify-center w-full mt-20 sm:px-2">
          <div className="text-[#ffb400] text-center py-8">
            <h2
              className={`${bebasNeue.className} drop-shadow-md text-6xl font-bold leading-tight`}
            >
              NETZ:WERKSTATT – Netzwerken mal anders
            </h2>
          </div>
        </section>

        <section className="flex flex-col items-center py-10 mx-10 md:flex-row gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={480}
              height={560}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-800 text-base">
              Die NETZ:WERKSTATT bietet einmal im Monat einen Raum, in dem
              Netzwerken und kreatives Arbeiten miteinander verbunden werden. In
              einer offenen und einladenden Atmosphäre haben Teilnehmende die
              Möglichkeit, ihre Ideen auszutauschen und gleichzeitig kreative
              Prozesse zu erleben.
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Unter der Leitung von Fabienne Schöter, Kunsttherapeutin, wird die
              Veranstaltung monatlich verschiedene kreative Ansätze bieten, die
              den Austausch und das gegenseitige Lernen fördern. Wir verstehen
              diesen Raum als Braver Space, in dem wir uns mutig ausdrücken und
              uns gegenseitig stärken können. Hier sind alle willkommen, die
              sich für eine solidarische Gesellschaft einsetzen und offen für
              interkulturellen Austausch sind.
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Wann & Wo?
              <br />
              Die Veranstaltung findet einmal im Monat statt. Verfolgt unsere
              Veranstaltungsankündigungen und meldet euch an, um keine Termine
              zu verpassen!
              <br />
              <b>Ort:</b>{" "}
              <span className="text-blue-500">
                SV Groß Borstel, Brödermannsweg 31, 22453 Hamburg.
              </span>
            </p>
            <p className="mt-2 text-gray-800 text-base">
              Die Teilnahme ist kostenlos.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
