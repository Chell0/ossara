"use client";

import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  type: string;
  date: string; // Format: 'YYYY-MM-DD'
  time: string;
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
    link: "/veranstaltungen/event2",
    description:
      "Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken und Werken im Rahmen von kreativen Angeboten zu verbinden. Was: Teller bemalen - Hier kannst du deinen neuen Lieblings Frühstücksteller oder einen Wandteller gestalten Mit Fabienne Schöter, Kunsttherapeutin",
    imageUrl: "/veranstaltungen/netzwerkstatt2.png",
  },
  {
    id: 3,
    title: "Netz:werkstatt",
    type: "Netzwerken und Workshop",
    date: "2024-09-19",
    time: "18:30 Uhr",
    link: "/veranstaltungen/event3",
    description:
      "Unser Angebot der NETZ:WERKSTATT bietet die Möglichkeit, Netzwerken und Werken im Rahmen von kreativen Angeboten zu verbinden. Was: Gemeinsam werden wir die Technik des Linoldruckes kennenlernen und uns hier ausprobieren. Mit Fabienne Schöter, Kunsttherapeutin.",
    imageUrl: "/veranstaltungen/netzwerkstatt1.png",
  },
  {
    id: 4,
    title: "Decolonize Polizei?!",
    type: "Podiumsdiskussion",
    date: "2024-09-09",
    time: "18:30 Uhr",
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
    month: "long",
    year: "numeric",
  });
};

export default function Veranstaltungen() {
  const currentDate = new Date();

  // Separate current and future events from past events
  const currentAndFutureEvents = eventsData.filter(
    (event) => new Date(event.date) >= currentDate,
  );
  const pastEvents = eventsData.filter(
    (event) => new Date(event.date) < currentDate,
  );

  // Sort events in ascending order by date
  currentAndFutureEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <>
      <div className="mx-auto">
        {/* Header Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center md:items-start md:justify-start">
            <h1 className="text-[#eb7b24] drop-shadow-xl font-extrabold uppercase p-4 ml-0 mt-0 md:ml-10 md:mt-20 text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
              Veranstaltungen.
            </h1>
          </div>
        </header>

        {/* Current and Future Events */}
        <h3 className="my-12 sm:my-16 md:my-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#eb7b24]">
          Upcoming Events
        </h3>

        {/* Current and Future Events Section */}
        <section className="mx-4 my-8 md:m-10">
          <div className="grid grid-cols-1 gap-5 mt-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentAndFutureEvents.length > 0 ? (
              currentAndFutureEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col h-full overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105"
                >
                  {/* Image section */}
                  <div className="relative w-full aspect-video sm:aspect-square lg:aspect-video">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      quality={100}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content section */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
                    <h3 className="text-sm font-semibold text-gray-900 lg:text-base">
                      {event.title}
                    </h3>

                    <div className="mt-2 text-xs text-gray-500 sm:mt-3 sm:text-sm">
                      What: {event.type}
                    </div>

                    <div className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                      Wann: {formatDate(event.date)}, {event.time}
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600 line-clamp-3 sm:mt-3 sm:text-sm">
                      {event.description}
                    </p>

                    <Link
                      href={event.link}
                      className="mt-3 text-xs font-medium text-[#eb7b24] hover:underline sm:mt-4 sm:text-sm"
                    >
                      Read Now →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="py-8 text-lg font-bold text-center text-gray-800 col-span-full sm:text-xl">
                No upcoming events found.
              </p>
            )}
          </div>
        </section>

        {/* Archived Events Section */}
        <h3
          className="pt-10 pb-6 text-3xl font-semibold leading-tight text-center text-[#eb7b24] 
              md:pt-16 md:pb-8 md:text-4xl md:leading-snug 
              lg:pt-20 lg:pb-10 lg:text-5xl lg:leading-normal"
        >
          Veranstaltungsarchiv
        </h3>

        <section className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {pastEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="w-full overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
              >
                {/* Image section */}
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    quality={100}
                    className="object-cover rounded-t-lg"
                  />
                </div>

                {/* Content section */}
                <div className="p-4 sm:p-6 flex flex-col">
                  {/* Event Title */}
                  <h3 className="mt-2 text-base font-semibold text-gray-900 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Event Type */}
                  <div className="mt-2 text-sm text-gray-500">
                    What: {event.type}
                  </div>

                  {/* Event Date & Time */}
                  <div className="mt-2 text-sm text-gray-500">
                    Wann: {formatDate(event.date)}, {event.time}
                  </div>

                  {/* Event Description */}
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Read Now link */}
                  <Link
                    href={event.link}
                    className="mt-4 text-sm text-[#eb7b24] hover:underline"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show "More Events" button if there are more than 3 archived events */}
          {pastEvents.length > 3 && (
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                href="/veranstaltungen/archives"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#eb7b24] rounded-lg hover:bg-[#d96c1f] transition-colors"
              >
                Mehr Veranstaltungen anzeigen ({pastEvents.length - 3}+)
              </Link>
            </div>
          )}

          {/* Empty state message */}
          {pastEvents.length === 0 && (
            <p className="text-center text-gray-600">
              Keine archivierten Veranstaltungen gefunden.
            </p>
          )}
        </section>
      </div>
    </>
  );
}
