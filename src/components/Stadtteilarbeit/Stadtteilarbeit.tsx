import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Stadtteilarbeit/YouTubeSection/YouTubeSection";

export default function Stadtteilarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/IntegrativeStadtteilarbeit/INTEGRATIVESTADTTEILARBEIT_STADTTEIL_ARBEIT.jpg"
              fill
              alt="Home Page Header image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div
              className="3xl:space-y-13 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 "
            >
              <h1 className="font-extrabold 3xl:text-[160px] text-[#fcc41b] xs2:text-5xl xs:text-4xl uppercase leading-[1.1]text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px]">
                <span className="block">Stadtteil.</span>
                <span className="block">Arbeit.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen w-full px-6 3xl:pb-32 pb-8 xs:pb-10 text-[#fcc41b] sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-32 xs:mb-10 pt-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
            <p className="text-left font-semibold 3xl:text-[8rem] text-xl xs2:text-3xl xs:text-2xl leading-normal tracking-normal sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Mit niederschwelliger Beratung und praxisnaher Unterstützung
              schaffen wir berufliche Perspektiven und fördern erfolgreiche
              Integration.
            </p>
          </div>

          {/* Section two bottom half */}
          <div className="3xl:mt-32 mt-8 xs:mt-10 flex flex-col 3xl:gap-20 gap-4 xs:gap-6 3xl:px-20 px-4 xs:px-6 sm:mt-12 sm:gap-8 sm:px-8 md:mt-16 md:flex-row md:gap-10 md:px-10 lg:mt-20 lg:gap-12 lg:px-12 xl:mt-24 xl:gap-14 xl:px-14 2xl:mt-28 2xl:gap-16 2xl:px-16">
            {/* YouTube Video Section */}
            <div className="w-full 3xl:pt-22 pt-8 xs:pt-10 sm:pt-12 md:w-1/2 md:pt-14 lg:pt-16 xl:pt-18 2xl:pt-20">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="mb-8 xs:mb-10 w-full 3xl:pt-24 pt-8 xs:pt-10 sm:mb-12 sm:pt-12 md:mb-0 md:w-1/2 md:pt-14 lg:pt-16 xl:pt-18 2xl:pt-20">
              <p className="mx-auto max-w-prose 3xl:text-2xl text-black text-xs xs:text-sm leading-snug sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
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
          className="relative flex min-h-screen w-full items-center justify-center py-section text-[#fcc41b]"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full px-4 md:px-0 lg:w-1/2">
                <h2 className="text-left font-semibold text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                  Integrative Stadtteilarbeit
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    "Unsere integrative Stadtteilarbeit in Hamburg-Nord – mit einem besonderen Fokus auf Groß Borstel – schafft Räume, in denen sich alle Menschen willkommen fühlen.",
                    "Besonders wichtig ist uns, dass auch Schwarze Menschen und People of Color sich gesehen, gehört und vertreten fühlen.",
                    "Wir gestalten Angebote, die Begegnung, Austausch und Empowerment ermöglichen. In enger Zusammenarbeit mit anderen Akteur:innen im Stadtteil sind wir an Runden Tischen beteiligt, entwickeln gemeinsame Projekte und organisieren eigene Veranstaltungen.",
                    "<strong>Unser Ziel:</strong> Braver Spaces und Safer Spaces im Stadtteil zu etablieren. Räume, in denen Erfahrungen geteilt, Perspektiven sichtbar gemacht und neue Formen des Miteinanders erprobt werden können.",
                    "<strong>Wir glauben:</strong> Stadtteilarbeit ist dann wirklich integrativ, wenn sie Strukturen hinterfragt, Zugangshürden abbaut und aktiv dazu beiträgt, dass marginalisierte Stimmen gehört werden.",
                  ].map((text, index) => (
                    <p
                      key={index}
                      className="text-black text-sm sm:text-base md:text-lg"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="flex w-full flex-col items-center justify-center pt-8 text-center lg:w-1/2 lg:items-start lg:pt-0 lg:text-left">
                <h3 className="mb-4 font-semibold 3xl:text-8xl text-[#fcc41b] text-xl xs2:text-3xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#fcc41b] lg:mx-0" />
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
          className="relative flex min-h-screen w-full items-center justify-center py-section text-[#fcc41b]"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full px-4 md:px-0 lg:w-1/2">
                <h2 className="text-left font-semibold text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                  Beratungs- und Bewerbungstraining
                </h2>

                <div className="mt-6 space-y-4">
                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Du hast Fragen zu Arbeit, Ausbildung, Schule oder Studium?
                    Du brauchst Hilfe beim Schreiben von Bewerbungen oder beim
                    Ausfüllen von Formularen?
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Dann bist du bei uns richtig.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Ossara e.V. bietet einmal pro Woche eine offene Beratung an.
                    Wir nehmen uns Zeit für dich. Gemeinsam schauen wir, was du
                    brauchst und wie wir dich unterstützen können.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir helfen dir zum Beispiel bei:
                  </p>

                  <ul className="list-disc space-y-2 pl-6 font-semibold text-[#fcc41b] text-sm leading-relaxed sm:text-base md:text-lg">
                    <li>
                      der Suche nach Arbeit, Praktikum, Ausbildung oder Schule
                    </li>
                    <li>dem Schreiben von Lebenslauf und Bewerbung</li>
                    <li>Formularen vom Amt oder für Anträge</li>
                  </ul>

                  <div className="space-y-4">
                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="block font-bold text-black">Wann?</span>
                      Montags von 10:00 bis 14:00 Uhr - nach Vereinbarung
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="block font-bold text-black">Wo?</span>
                      In den Räumen des SV Groß Borstel Brödermannsweg 31, 22453
                      Hamburg und digital
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="block font-bold text-black">
                        Für wen?
                      </span>
                      Das Angebot ist für geflüchtete Menschen aus Unterkünften
                      in der Nähe – und für alle, die Unterstützung brauchen.
                    </p>
                  </div>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir sprechen einfaches Deutsch. Bei Bedarf organisieren wir
                    eine Übersetzung. Du bist herzlich willkommen.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="flex w-full flex-col items-center justify-center pt-8 text-center lg:w-1/2 lg:items-start lg:pt-0 lg:text-left">
                <h3 className="mb-4 font-semibold 3xl:text-8xl text-[#fcc41b] text-xl xs2:text-3xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#fcc41b] lg:mx-0" />
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
          className="relative flex min-h-[30vh] w-full items-center justify-center py-section text-[#fcc41b] md:min-h-screen"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full px-4 md:px-0 lg:w-1/2">
                <h2 className="text-left font-semibold text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                  Sprachförderung und Prüfungsvorbereitung
                </h2>

                <div className="mt-6 space-y-4">
                  <p className="text-black text-sm italic leading-relaxed sm:text-base md:text-lg">
                    Gemeinsam sicherer in der Sprache – für Alltag, Ausbildung
                    und Prüfungen
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Mit unserem Sprachförderangebot unterstützen wir dich dabei,
                    deine Deutschkenntnisse zu verbessern – besonders für
                    wichtige Gespräche, Bewerbungen und Prüfungen.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir helfen dir:
                  </p>

                  <ul className="list-disc space-y-2 pl-5 font-semibold text-[#fcc41b] text-sm leading-relaxed sm:text-base md:text-lg">
                    <li>Besser auf Deutsch zu schreiben</li>
                    <li>Dich in Prüfungen gut auszudrücken</li>
                    <li>Dich sicherer im formellen Deutsch zu fühlen</li>
                    <li>
                      Andere Menschen kennenzulernen und dich auszutauschen
                    </li>
                  </ul>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Unser Ziel ist es, dich gut auf deine Abschlussprüfungen
                    vorzubereiten. In kleinen Gruppen üben wir Prüfungsfragen,
                    schreiben Texte und trainieren das freie Sprechen. Du kannst
                    lernen, wie Prüfungen ablaufen – und was du dabei beachten
                    musst.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm sm:text-base md:text-lg">
                        <span className="block font-bold text-black">
                          Wann?
                        </span>
                        Montags und dienstags
                        <br />
                        von 10:00 bis 13:00 Uhr
                      </p>
                    </div>

                    <div>
                      <p className="text-black text-sm sm:text-base md:text-lg">
                        <span className="block font-bold">Was wird geübt?</span>
                        Wir bereiten dich auf viele bekannte Prüfungen vor, zum
                        Beispiel:
                      </p>
                      <ul className="mt-2 list-disc space-y-2 pl-5 font-semibold text-sm sm:text-base md:text-lg">
                        <li>telc A1, A2, B1, B2, C1</li>
                        <li>DTZ – Deutsch-Test für Zuwanderer</li>
                        <li>Goethe-Zertifikate A1 bis C1</li>
                      </ul>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="block font-bold text-black">
                        Wichtig:
                      </span>
                      Wir führen keine Prüfungen selbst durch und übernehmen
                      keine Prüfungsgebühren. Wir helfen dir aber bei der
                      Vorbereitung und können dir sagen, wo du dich anmelden
                      kannst.
                    </p>
                    <p className="text-black text-sm sm:text-base md:text-lg">
                      Melde dich gerne, wenn du mitmachen möchtest – wir freuen
                      uns auf dich!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="flex w-full flex-col items-center justify-center pt-8 text-center lg:w-1/2 lg:items-start lg:pt-0 lg:text-left">
                <h3 className="mb-4 font-semibold 3xl:text-8xl text-[#fcc41b] text-xl xs2:text-3xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#fcc41b] lg:mx-0" />
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
