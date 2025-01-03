import { bebasNeue } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercase`}
          >
            Anti-Schwarzer Rassismus
          </h1>
        </header>
        <section className="flex flex-col items-center py-10 mx-10 mt-20 md:flex-row gap-20">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={`/bgs/img1.jpg`}
              alt="Rassismus Photo"
              width={480}
              height={520}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base text-gray-800">
              Ossara e.V. setzt sich in Hamburg aktiv dafür ein,{" "}
              <b>Anti-Schwarzen Rassismus</b> sichtbar zu machen und Räume für{" "}
              <b>Empowerment und Austausch</b> für BIPoC zu schaffen. Unsere{" "}
              <b>Bildungsarbeit</b> konzentriert sich auf die Auseinandersetzung
              mit den Auswirkungen von <b>Anti-Schwarzem Rassismus</b> und das
              aktive Arbeiten gegen rassistische Strukturen.
            </p>
            <p className="text-base mt-4 text-gray-800">
              Ein wesentlicher Bestandteil unserer Arbeit ist die Mitwirkung am{" "}
              <b>
                Forderungskatalog der Hamburger Arbeitsgruppe Anti-Schwarzer
                Rassismus
              </b>
              , der konkrete politische und gesellschaftliche Veränderungen
              fordert, um die Rechte und Lebensbedingungen von BIPoC zu
              verbessern. Darüber hinaus vertreten wir die Interessen von BIPoC
              in relevanten <b>Gremien</b>, um die Stimme der betroffenen
              Gemeinschaften in politischen und gesellschaftlichen
              Entscheidungsprozessen zu stärken.
            </p>
            <p className="text-base mt-4 text-gray-800">
              Dieser Bereich unserer Arbeit befindet sich noch im Aufbau, aber
              wir sind fest entschlossen, ihn weiter auszubauen und das
              Bewusstsein für <b>Anti-Schwarzen Rassismus</b> zu stärken, um
              eine gerechtere, solidarische Gesellschaft zu fördern
            </p>
          </div>
        </section>

        {/* Forderungskatalog */}
        <section className="mt-20">
          <div
            className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto`}
          >
            <p className={`text-base text-gray-800`}>Forderungskatalog</p>
            <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
              <Link
                href={`/files/stellungnahme.pdf`}
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
                <span>Download Now</span>
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
