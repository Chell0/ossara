"use client";

import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  type: string;
  date: string; // Format: 'YYYY-MM-DD'
  time: string;
  location: string;
  link: string;
  description: string;
  imageUrl: string;
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Decolonize Kirche",
    type: "Podiumsdiskussion",
    date: "2024-11-26",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event1",
    description:
      "In unserer bevorstehenden Veranstaltung werden wir die vielschichtige Beziehung zwischen Kirche und Kolonialismus beleuchten und die weitreichenden Auswirkungen dieser Verbindung auf die globalen Gesellschaften untersuchen. Wir werden dabei die missionarischen Aktivitäten der Kirchen, ihre Rolle bei der Legitimation kolonialer Unternehmungen und die Folgen für Bildung und Kultur in betroffenen Regionen thematisieren. Zudem werfen wir einen Blick auf die heutige Partnerschaftsarbeit und zeigen verschiedene Perspektiven auf – von der Unterstützung des Kolonialismus durch die Kirche bis hin zu den Widerstandsbewegungen innerhalb kirchlicher Gemeinschaften.",
    imageUrl: "/veranstaltungen/decolonize-kirche.png",
  },
  {
    id: 2,
    title: "Netz:werkstatt",
    type: "Netzwerken und Workshop",
    date: "2024-10-24",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event2",
    description:
      "Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken und Werken im Rahmen von kreativen Angeboten zu verbinden. Was: Teller bemalen - Hier kannst du deinen neuen Lieblings Frühstücksteller oder einen Wandteller gestalten Mit Fabienne Schöter, Kunsttherapeutin",
    imageUrl: "/veranstaltungen/Netzwerkstatt2.png",
  },
  {
    id: 3,
    title: "Netz:werkstatt",
    type: "Netzwerken und Workshop",
    date: "2024-09-19",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event3",
    description:
      "Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken und Werken im Rahmen von kreativen Angeboten zu verbinden. Was: Gemeinsam werden wir die Technik des Linoldruckes kennenlernen und uns hier ausprobieren. Mit Fabienne Schöter, Kunsttherapeutin.",
    imageUrl: "/veranstaltungen/Netzwerkstatt1.png",
  },
  {
    id: 4,
    title: "Decolonize Polizei?!",
    type: "Podiumsdiskussion",
    date: "2024-09-09",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event4",
    description:
      "In der Fortsetzung der Decolonize-Reihe wollen wir uns mit den historischen Bezügen und Kontinuitäten des Kolonialismus in der Hamburger Polizei auseinandersetzen. Dabei liegt der Fokus auf strukturellem Rassismus, wie zum Beispiel Racial Profiling, und den notwendigen Dekolonisierungsprozessen. Wir werden untersuchen, wie die Polizei während der Kolonialzeit koloniale Interessen durchsetzte und welche Maßnahmen heute erforderlich sind, um diese Strukturen zu überwinden..",
    imageUrl: "/veranstaltungen/decolonize-polizei.png",
  },
  {
    id: 5,
    title: "Decolonize Europa",
    type: "Podiumsdiskussion",
    date: "2024-05-30",
    time: "18:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event5",
    description:
      "Im Rahmen der Europawoche 2024 findet die Podiumsdiskussion „Europas koloniale Vergangenheit. Impulse und Initiativen zur dekolonialen Auseinandersetzung“ statt, die sich mit den aktuellen Ansätzen europäischer Länder zur Aufarbeitung ihrer kolonialen Geschichte beschäftigt. Diskutiert werden Themen wie Restitution, Entschädigung und die Rückgabe kulturellen Erbes sowie der interkulturelle Dialog und der Bewusstseinsprozess in der Zivilbevölkerung. Die Veranstaltung beleuchtet sowohl erfolgreiche dekoloniale Projekte als auch bestehende Herausforderungen und Bedarfe im Kontext der kolonialen Aufarbeitung.",
    imageUrl: "/veranstaltungen/decolonize-europa.png",
  },
  {
    id: 6,
    title: "Decolonize Schönheit",
    type: "Podiumsdiskussion",
    date: "2024-03-11",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event6",
    description:
      "Unsere Decolonize-Veranstaltungsreihe setzt sich diesmal mit dem Thema Schönheits- und Körperideale auseinander und untersucht die koloniale Prägung von gesellschaftlichen Schönheitsvorstellungen. Wir fragen, wie „Schönheit“ in unseren Biografien verankert ist und wie diese Ideale mit bestehenden Machtstrukturen kollidieren. Ziel ist es, durch Empowerment und dekoloniale Perspektiven einen gesellschaftlichen Wandel zu fördern und bestehende Schönheitsnormen zu hinterfragen.",
    imageUrl: "/veranstaltungen/decolonize-schonheit.png",
  },
  {
    id: 7,
    title: "11. Runder Tisch Koloniales Erbe",
    type: "Vernetzung",
    date: "2024-05-08",
    time: "18:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event7",
    description:
      "Am 08. Mai 2024 lädt der 11. Runde Tisch Koloniales Erbe von 18 bis 21 Uhr zu einem zivilgesellschaftlichen Austausch und einer Diskussion über den Fortschritt der Dekolonisierungsprojekte im Jupiter in der Mönckebergstraße 2-4 in Hamburg ein. Der Eintritt ist frei und die Veranstaltung ist öffentlich, wobei Beiträge zu aktuellen Projekten vorab an Catherine Schlüter gesendet werden können, spontane Beiträge sind ebenfalls willkommen.",
    imageUrl: "/veranstaltungen/runder-tisch.png",
  },
  {
    id: 8,
    title: "Decolonize Literatur",
    type: "Podiumsdiskussion",
    date: "2023-11-06",
    time: "18:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event8",
    description:
      "Die Auftaktveranstaltung „Decolonize Literatur“ widmet sich der kritischen Auseinandersetzung mit den dekolonialen Perspektiven auf die Literatur. Wir analysieren, wie der eurozentrische Blick in der Literaturbranche Vorurteile und Stereotypen durch Sprache, Illustration und das Verlagswesen fortsetzt. Ziel ist es, neue Repräsentationsräume zu schaffen und marginalisierte Perspektiven stärker in den Fokus zu rücken.",
    imageUrl: "/veranstaltungen/decolonize-literaur.png",
  },
  {
    id: 9,
    title: "Decolonizing Bodies",
    type: "Workshop",
    date: "2023-06-25",
    time: "15:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event9",
    description:
      "Eine Tanz-Methode zur Selbstreflexion und Selbstwahrnehmung. Für BIPoC*. __ *(Schwarze, Indigene und Menschen of Color: Menschen, die Rassismus erfahren.)",
    imageUrl: "/veranstaltungen/decolonizing-bodies.png",
  },
  {
    id: 10,
    title: "WenDo-Kurs für Frauen",
    type: "Workshop",
    date: "2023-06-10",
    time: "10:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event10",
    description:
      "WenDo heißt die eigenen Handlungsmöglichkeiten kennen, das eigene Gefühl ernst nehmen und Vertrauen in die eigene Stärke und Wehrhaftigkeit haben. So können Konflikte und Bedrohungssituationen erfolgreich gelöst werden. Auf der Arbeit, in der U-Bahn, im Freund*innenkreis oder der Familie.",
    imageUrl: "/veranstaltungen/wenDo.png",
  },
  {
    id: 11,
    title: "(Anti-) Rassismus im Gesundheitswesen",
    type: "Workshop",
    date: "2024-06-07",
    time: "17:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event11",
    description:
      "Rassistische Strukturen machen krank und zeigen ihre Spuren auch im Gesundheitswesen. Im Afrozensus 2020 berichten fast 7 von 10 Menschen über Rassismuserfahrung in ärztlicher Behandlung. In der Ausbildung von Gesundheitspersonal gibt es keine strukturierte Weiterbildung über Rassismus und andere Diskriminierungsformen. Dieser Workshop ist ein (Er-)Forschungsraum für Austausch, Reflexion, Bewegung und Strategien in gemeinsamen und geschützteren Räumen.",
    imageUrl: "/veranstaltungen/anti-rassismus-im-gesundheitswesen.png",
  },
  {
    id: 12,
    title:
      "Der Zusammenhang von rassistischen Mikroaggressionen und traumatischen Stress UND der Einfluss von Widerstand und Empowerment gegen Rassismus",
    type: "Workshop",
    date: "2023-06-05",
    time: "17:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event12",
    description:
      "Eine Form von Rassismus, die zu den alltäglichen und chronischen Belastungen von rassifizierten Menschen zählt und häufig im Therapiekontext reproduziert wird, sind Mikroaggressionen. Mikroaggressionen sind alles andere als harmlos: sie können traumatischen Stress auslösen. Wir beschäftigen uns mit diesem Zusammenhang und der Frage, wie Empowerment und Widerstand die Psyche schützen können.",
    imageUrl: "/veranstaltungen/mikroagressionen-und-traumatischen.png",
  },
  {
    id: 13,
    title: "Verbindungen- Kreativer Empowermet Workshop",
    type: "Workshop",
    date: "2023-05-20",
    time: "12:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event13",
    description:
      "Dieser Workshop bietet Raum für Verbindungen. Mit kreativen Methoden wollen wir Verbindungen reaktivieren, schaffen, besprechen und uns wieder mehr mit uns selbst und miteinander verbunden fühlen.",
    imageUrl: "/veranstaltungen/verbindungen.png",
  },
  {
    id: 14,
    title: "Yoga ist für ALLE",
    type: "Workshop",
    date: "2023-05-13",
    time: "13:00 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event14",
    description:
      "Yoga ist in den letzten Jahren immer beliebter geworden. Obwohl stark verwestlicht und eingenommen von mehrheitlich weißen, schlanken und reichen Frauen*, gehen die Ursprünge des Yoga nicht nur auf Indien zurück. Wie wir inzwischen wissen, ist diese heilige Praxis auch auf dem afrikanischen Kontinent verwurzelt. All gender/gemischter Kurs für BPoC Teilnahme ohne/mit geringen (A1) Deutschkenntnissen möglich!",
    imageUrl: "/veranstaltungen/yoga-ist-fur-alle.png",
  },
  {
    id: 15,
    title:
      "“Alltagsrassismus begegnen”- Umgangsformen und Bewältigungskapazitäten von Rassimus erfahrenen",
    type: "Workshop",
    date: "2023-05-12",
    time: "16:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event15",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
  {
    id: 16,
    title:
      "“Alltagsrassismus begegnen”- Umgangsformen und Bewältigungskapazitäten von Rassimus erfahrenen",
    type: "Workshop",
    date: "2025-05-12",
    time: "16:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event15",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
  {
    id: 17,
    title:
      "“Alltagsrassismus begegnen”- Umgangsformen und Bewältigungskapazitäten von Rassimus erfahrenen",
    type: "Workshop",
    date: "2025-05-13",
    time: "16:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event15",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
  {
    id: 18,
    title:
      "“Alltagsrassismus begegnen”- Umgangsformen und Bewältigungskapazitäten von Rassimus erfahrenen",
    type: "Workshop",
    date: "2025-05-14",
    time: "16:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event15",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
  {
    id: 19,
    title:
      "“Alltagsrassismus begegnen”- Umgangsformen und Bewältigungskapazitäten von Rassimus erfahrenen",
    type: "Workshop",
    date: "2025-05-15",
    time: "16:30 Uhr",
    location: "Hamburg Nord",
    link: "/veranstaltungen/event15",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
];

// Date format consistency
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("de-DE", {
    timeZone: "Europe/Berlin",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};

export default function Veranstaltungen() {
  const currentDate = new Date();

  // Separate current and future events from past events
  const currentAndFutureEvents = eventsData.filter((event) => new Date(event.date) >= currentDate);
  const pastEvents = eventsData.filter((event) => new Date(event.date) < currentDate);

  // Sort events in ascending order by date
  currentAndFutureEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <>
      {/* Header Section */}
      <div className="relative 3xl:h-[86vh] xs2:h-[15.8vh] xs:h-[13.5vh] w-full sm:h-[17.9vh] md:h-[32.2vh] lg:h-[43vh] xl:h-[53.7vh] 2xl:h-[60.5vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/Veranstaltungen/OSSARA_Lobbyarbeit_Netzwerken.jpg"
            alt="Veranstaltung Header image"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full">
          <section className="absolute bottom-1 left-1 flex h-full items-end px-4 sm:bottom-3 sm:left-1 sm:px-6 md:bottom-4 md:left-3 lg:bottom-6 lg:left-3">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              <h1 className="animate-fade-in font-bold 3xl:text-[12rem] text-2xl text-[#eb7b24] xs2:text-xl xs:text-lg uppercase leading-[1.1] sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
                <span className="block animate-slide-up">Veranstaltungen.</span>
              </h1>
            </div>
          </section>
        </div>
      </div>

      {/* Current and Future Events */}
      <h3 className="my-section text-center font-semibold text-2xl text-[#eb7b24] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Upcoming Events
      </h3>
      {/* Current and Future Events Section */}
      <section className="container mx-auto px-4 xs:px-5 py-section sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-4 lg:gap-section xl:grid-cols-4 xl:gap-section-lg 2xl:grid-cols-4">
          {currentAndFutureEvents.length > 0 ? (
            currentAndFutureEvents.map((event) => (
              <div key={event.id} className="w-full overflow-hidden">
                {/* Image section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    quality={100}
                    className="object-cover"
                    sizes="(max-width: 424px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  />
                  {/* Rectangular badge for date only */}
                  <div className="absolute right-4 bottom-4 rounded bg-[#eb7b24] p-2 xs:p-2.5 text-center text-white sm:p-3 md:p-3.5">
                    <div className="font-semibold text-xs xs:text-xs sm:text-sm md:text-base">
                      {formatDate(event.date)}
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex flex-col p-2">
                  <h3 className="line-clamp-3 font-semibold 3xl:text-2xl text-[#eb7b24] text-sm xs2:text-xs xs:text-[0.7rem] uppercase sm:text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl">
                    {event.title}
                  </h3>
                  <div className="text-gray-500 text-xs xs:text-xs sm:text-sm md:text-base">
                    {event.type}
                  </div>
                  <div className="text-gray-500 text-xs xs:text-xs sm:text-sm md:text-base">
                    @{event.location}
                  </div>
                  <Link
                    href={event.link}
                    className="mt-3 xs:mt-4 font-medium text-[#eb7b24] text-xs xs:text-xs hover:underline sm:mt-5 sm:text-sm md:text-base"
                  >
                    Mehr →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full py-section text-center font-bold text-base text-gray-800 xs:text-base sm:text-lg md:text-xl lg:text-2xl">
              No upcoming events found.
            </p>
          )}
        </div>
      </section>

      {/* Archived Events Section */}
      <h3 className="pt-section pb-section text-center font-semibold text-2xl text-[#eb7b24] xs:text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Veranstaltungsarchiv
      </h3>

      <section className="container mx-auto px-4 xs:px-5 py-section sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-4 lg:gap-section xl:grid-cols-4 xl:gap-section-lg 2xl:grid-cols-4">
          {pastEvents.slice(0, 15).map((event) => (
            <div key={event.id} className="w-full overflow-hidden">
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 424px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw)"
                />
                {/* Rectangular badge for date only */}
                <div className="absolute right-4 bottom-4 rounded bg-[#eb7b24] p-2 xs:p-2.5 text-center text-white sm:p-3 md:p-3.5">
                  <div className="font-semibold text-xs xs:text-xs sm:text-sm md:text-base">
                    {formatDate(event.date)}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-2">
                <h3 className="line-clamp-3 font-semibold 3xl:text-2xl text-[#eb7b24] text-base xs2:text-xs xs:text-[0.7rem] uppercase sm:text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl">
                  {event.title}
                </h3>
                <div className="text-gray-500 text-xs xs:text-xs sm:text-sm md:text-base">
                  {event.type}
                </div>
                <div className="text-gray-500 text-xs xs:text-xs sm:text-sm md:text-base">
                  @{event.location}
                </div>
                <Link
                  href={event.link}
                  className="mt-3 xs:mt-4 font-medium text-[#eb7b24] text-xs xs:text-xs hover:underline sm:mt-5 sm:text-sm md:text-base"
                >
                  Mehr →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
