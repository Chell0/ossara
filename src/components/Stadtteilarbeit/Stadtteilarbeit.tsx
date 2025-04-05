import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Stadtteilarbeit/YouTubeSection/YouTubeSection";

export default function Stadtteilarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full bg-cover bg-center relative 
    h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] md2:h-[70vh] tab:h-[85vh] tab-xl:h-[90vh] lg:h-[95vh] xl:h-screen 2xl:h-screen"
          style={{
            backgroundImage:
              "url(/images/IntegrativeStadtteilarbeit/INTEGRATIVESTADTTEILARBEIT_STADTTEIL_ARBEIT.jpg)",
          }}
        >
          {/* Spacer matching navbar height */}
          <div className="h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 2xl:h-36" />

          <div className="absolute inset-0 flex items-start justify-start">
            <h1
              className="text-[#fcc41b] font-extrabold leading-tight uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] 
        pl-2 xs:pl-4 sm:pl-5 md:pl-8 md2:pl-8 tab:pl-11 tab-xl:pl-12 lg:pl-14 xl:pl-16 2xl:pl-16 
        pt-5 xs:pt-14 sm:pt-16 md:pt-20 md2:pt-24 tab:pt-28 tab-xl:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48"
            >
              Stadtteil.
              <br />
              arbeit.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b] pb-20">
          <div className="basis-full mx-auto">
            <p
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
                font-semibold leading-tight
                pb-20 p-6"
            >
              Mit niederschwelliger Beratung und praxisnaher Unterstützung
              schaffen wir berufliche Perspektiven und fördern erfolgreiche
              Integration.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-10 md:mt-20 px-4 sm:px-6 lg:px-8">
            {/* YouTube Video Section */}
            <div className="w-full md:basis-1/2 pt-4 md:pt-8 lg:pt-12">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="w-full md:basis-1/2 pt-4 md:pt-8 lg:pt-12 mb-10 md:mb-0">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl leading-relaxed text-black max-w-3xl mx-auto px-2 sm:px-0">
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
          className="relative w-full min-h-[30vh] md:min-h-screen text-[#fcc41b] flex items-center justify-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
              {/* Text Section */}
              <div className="basis-full lg:basis-1/2 px-4">
                <h2 className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-semibold leading-tight md:leading-normal text-left">
                  Stadtteilarbeit
                </h2>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left lg:text-left">
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

              {/* Contact Section */}
              <div className="basis-full lg:basis-1/2 px-4">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-32 border-2 mx-auto border-[#fcc41b] mb-6" />
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
          className="relative w-full min-h-[30vh] md:min-h-screen text-[#fcc41b] flex items-center justify-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
              {/* Left Column - Text Content */}
              <div className="basis-full lg:basis-1/2 px-4">
                <h2 className="text-3xl xs:text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-semibold leading-tight md:leading-normal text-left">
                  Beratungs- und
                  <br />
                  Bewerbungstraining
                </h2>

                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left lg:text-left">
                  Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
                  Sozialberatung bzw. Orientierungshilfe an und unterstützt
                  Interessierte bei Bewerbungen.
                </p>

                <div className="space-y-2">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                    <span className="text-black pr-1 font-bold">Wo:</span>
                    In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                    Brödermannsweg 31, 22453 Hamburg und digital
                  </p>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                    <span className="text-black pr-1 font-bold">Wann:</span>
                    Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                  </p>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                    <span className="text-black pr-1 font-bold">Für wen:</span>
                    Geflüchtete aus naheliegenden Unterkünften und Interessierte
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="basis-full lg:basis-1/2 px-4">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-32 border-2 mx-auto border-[#fcc41b] mb-6" />
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
          className="relative w-full min-h-[30vh] md:min-h-screen text-[#fcc41b]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
              {/* Left Column - Text Content */}
              <div className="basis-full lg:basis-1/2 px-4">
                <h2 className="text-2xl xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight md:leading-normal text-left">
                  Sprachförderung- und
                  <br />
                  Prüfungsvorbereitung
                </h2>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left lg:text-left">
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
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left">
                  Die gängigen Prüfungen umfassen:
                </p>
                <ul className="tetext-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl leading-relaxed text-left pl-5 mt-2 space-y-1 font-semibold text-[#fcc41b] list-disc">
                  <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
                  <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
                </ul>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left">
                  <b>PS :</b>{" "}
                  <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black leading-relaxed text-left">
                    Wir führen keine Prüfungen durch und übernehmen keine
                    Prüfungsgebühren.
                  </span>
                </p>
              </div>

              {/* Right Column - Contact Card */}
              <div className="basis-full lg:basis-1/2 px-4">
                <div className="text-center">
                  <h3 className="text-[#fcc41b] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold mb-10">
                    Kontaktperson
                  </h3>
                  <hr className="w-32 border-2 mx-auto border-[#fcc41b] mb-6" />
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
