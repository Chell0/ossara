import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Image from "next/image";
import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full bg-cover bg-center relative 
    h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] md2:h-[70vh] tab:h-[85vh] tab-xl:h-[90vh] lg:h-[95vh] xl:h-screen 2xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/AntischwarzerRassismus/ANTISCHWARZERRASSISMUS.jpg)",
          }}
        >
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#b7410e] font-extrabold leading-tight uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] 
        pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 
        pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48"
            >
              Anti.
              <br />
              Schwarzer.
              <br />
              Rassismus.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#b7410e] pb-20">
          <div className="basis-full mx-auto pb-10">
            <p
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                font-semibold leading-normal tracking-normal
                pb-20 p-10"
            >
              Sichtbarkeit schaffen, Strukturen verändern: Wir engagieren uns
              gegen Anti- Schwarzen Rassismus und stärken die Stimmen von BIPoC
              in politischen und gesellschaftlichen Prozessen.
            </p>
          </div>
          {/* <div className="flex md:flex-grow flex-row justify-end pt-20 pb-20 m-8 mt-20 text-black">
            <div className="basis-1/2">
              <p className="text-xl">
                Ossara e.V. setzt sich in Hamburg aktiv dafür ein,
                Anti-Schwarzen Rassismus sichtbar zu machen und Räume für
                Empowerment und Austausch für BIPoC zu schaffen. Unsere
                Bildungsarbeit konzentriert sich auf die Auseinandersetzung mit
                den Auswirkungen von Anti-Schwarzem Rassismus und das aktive
                Arbeiten gegen rassistische Strukturen. Ein wesentlicher
                Bestandteil unserer Arbeit ist die Mitwirkung am
                Forderungskatalog der Hamburger Arbeitsgruppe Anti-Schwarzer
                Rassismus , der konkrete politische und gesellschaftliche
                Veränderungen fordert, um die Rechte und Lebensbedingungen von
                BIPoC zu verbessern. Darüber hinaus vertreten wir die Interessen
                von BIPoC in relevanten Gremien, um die Stimme der betroffenen
                Gemeinschaften in politischen und gesellschaftlichen
                Entscheidungsprozessen zu stärken. Dieser Bereich unserer Arbeit
                befindet sich noch im Aufbau, aber wir sind fest entschlossen,
                ihn weiter auszubauen und das Bewusstsein für Anti-Schwarzen
                Rassismus zu stärken, um eine gerechtere, solidarische
                Gesellschaft zu fördern
              </p>
            </div>
          </div> */}

          <div
            className="w-full 
    pt-6 xs:pt-8 sm:pt-10 md:pt-12 md2:pt-16 tab:pt-20 tab-xl:pt-24 lg:pt-28 xl:pt-32 2xl:pt-40 
    pb-6 xs:pb-8 sm:pb-10 md:pb-12 md2:pb-16 tab:pb-20 tab-xl:pb-24 lg:pb-28 xl:pb-32 2xl:pb-40 
    mt-6 xs:mt-8 sm:mt-10 md:mt-12 md2:mt-16 tab:mt-20 tab-xl:mt-24 lg:mt-28 xl:mt-32 2xl:mt-40 
    px-2 xs:px-3 sm:px-4 md:px-5 md2:px-6 tab:px-8 tab-xl:px-10 lg:px-12 xl:px-14 2xl:px-16 
    text-black"
          >
            <div className="basis-full">
              <p
                className="text-[14px] xs:text-[16px] sm:text-lg md:text-xl md2:text-xl tab:text-2xl tab-xl:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 
        text-center"
              >
                Ossara e.V. setzt sich in Hamburg aktiv dafür ein,
                Anti-Schwarzen Rassismus sichtbar zu machen und Räume für
                Empowerment und Austausch für BIPoC zu schaffen. Unsere
                Bildungsarbeit konzentriert sich auf die Auseinandersetzung mit
                den Auswirkungen von Anti-Schwarzem Rassismus und das aktive
                Arbeiten gegen rassistische Strukturen. Ein wesentlicher
                Bestandteil unserer Arbeit ist die Mitwirkung am
                Forderungskatalog der Hamburger Arbeitsgruppe Anti-Schwarzer
                Rassismus, der konkrete politische und gesellschaftliche
                Veränderungen fordert, um die Rechte und Lebensbedingungen von
                BIPoC zu verbessern. Darüber hinaus vertreten wir die Interessen
                von BIPoC in relevanten Gremien, um die Stimme der betroffenen
                Gemeinschaften in politischen und gesellschaftlichen
                Entscheidungsprozessen zu stärken. Dieser Bereich unserer Arbeit
                befindet sich noch im Aufbau, aber wir sind fest entschlossen,
                ihn weiter auszubauen und das Bewusstsein für Anti-Schwarzen
                Rassismus zu stärken, um eine gerechtere, solidarische
                Gesellschaft zu fördern
              </p>
            </div>
          </div>
        </section>

        {/* New Section */}
        <section
          id="new-section"
          className="relative w-full min-h-[50vh] md:min-h-screen py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 
                   mt-10 md:mt-16 lg:mt-20"
            >
              {/* Left Column - Image */}
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4">
                <div className="flex justify-center items-center h-[400px] md:h-[460px]">
                  <Image
                    src="/images/AntischwarzerRassismus/ANTISCHWARZERRASSISMUS.jpg"
                    alt="AntischwarzerRassismus Image"
                    width={480}
                    height={480}
                    quality={100}
                    className="w-full h-78 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="basis-1/2 pt-20">
                <div className="text-center">
                  <h3 className="text-[#b7410e] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto mb-6 border-[#b7410e]" />
                </div>
                <ContactPerson
                  name="Katja Heyn"
                  position="Beratungs- und Bewerbungstrainerin"
                  email="Bewerbungstraining[at]ossara.de"
                  phone="(+49) 1575 1406 184"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forderungskatalog */}
        <section className="mt-20">
          <div
            className={`flex justify-between items-center border border-[#ba334b] rounded-xl p-4 shadow-sm max-w-xl mx-auto`}
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
