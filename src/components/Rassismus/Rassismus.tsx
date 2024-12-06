import { markoOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div className="container mx-auto p-6">
        <header className="text-[#ffb400] py-12 text-center">
          <h1
            className={`${markoOne.className} drop-shadow-xl text-[130px] font-bold leading-tight uppercase`}
          >
            Anti-Schwarzer Rassismus
          </h1>
        </header>
        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20">
          <div className="w-full md:w-1/2">
            <p className="text-sm mt-4 text-gray-800">
              Ossara e.V. setzt sich in Hamburg aktiv dafür ein,{" "}
              <strong>Anti-Schwarzen Rassismus</strong> sichtbar zu machen und
              Räume für <strong>Empowerment und Austausch</strong> für BIPoC zu
              schaffen. Unsere <strong>Bildungsarbeit</strong> konzentriert sich
              auf die Auseinandersetzung mit den Auswirkungen von{" "}
              <strong>Anti-Schwarzem Rassismus</strong> und das aktive Arbeiten
              gegen rassistische Strukturen.
              <br />
              <br />
              Ein wesentlicher Bestandteil unserer Arbeit ist die Mitwirkung am{" "}
              <strong>
                Forderungskatalog der Hamburger Arbeitsgruppe Anti-Schwarzer
                Rassismus
              </strong>
              , der konkrete politische und gesellschaftliche Veränderungen
              fordert, um die Rechte und Lebensbedingungen von BIPoC zu
              verbessern. Darüber hinaus vertreten wir die Interessen von BIPoC
              in relevanten <strong>Gremien</strong>, um die Stimme der
              betroffenen Gemeinschaften in politischen und gesellschaftlichen
              Entscheidungsprozessen zu stärken.
              <br />
              <br />
              Dieser Bereich unserer Arbeit befindet sich noch im Aufbau, aber
              wir sind fest entschlossen, ihn weiter auszubauen und das
              Bewusstsein für <strong>Anti-Schwarzen Rassismus</strong> zu
              stärken, um eine gerechtere, solidarische Gesellschaft zu fördern
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/* // TODO: Will implement later when the position is operational */}
        {/* Ansprechpartner */}
        {/* <section className="w-full flex items-center justify-center mt-28 sm:px-2">
          <div className="bg-blended-gradient shadow-lg rounded-lg max-w-md sm:px-4">
            <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
              Ansprechpartner
            </h2>
          </div>
        </section> */}
        {/* Ansprechpartner */}
        {/* <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
          <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={400}
              height={400}
              className="rounded-xl shadow-xl object-cover sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-md max-w-sm mx-auto">
            <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Kontakt:{" "}
                <span className={`font-medium text-orange-600`}>John Doe</span>
              </p>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Email:{" "}
                <span className={`font-medium text-orange-600`}>
                  johndoe[a]ossara.de
                </span>
              </p>
              <p
                className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}
              >
                Cell:{" "}
                <span className={`font-medium text-orange-600`}>
                  (+49) 123-4567-8910
                </span>
              </p>
            </div>
          </div>
        </section> */}
        {/* // TODO: Confirm if this section needs to be deleted*/}
        {/* Re_Member */}
        {/* <section className="w-full flex items-center justify-center py-10 mt-20 sm:px-2">
          <div className="bg-blended-gradient shadow-lg rounded-lg max-w-md sm:px-4">
            <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
              Re_Member
            </h2>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum accumsan fermentum. Pellentesque suscipit vestibulum est
              eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis.
              Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc.
              Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat
              ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue
              odio, elementum ut pretium sed, gravida vel purus. Nulla
              vestibulum diam a sollicitudin viverra. Aenean convallis finibus
              laoreet. Quisque posuere odio odio, ac condimentum urna varius eu.
              Cras congue dolor id ante iaculis facilisis. Nullam in gravida
              massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum
              ut massa suscipit, vitae laoreet ligula condimentum.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              src={`/bgs/img1.jpg`}
              alt="About Photo"
              width={200}
              height={200}
              quality={100}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section> */}
        {/* Forderungskatalog */}
        <section className="mt-20">
          <div
            className={`flex justify-between items-center border border-gray-300 rounded-md p-8 shadow-md bg-white max-w-4xl mx-auto`}
          >
            <h2 className={`text-lg font-semibold text-gray-800`}>
              Forderungskatalog
            </h2>
            <Link
              href={`/files/stellungnahme.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`flex items-center space-x-2 bg-blended-gradient text-white font-semibold rounded-lg p-4 hover:bg-blue-700 transition-colors`}
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
          </div>
        </section>
      </div>
    </>
  );
}
