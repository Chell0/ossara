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
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#fcc41b] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              Stadtteil.
              <br />
              arbeit.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b] pb-20">
          <div className="basis-full mx-auto">
            <p
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-semibold leading-normal tracking-normal
                pb-20 p-6"
            >
              Mit niederschwelliger Beratung und praxisnaher Unterstützung
              schaffen wir berufliche Perspektiven und fördern erfolgreiche
              Integration.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-20 px-4 md:m-4">
            {/* YouTube Video Section */}
            <div className="w-full md:basis-1/2 mt-4 md:mt-8 lg:mt-12 pt-4 md:pt-8 lg:pt-12 px-4 sm:px-0">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="w-full md:basis-1/2 mt-4 md:mt-12 lg:mt-16 pt-4 md:pt-8 lg:pt-12 px-4 md:px-5 mb-20">
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

        {/* Stadtteilarbeit */}
        <section
          id="stadtteilarbeit"
          className="relative w-full min-h-[50vh] md:min-h-screen py-12 md:py-24 lg:py-32 text-[#fcc41b]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            {/* Heading Section */}
            <div className="absolute top-20 left-8 right-0 flex items-start justify-start">
              <h2
                className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl
                  font-semibold leading-tight md:leading-normal text-left
                  mb-4"
              >
                Stadtteilarbeit
              </h2>
            </div>

            {/* Content Section */}
            <div
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 
                   mt-10 md:mt-16 lg:mt-20"
            >
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 space-y-2">
                <p className="text-base sm:text-sm md:text-lg text-black leading-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, illum illo maiores ratione aspernatur quis quidem
                  expedita autem unde iste similique nisi sapiente itaque.
                  Ducimus odit nisi a aperiam. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Totam excepturi enim
                  consequatur? Vitae cupiditate similique non minus odit
                  commodi, labore ea obcaecati quaerat sunt, corrupti cumque
                  consectetur atque? Corporis, perspiciatis! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Perferendis a beatae
                  quidem officiis porro eum veritatis consectetur quos!
                  Voluptates ea magnam aspernatur, veniam quo odit accusamus
                  quae necessitatibus. Sunt, repellat.
                </p>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#fcc41b]" />
                </div>
                <ContactPerson
                  name="John Doe"
                  position="Stadtteilarbeit"
                  email="stadtteilarbeit[at]ossara.de"
                  phone="(+49) 1575 1406 184"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
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
            <div className="absolute top-20 left-8 right-0 flex items-start justify-start">
              <h2
                className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl
                  font-semibold leading-tight md:leading-normal text-left
                  mb-4"
              >
                Beratungs- und Bewerbungstraining
              </h2>
            </div>

            {/* Content Section */}
            <div
              className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-16 
                   mt-10 md:mt-16 lg:mt-20"
            >
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 space-y-2 md:space-y-4">
                <p className="text-lg text-black leading-normal">
                  Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
                  Sozialberatung bzw. Orientierungshilfe an und unterstützt
                  Interessierte bei Bewerbungen.
                </p>

                <div className="space-y-1 md:space-y-2">
                  <div>
                    <p className="text-lg mt-4">
                      <span className="text-black pr-1 font-bold">Wo:</span>
                      In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                      Brödermannsweg 31, 22453 Hamburg und digital
                    </p>
                    <p className="text-lg mt-4">
                      <span className="text-black pr-1 font-bold">Wann:</span>
                      Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                    </p>
                    <p className="text-lg mt-4">
                      <span className="text-black pr-1 font-bold">
                        Für wen:
                      </span>
                      Geflüchtete aus naheliegenden Unterkünften und
                      Interessierte
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#fcc41b]" />
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
            <div className="absolute top-20 left-8 right-0 flex items-start justify-start">
              <h2 className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold leading-tight md:leading-normal mb-4 sm:mb-6 md:mb-8">
                Sprachförderung- und Prüfungsvorbereitung
              </h2>
            </div>

            {/* Content Section */}
            <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 md:mt-16 lg:mt-20">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-black">
                  Mit unserer Sprachförderung möchten wir den Teilnehmenden
                  helfen, ihre Sprachkenntnisse im formellen Kontext zu
                  verbessern, ihre schriftliche Kompetenz zu fördern und einen
                  Raum für interkulturellen Austausch zu bieten. Die
                  Prüfungsvorbereitung findet montags und dienstags von 10:00
                  bis 13:00 Uhr statt. Unser Ziel ist es, die Teilnehmenden
                  gezielt auf ihre Abschlussprüfungen vorzubereiten, indem wir
                  sowohl schriftliche als auch mündliche Prüfungsfähigkeiten
                  trainieren. In Kleingruppen werden Prüfungssituationen
                  simuliert und das richtige Verhalten in Prüfungen geübt.
                </p>
                <p className="text-lg text-black">
                  Die gängigen Prüfungen umfassen:
                </p>
                <ul className="text-base pl-5 mt-2 space-y-1 font-semibold text-[#fcc41b] list-disc">
                  <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
                  <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
                </ul>
                <p className="text-lg text-black">
                  <b>PS :</b>{" "}
                  <span className="text-lg text-black">
                    Wir führen keine Prüfungen durch und übernehmen keine
                    Prüfungsgebühren.
                  </span>
                </p>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#fcc41b]" />
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
