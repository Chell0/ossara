import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Image from "next/image";
import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/AntischwarzerRassismus/ANTISCHWARZERRASSISMUS.jpg)",
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#b7410e] font-extrabold leading-tight uppercase 
        text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10"
            >
              Anti-Schwarzer.
              <br />
              Rassismus.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#b7410e] pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-22 xl:mb-26 2xl:mb-32 3xl:mb-44">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem]  font-semibold leading-normal tracking-normal">
              Sichtbarkeit schaffen, Strukturen verändern: Wir engagieren uns
              gegen Anti‑Schwarzen Rassismus und stärken die Stimmen von BIPoC
              in politischen und gesellschaftlichen Prozessen.
            </p>
          </div>

          {/* small text */}
          <div className="w-full flex justify-center">
            <div className="max-w-full w-full">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black leading-relaxed text-left">
                Ossara e.V. setzt sich in Hamburg aktiv dafür ein,
                Anti‑Schwarzen Rassismus sichtbar zu machen und Räume für
                Empowerment und Austausch für BIPoC zu schaffen. Unsere
                Bildungsarbeit konzentriert sich auf die Auseinandersetzung mit
                den Auswirkungen von Anti‑Schwarzem Rassismus und das aktive
                Arbeiten gegen rassistische Strukturen. Ein wesentlicher
                Bestandteil unserer Arbeit ist die Mitwirkung am
                Forderungskatalog der Hamburger Arbeitsgruppe Anti‑Schwarzer
                Rassismus, der konkrete politische und gesellschaftliche
                Veränderungen fordert, um die Rechte und Lebensbedingungen von
                BIPoC zu verbessern. Darüber hinaus vertreten wir die Interessen
                von BIPoC in relevanten Gremien, um die Stimme der betroffenen
                Gemeinschaften in politischen und gesellschaftlichen
                Entscheidungsprozessen zu stärken. Dieser Bereich unserer Arbeit
                befindet sich noch im Aufbau, aber wir sind fest entschlossen,
                ihn weiter auszubauen und das Bewusstsein für Anti‑Schwarzen
                Rassismus zu stärken, um eine gerechtere, solidarische
                Gesellschaft zu fördern.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full min-h-screen py-12 xs2:py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 3xl:py-48">
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-12 mt-10 xs2:mt-14 sm:mt-16 md:mt-20 lg:mt-24">
              {/* Left Column - Image */}
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4 flex justify-center">
                <div className="h-[300px] xs2:h-[360px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[540px] 2xl:h-[600px] 3xl:h-[640px]">
                  <Image
                    src="/images/AntischwarzerRassismus/Anti-Schwarzer-Rassismus_PhotoMaischaSouaga.jpg"
                    alt="AntischwarzerRassismus Image"
                    width={480}
                    height={480}
                    quality={100}
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-10 lg:pt-0">
                <h3 className="text-[#b7410e] text-2xl xs2:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 border-[#b7410e] mb-6 mx-auto lg:mx-0" />
                <ContactPerson
                  name="Camila Angola"
                  position="Vernetzung und Bewusstseinsbildung zu Anti-Schwarzen Rassismus"
                  email="camilo.angola[at]ossara.de"
                  phone="(+49) 157 55572533"
                  imageSrc="/images/UberUns/Team/OSSARA_Portrait_CamiloAngola.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forderungskatalog */}
        <section>
          <div className="flex flex-col xs2:flex-row items-center justify-between gap-4 xs2:gap-6 border border-[#ba334b] rounded-xl px-4 xs2:px-6 sm:px-8 md:px-10 py-4 shadow-sm w-full max-w-[90%] xs:max-w-[85%] sm:max-w-[410px] md:max-w-[640px] lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
            <p className="text-sm xs2:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black text-center xs2:text-left">
              Forderungskatalog
            </p>

            <button className="px-4 py-2 xs2:px-4 xs2:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 2xl:px-9 2xl:py-4.5 3xl:px-10 3xl:py-6 text-sm xs2:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold rounded-xl shadow-xl bg-[#b7410e] text-white">
              <Link
                href={`/files/forderungskatalog_anti_schwarzer_rassismus`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
