import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Image from "next/image";
import Link from "next/link";

export default function Rassismus() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/rassismus/img-54.jpg)" }}
        >
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#b7410e] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
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
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-semibold leading-normal tracking-normal
                pb-20 p-6"
            >
              Sichtbarkeit schaffen, Strukturen verändern: Wir engagieren uns
              gegen Anti- Schwarzen Rassismus und stärken die Stimmen von BIPoC
              in politischen und gesellschaftlichen Prozessen.
            </p>
          </div>
          <div className="flex md:flex-grow flex-row justify-end pt-20 pb-20 m-8 mt-20 text-black">
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
          </div>
        </section>

        {/* New Section */}
        <section
          id="new-section"
          className="relative w-full min-h-[50vh] md:min-h-screen py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            {/* Heading Section */}
            <div className="absolute top-20 left-8 right-0 flex items-start justify-start">
              <h2
                className="text-[#b7410e] text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] 
                  font-semibold leading-tight md:leading-normal text-left
                  mb-4 sm:mb-6 md:mb-8"
              >
                Title Section
              </h2>
            </div>

            {/* Content Section */}
            <div
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 
                   mt-10 md:mt-16 lg:mt-20"
            >
              {/* Left Column - Image */}
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4">
                <div className="flex justify-center items-center h-[400px] md:h-[460px]">
                  <Image
                    src="/rassismus/img-54.jpg"
                    alt="Image"
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
                  <hr className="w-24 border-2 mx-auto border-[#b7410e]" />
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
