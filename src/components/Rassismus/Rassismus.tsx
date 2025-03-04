import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div className="mx-auto">
        <header
          className="h-screen w-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(/rassismus/img-54.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start`}
          >
            <h1
              className={`text-[#b7410e] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase ml-10 mt-20`}
            >
              Anti.
              <br />
              Schwarzer.
              <br />
              Rassismus.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#b7410e]">
          <div className="flex flex-col md:flex-row md:flex-grow">
            <div className="basis-full">
              <p className="text-[4rem] font-semibold leading-none p-2 mb-20">
                Sichtbarkeit schaffen, Strukturen verändern: Wir engagieren uns
                gegen Anti- Schwarzen Rassismus und stärken die Stimmen von
                BIPoC in politischen und gesellschaftlichen Prozessen.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end mt-20">
            <div className="basis-1/2 text-black m-2">
              <p className="text-base">
                Ossara e.V. setzt sich in Hamburg aktiv dafür ein,{" "}
                <b>Anti-Schwarzen Rassismus</b> sichtbar zu machen und Räume für{" "}
                <b>Empowerment und Austausch</b> für BIPoC zu schaffen. Unsere{" "}
                <b>Bildungsarbeit</b> konzentriert sich auf die
                Auseinandersetzung mit den Auswirkungen von{" "}
                <b>Anti-Schwarzem Rassismus</b> und das aktive Arbeiten gegen
                rassistische Strukturen.
              </p>
              <p className="mt-2 text-base">
                Ein wesentlicher Bestandteil unserer Arbeit ist die Mitwirkung
                am{" "}
                <b>
                  Forderungskatalog der Hamburger Arbeitsgruppe Anti-Schwarzer
                  Rassismus
                </b>
                , der konkrete politische und gesellschaftliche Veränderungen
                fordert, um die Rechte und Lebensbedingungen von BIPoC zu
                verbessern. Darüber hinaus vertreten wir die Interessen von
                BIPoC in relevanten <b>Gremien</b>, um die Stimme der
                betroffenen Gemeinschaften in politischen und gesellschaftlichen
                Entscheidungsprozessen zu stärken.
              </p>
              <p className="mt-2 text-base">
                Dieser Bereich unserer Arbeit befindet sich noch im Aufbau, aber
                wir sind fest entschlossen, ihn weiter auszubauen und das
                Bewusstsein für <b>Anti-Schwarzen Rassismus</b> zu stärken, um
                eine gerechtere, solidarische Gesellschaft zu fördern
              </p>
            </div>
          </div>
        </section>

        {/* Forderungskatalog */}
        <section className="mt-20">
          <div
            className={`flex justify-between items-center border border-[#ba334b] rounded-xl p-8 shadow-sm max-w-xl mx-auto`}
          >
            <p className={`text-base text-black`}>Forderungskatalog</p>
            <button className="px-8 py-3 text-base sm:px-4 sm:py-1 md:px-6 md:py-2 font-semibold rounded-xl shadow-xl bg-[#b7410e] text-white">
              <Link
                href={`/files/forderungskatalog_anti_schwarzer_rassismus`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`flex items-center space-x-2`}
              >
                {/* Download Icon */}
                <svg
                  xmlns={`http://www.w3.org/2000/svg`}
                  fill={`none`}
                  viewBox={`0 0 24 24`}
                  strokeWidth={2}
                  stroke={`currentColor`}
                  className={`w-5 h-5`}
                >
                  <path
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                <span>Download</span>
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
