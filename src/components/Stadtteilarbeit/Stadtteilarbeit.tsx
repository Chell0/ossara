import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Stadtteilarbeit/YouTubeSection/YouTubeSection";

export default function Stadtteilarbeit() {
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
              "url(/images/IntegrativeStadtteilarbeit/INTEGRATIVESTADTTEILARBEIT_STADTTEIL_ARBEIT.jpg)",
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#fcc41b] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
        xl:text-8xl 2xl:text-[8rem] 3xl:text-[14rem] pl-4 pt-10"
            >
              Stadtteil.
              <br />
              arbeit.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b] pb-20 px-8">
          {/* BIG TEXT */}
          <div className="mx-auto pt-10 mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-22 xl:mb-26 2xl:mb-32 3xl:mb-44">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem]  font-semibold leading-normal tracking-normal">
              Mit niederschwelliger Beratung und praxisnaher Unterstützung
              schaffen wir berufliche Perspektiven und fördern erfolgreiche
              Integration.
            </p>
          </div>

          {/* Section two bottom half */}
          <div className="flex flex-col md:flex-row gap-10 mt-10 xs:mt-12 sm:mt-14 md:mt-20 lg:mt-24 px-4">
            {/* YouTube Video Section */}
            <div className="w-full md:w-1/2 pt-4 xs:pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 pt-10 mb-10 xs:mb-12 sm:mb-14 md:mb-0">
              <p className="text-sm xs:text-[0.7rem] xs2:text-[0.75rem] sm:text-[0.8rem] md:text-[0.84rem] lg:text-[0.95rem] xl:text-[1.25rem] 2xl:text-[1.33rem] 3xl:text-5xl leading-snug text-black mx-auto">
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
          className="relative w-full min-h-screen text-[#fcc41b] flex items-center justify-center pb-20"
        >
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-9 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 3xl:gap-13">
              {/* left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 xs:px-5 sm:px-6 md:p-0">
                <h2 className="text-lg xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold leading-tight sm:leading-snug md:leading-normal text-left">
                  Integrative Stadtteilarbeit
                </h2>
                <div className="space-y-4 mt-4">
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    Unsere integrative Stadtteilarbeit in Hamburg-Nord – mit
                    einem besonderen Fokus auf Groß Borstel – schafft Räume, in
                    denen sich alle Menschen willkommen fühlen.
                  </p>
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    Besonders wichtig ist uns, dass auch Schwarze Menschen und
                    People of Color sich gesehen, gehört und vertreten fühlen.
                  </p>
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    Wir gestalten Angebote, die Begegnung, Austausch und
                    Empowerment ermöglichen. In enger Zusammenarbeit mit anderen
                    Akteur:innen im Stadtteil sind wir an Runden Tischen
                    beteiligt, entwickeln gemeinsame Projekte und organisieren
                    eigene Veranstaltungen.
                  </p>
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    <strong>Unser Ziel:</strong> Braver Spaces und Safer Spaces
                    im Stadtteil zu etablieren. Räume, in denen Erfahrungen
                    geteilt, Perspektiven sichtbar gemacht und neue Formen des
                    Miteinanders erprobt werden können.
                  </p>
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    <strong>Wir glauben:</strong> Stadtteilarbeit ist dann
                    wirklich integrativ, wenn sie Strukturen hinterfragt,
                    Zugangshürden abbaut und aktiv dazu beiträgt, dass
                    marginalisierte Stimmen gehört werden.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 xs:pt-9 sm:pt-10 md:pt-12 lg:pt-0">
                <h3 className="text-[#fcc41b] text-base xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold mb-3">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Rita Zulu-Diawara"
                  position="Projektkoordination Integrative Stadtteilarbeit"
                  email="info[at]ossara.de"
                  phone="(+49) 152 13062798"
                  imageSrc="/images/IntegrativeStadtteilarbeit/RitaZulu_Diawara.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bewerbungstraining */}
        <section
          id="bewerbungstraining"
          className="relative w-full min-h-screen text-[#fcc41b] flex items-center justify-center pb-10"
        >
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-9 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 3xl:gap-13">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 xs:px-5 sm:px-6 md:p-0">
                <h2 className="text-lg xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold leading-tight sm:leading-snug md:leading-normal text-left">
                  Beratungs- und Bewerbungstraining
                </h2>

                <div className="space-y-4 mt-4">
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black">
                    Du hast Fragen zu Arbeit, Ausbildung, Schule oder Studium?
                    Du brauchst Hilfe beim Schreiben von Bewerbungen oder beim
                    Ausfüllen von Formularen?
                  </p>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Dann bist du bei uns richtig.
                  </p>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Ossara e.V. bietet einmal pro Woche eine offene Beratung an.
                    Wir nehmen uns Zeit für dich. Gemeinsam schauen wir, was du
                    brauchst und wie wir dich unterstützen können.
                  </p>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Wir helfen dir zum Beispiel bei:
                  </p>

                  <ul className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl leading-relaxed pl-10 space-y-2 xs:space-y-3 font-semibold text-[#fcc41b] list-disc">
                    <li>
                      der Suche nach Arbeit, Praktikum, Ausbildung oder Schule
                    </li>
                    <li>dem Schreiben von Lebenslauf und Bewerbung</li>
                    <li>Formularen vom Amt oder für Anträge</li>
                  </ul>

                  <div className="space-y-4 xs:space-y-5">
                    <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                      <span className="text-black font-bold block">Wann?</span>
                      Montags von 10:00 bis 14:00 Uhr - nach Vereinbarung
                    </p>

                    <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                      <span className="text-black font-bold block">Wo?</span>
                      In den Räumen des SV Groß Borstel Brödermannsweg 31, 22453
                      Hamburg und digital
                    </p>

                    <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                      <span className="text-black font-bold block">
                        Für wen?
                      </span>
                      Das Angebot ist für geflüchtete Menschen aus Unterkünften
                      in der Nähe – und für alle, die Unterstützung brauchen.
                    </p>
                  </div>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Wir sprechen einfaches Deutsch. Bei Bedarf organisieren wir
                    eine Übersetzung. Du bist herzlich willkommen.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 xs:pt-9 sm:pt-10 md:pt-12 lg:pt-0">
                <h3 className="text-[#fcc41b] text-base xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold mb-3">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Katja Heyn"
                  position="Leitung Beratungs- und Bewerbungstrainerin"
                  email="Bewerbungstraining[at]ossara.de"
                  phone="(+49) 1575 1406 184"
                  imageSrc="/images/IntegrativeStadtteilarbeit/KatjaHeyn.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sprachförderung */}
        <section
          id="sprachforderung"
          className="relative w-full min-h-[30vh] md:min-h-screen text-[#fcc41b] flex items-center justify-center pt-10"
        >
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 3xl:px-9 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 3xl:gap-13">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 xs:px-5 sm:px-6 md:px-0">
                <h2 className="text-lg xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold leading-tight sm:leading-snug md:leading-normal text-left">
                  Sprachförderung und Prüfungsvorbereitung
                </h2>

                <div className="space-y-4 mt-4">
                  <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl text-black leading-relaxed sm:leading-loose italic">
                    Gemeinsam sicherer in der Sprache – für Alltag, Ausbildung
                    und Prüfungen
                  </p>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Mit unserem Sprachförderangebot unterstützen wir dich dabei,
                    deine Deutschkenntnisse zu verbessern – besonders für
                    wichtige Gespräche, Bewerbungen und Prüfungen.
                  </p>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Wir helfen dir:
                  </p>

                  <ul className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl leading-relaxed pl-5 xs:pl-6 sm:pl-7 space-y-2 font-semibold text-[#fcc41b] list-disc">
                    <li>Besser auf Deutsch zu schreiben</li>
                    <li>Dich in Prüfungen gut auszudrücken</li>
                    <li>Dich sicherer im formellen Deutsch zu fühlen</li>
                    <li>
                      Andere Menschen kennenzulernen und dich auszutauschen
                    </li>
                  </ul>

                  <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                    Unser Ziel ist es, dich gut auf deine Abschlussprüfungen
                    vorzubereiten. In kleinen Gruppen üben wir Prüfungsfragen,
                    schreiben Texte und trainieren das freie Sprechen. Du kannst
                    lernen, wie Prüfungen ablaufen – und was du dabei beachten
                    musst.
                  </p>

                  <div className="space-y-4 xs:space-y-5">
                    <div>
                      <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                        <span className="text-black font-bold block">
                          Wann?
                        </span>
                        Montags und dienstags
                        <br />
                        von 10:00 bis 13:00 Uhr
                      </p>
                    </div>

                    <div>
                      <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                        <span className="font-bold block">Was wird geübt?</span>
                        Wir bereiten dich auf viele bekannte Prüfungen vor, zum
                        Beispiel:
                      </p>
                      <ul className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl font-semibold pl-5 xs:pl-6 sm:pl-7 space-y-2 mt-2 list-disc">
                        <li>telc A1, A2, B1, B2, C1</li>
                        <li>DTZ – Deutsch-Test für Zuwanderer</li>
                        <li>Goethe-Zertifikate A1 bis C1</li>
                      </ul>
                    </div>

                    <p className="text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                      <span className="text-black font-bold block">
                        Wichtig:
                      </span>
                      Wir führen keine Prüfungen selbst durch und übernehmen
                      keine Prüfungsgebühren. Wir helfen dir aber bei der
                      Vorbereitung und können dir sagen, wo du dich anmelden
                      kannst.
                    </p>
                    <p className="text-black text-base xs:text-[0.8rem] xs2:text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.22rem] xl:text-xl 2xl:text-[1.3rem] 3xl:text-3xl">
                      Melde dich gerne, wenn du mitmachen möchtest – wir freuen
                      uns auf dich!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 xs:pt-9 sm:pt-10 md:pt-12 lg:pt-0">
                <h3 className="text-[#fcc41b] text-base xs:text-xl xs2:text-[1.4rem] sm:text-2xl md:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-8xl font-semibold mb-3">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Hayford Anyidoho"
                  position="Leitung Sprachförderung und Prüfungsvorbereitung"
                  email="sprachfoerderung[at]ossara.de"
                  phone="(+49) 1590 6737147"
                  imageSrc="/images/IntegrativeStadtteilarbeit/HayfordAnyidoho.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
