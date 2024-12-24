"use client";

import Link from "next/link";
import { useState } from "react";

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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
    description:
      "Im Rahmen der Europawoche 2024 findet die Podiumsdiskussion „Europas koloniale Vergangenheit. Impulse und Initiativen zur dekolonialen Auseinandersetzung“ statt, die sich mit den aktuellen Ansätzen europäischer Länder zur Aufarbeitung ihrer kolonialen Geschichte beschäftigt. Diskutiert werden Themen wie Restitution, Entschädigung und die Rückgabe kulturellen Erbes sowie der interkulturelle Dialog und der Bewusstseinsprozess in der Zivilbevölkerung. Die Veranstaltung beleuchtet sowohl erfolgreiche dekoloniale Projekte als auch bestehende Herausforderungen und Bedarfe im Kontext der kolonialen Aufarbeitung.",
    imageUrl: "/veranstaltungen/decolonize-europa.png",
  },
  {
    id: 6,
    title: "Decolonize Schönheit",
    type: "Podiumsdiskussion",
    date: "2024-05-11",
    time: "18:30 Uhr",
    link: "https://ossara.org/register",
    description:
      "Unsere Decolonize-Veranstaltungsreihe setzt sich diesmal mit dem Thema Schönheits- und Körperideale auseinander und untersucht die koloniale Prägung von gesellschaftlichen Schönheitsvorstellungen. Wir fragen, wie „Schönheit“ in unseren Biografien verankert ist und wie diese Ideale mit bestehenden Machtstrukturen kollidieren. Ziel ist es, durch Empowerment und dekoloniale Perspektiven einen gesellschaftlichen Wandel zu fördern und bestehende Schönheitsnormen zu hinterfragen.",
    imageUrl: "/veranstaltungen/decolonize-schönheit.png",
  },
  {
    id: 7,
    title: "11. Runder Tisch Koloniales Erbe",
    type: "Vernetzung",
    date: "2024-05-08",
    time: "18:00 Uhr",
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
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
    link: "https://ossara.org/register",
    description:
      "Rassismus ist ein großes Problem, das verändert werden muss. Die Geschichte des Rassismus ist voller Leid, Schmerz und Krieg. Aber es gibt auch Geschichten von Menschen, die sich dagegen gewehrt haben. Leider werden die Erfahrungen von denen, die Rassismus erfahren oft nicht gehört. Wir sprechen u.a. darüber, auf welche Ressourcen Rassismus erfahrene zurückgreifen können, um gegen die Gefahren von Rassismus in Deutschland anzugehen.",
    imageUrl: "/veranstaltungen/uber-alltagsrassismus-reden.png",
  },
];

const formatDate = (date: string) => new Date(date).toLocaleDateString();

export default function Veranstaltungen() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermArchived, setSearchTermArchived] = useState("");

  const currentDate = new Date();

  // Separate current and future events from past events
  const currentAndFutureEvents = eventsData.filter(
    (event) => new Date(event.date) >= currentDate
  );
  const pastEvents = eventsData.filter(
    (event) => new Date(event.date) < currentDate
  );

  // Sort events in ascending order by date
  currentAndFutureEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Filter events based on search terms
  const filteredCurrentEvents = currentAndFutureEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPastEvents = pastEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTermArchived.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <main className="container p-6 mx-auto mt-10">
      {/* Search Bar for Current and Future Events */}
      <h3 className="mb-6 text-4xl font-semibold text-center text-gray-500">
        Upcoming Events
      </h3>
      <div className="flex justify-center my-20">
        <input
          type="text"
          placeholder="Search Upcoming Events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-lg md:w-1/2 focus:outline-none focus:ring focus:ring-[#ffb400]"
        />
      </div>

      {/* Current and Future Events Section */}
      <section>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {filteredCurrentEvents.length > 0 ? (
            filteredCurrentEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden transition-transform duration-300 transform bg-white shadow-md shadow-gray-200 rounded-2xl hover:scale-105"
              >
                {/* Image section at the top half */}
                <div className="w-full bg-gray-200 h-52">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Content section at the bottom half */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#ffb400]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    What: {event.type}
                  </p>
                  <p className="text-base text-gray-900">
                    Date: {formatDate(event.date)}
                  </p>
                  <p className="text-base text-gray-900">Time: {event.time}</p>
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 font-semibold text-[#ffb400] text-base hover:underline"
                  >
                    Register Here
                  </Link>
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="mt-2 text-base font-semibold text-blue-500 hover:underline"
                  >
                    {expandedEvent === event.id ? "Less Info" : "More Info"}
                  </button>
                  {expandedEvent === event.id && (
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No upcoming events found.
            </p>
          )}
        </div>
      </section>

      {/*Archived Events Section*/}
      <h3 className="mt-20 mb-6 text-4xl font-semibold text-center text-gray-500">
        Veranstaltungsarchiv
      </h3>
      {/* Search Bar for Archived Events */}
      <div className="flex justify-center my-20">
        <input
          type="text"
          placeholder="Search Archived Events..."
          value={searchTermArchived}
          onChange={(e) => setSearchTermArchived(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-lg md:w-1/2 focus:outline-none focus:ring focus:ring-[#ffb400]"
        />
      </div>

      {/* Archived Events Section */}
      <section className="mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPastEvents.length > 0 ? (
            filteredPastEvents.map((event) => (
              <div
                key={event.id}
                className={`shadow-2xl shadow-gray-500 rounded-xl overflow-hidden opacity-20 transition-all duration-300 hover:opacity-100`}
              >
                {/* Image section at the top half */}
                <div className="w-full bg-gray-200 h-96">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Content section at the bottom half */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#ffb400]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    What: {event.type}
                  </p>
                  <p className="text-base text-gray-900">
                    Date: {formatDate(event.date)}
                  </p>
                  <p className="text-base text-gray-900">Time: {event.time}</p>
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="mt-2 text-base font-semibold text-blue-500 hover:underline"
                  >
                    {expandedEvent === event.id ? "Less Info" : "More Info"}
                  </button>
                  {expandedEvent === event.id && (
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No Such Archived Events.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
