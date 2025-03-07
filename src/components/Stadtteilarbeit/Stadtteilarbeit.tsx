import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Stadtteilarbeit/YouTubeSection/YouTubeSection";

export default function Stadtteilarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/integrative/img-05.jpg)" }}
        >
          <div
            id="integrative"
            className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start"
          >
            <h1
              className="text-[#fcc41b] drop-shadow-2xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8"
              // style={{ textShadow: "1px 1px 2px #444444" }}
            >
              Stadtteil. <br />
              arbeit.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b]">
          <div className="flex flex-col pt-6 md:pt-8 lg:pt-12">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <p
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-semibold leading-normal
                tracking-tight md:tracking-normal
                pb-6 sm:pb-8 md:pb-12
                px-2 sm:px-4 md:px-0"
              >
                Mit niederschwelliger Beratung und praxisnaher Unterstützung
                schaffen wir berufliche Perspektiven und fördern erfolgreiche
                Integration.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10 md:mt-20 px-4 md:m-4">
            {/* YouTube Video Section */}
            <div className="w-full md:basis-1/2 mt-4 md:mt-8 lg:mt-12 pt-4 md:pt-8 lg:pt-12 px-4 sm:px-0">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="w-full md:basis-1/2 mt-4 md:mt-12 lg:mt-16 pt-4 md:pt-8 lg:pt-12 px-4 md:px-5 mb-10">
              <p className="text-sm xs:text-base sm:text-[15px] md:text-lg leading-relaxed md:leading-normal text-black max-w-3xl mx-auto">
                Ossara e.V. bietet eine niedrigschwellige Sozialberatung und
                Bewerbungshilfe für Geflüchtete und Interessierte. In
                wöchentlichen Terminen unterstützen wir bei der Orientierung im
                deutschen Arbeitsmarkt, der Erstellung von Bewerbungsunterlagen
                und der Jobsuche. Darüber hinaus bieten wir Sprachförderung und
                Prüfungsvorbereitung, die Teilnehmer*innen gezielt auf
                Abschlussprüfungen wie das Zertifikat Deutsch Telc und Goethe
                vorbereiten. Unser Ziel ist es, formale Sprachkenntnisse zu
                vermitteln, die schriftliche Kompetenz zu stärken und
                gleichzeitig eine interkulturelle Austauschplattform zu bieten.
                Mit diesen Angeboten möchten wir den Teilnehmenden die nötigen
                Fähigkeiten und das Selbstvertrauen für eine erfolgreiche
                Integration und berufliche Perspektiven in Deutschland
                vermitteln.
              </p>
            </div>
          </div>
        </section>

        {/* Bewerbungstraining */}
        <section
          id="bewerbungstraining"
          className="relative w-full min-h-[50vh] md:min-h-screen py-12 md:py-24 lg:py-32 text-[#fcc41b]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            {/* Heading Section */}
            <h2
              className="text-4xl xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] 
                  font-semibold leading-tight md:leading-normal text-center 
                  mb-6 sm:mb-8 md:mb-10"
            >
              Beratungs- und Bewerbungstraining
            </h2>

            {/* Content Section */}
            <div
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 
                   mt-10 md:mt-16 lg:mt-20"
            >
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4">
                <p className="text-base sm:text-sm md:text-lg text-black leading-normal">
                  Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
                  Sozialberatung bzw. Orientierungshilfe an und unterstützt
                  Interessierte bei Bewerbungen.
                </p>

                <div className="space-y-1 md:space-y-2">
                  <div>
                    <strong className="block text-md sm:text-base md:text-lg text-black">
                      Wo:
                    </strong>
                    <p className="text-base">
                      In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                      Brödermannsweg 31, 22453 Hamburg und digital
                    </p>
                  </div>

                  <div>
                    <strong className="block text-md sm:text-base md:text-lg text-black">
                      Wann:
                    </strong>
                    <p className="text-base">
                      Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                    </p>
                  </div>

                  <div>
                    <strong className="block text-md sm:text-base md:text-lg text-black">
                      Für wen:
                    </strong>
                    <p className="text-base">
                      Geflüchtete aus naheliegenden Unterkünften und
                      Interessierte
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <div className="text-center mb-6">
                  <h3 className="text-black text-3xl md:text-4xl font-semibold">
                    Kontaktperson
                  </h3>
                  <hr className="w-16 border-2 mx-auto border-black" />
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

        {/* Sprachförderung */}
        <section
          id="sprachforderung"
          className="relative w-full min-h-[50vh] md:min-h-screen py-12 mg:py-24 lg:py-32 text-[#fcc41b]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            {/* Heading Section */}
            <h2 className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold leading-tight md:leading-normal text-center mb-6 sm:mb-8 md:mb-10">
              Sprachförderung- und Prüfungsvorbereitung
            </h2>

            {/* Content Section */}
            <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 mt-10 md:mt-16 lg:mt-20">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2">
                <p className="text-base text-black">
                  Mit unserer Sprachförderung möchten wir den Teilnehmenden
                  helfen, ihre Sprachkenntnisse im formellen Kontext zu
                  verbessern, ihre schriftliche Kompetenz zu fördern und einen
                  Raum für interkulturellen Austausch zu bieten.
                </p>
                <p className="text-base text-black">
                  Die Prüfungsvorbereitung findet montags und dienstags von
                  10:00 bis 13:00 Uhr statt. Unser Ziel ist es, die
                  Teilnehmenden gezielt auf ihre Abschlussprüfungen
                  vorzubereiten, indem wir sowohl schriftliche als auch
                  mündliche Prüfungsfähigkeiten trainieren. In Kleingruppen
                  werden Prüfungssituationen simuliert und das richtige
                  Verhalten in Prüfungen geübt.
                </p>
                <p className="text-base text-black">
                  Die gängigen Prüfungen umfassen:
                </p>
                <ul className="text-base pl-5 mt-2 space-y-1 font-semibold text-[#fcc41b] list-disc">
                  <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
                  <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
                </ul>
                <p className="text-base text-black">
                  <b>PS :</b>{" "}
                  <span className="text-base text-black">
                    Wir führen keine Prüfungen durch und übernehmen keine
                    Prüfungsgebühren.
                  </span>
                </p>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <div className="text-center mb-6">
                  <h3 className="text-black text-3xl md:text-4xl font-semibold">
                    Kontaktperson
                  </h3>
                  <hr className="w-16 border-2 mx-auto border-black" />
                </div>

                <ContactPerson
                  name="Hayford Anyidoho"
                  position="Deutschtrainer für Sprachförderung und Prüfungsvorbereitung"
                  email="sprachfoerderung[at]ossara.de"
                  phone="(+49) 1590 6737147"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
