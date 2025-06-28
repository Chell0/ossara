import type { Category, NewsItem } from "./types";

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Neu im Team Ossara- Hamburg",
    category: "Team",
    date: "01.10.2024",
    content:
      "Katja Heyn ist seit September für das Angebot des Bewerbungstrainings und der Orientierungshilfe zuständig.",
    image: "/news/picture-6.png",
    mehr: "/neuigkeiten/news_one",
  },
  {
    id: 2,
    title: "Decolonize Schönheit",
    category: "Decolonize",
    date: "11.03.2024",
    content:
      "Die Vorstellung von Körperidealen ist eng mit dem Kolonialismus verbunden, da die koloniale Herrschaft oft mit der Verbreitung westlicher Schönheitsstandards einherging. Während des Kolonialismus wurden die Körper und Erscheinungsbilder der kolonisierten Völker oft als minderwertig angesehen und westliche Schönheitsideale wurden als überlegen propagiert.",
    image: "/news/picture-5.png",
    mehr: "/neuigkeiten/news_two",
  },
  {
    id: 3,
    title: "Newsletter MachtBewusst: Dekoloniale Perspektiven",
    category: "Decolonize",
    date: "12.12.2023",
    content:
      "Du möchtest Neuigkeiten von Ossara e.V. und aktuelle Debatten und News zum Thema Dekolonisierung und Anti-Rassismus verfolgen oder über Veranstaltungen zu diesen Thematiken informiert bleiben? Dann abonniere unseren Newsletter hier.",
    image: "/news/picture-4.png",
    mehr: "/neuigkeiten/news_three",
  },
  {
    id: 4,
    title: "Vielfalt im Fokus",
    category: "Education",
    date: "10.11.2023",
    content:
      "Perspektiven und Erfahrungen von Migrantenselbstorganisationen Vielfalt als Statussymbol? Wer kommt zu kurz und welche Stimmen müssen mehr gehört werden? In einem interaktiven Live Podcast kommen Expert*innen zu Wort, die Perspektiven von Migrantenselbstorganisationen zum Thema Vielfalt in Hamburg in den Blick nehmen. Welche Herausforderungen bringt die Thematik für Person of Color?",
    image: "/news/picture-3.png",
    mehr: "/neuigkeiten/news_four",
  },
  {
    id: 5,
    title: "Podiumsdiskussion Decolonize Literatur",
    category: "Decolonize",
    date: "06.11.2023",
    content:
      "Unsere Auftaktveranstaltung Decolonize Literatur beschäftigt sich mit dekolonialen Perspektiven im Bereich Literatur und setzt sich kritisch mit den heutigen Auswirkungen des Kolonialismus auf die Literaturbranche auseinandersetzen. Wir analysieren den eurozentrischen Blick auf Literatur und wie neue Repräsentationsräume für weitere Perspektiven geschaffen werden können.",
    image: "/news/picture-1.png",
    mehr: "/neuigkeiten/news_five",
  },
];

export const archiveData: NewsItem[] = [
  {
    id: 7,
    title: "Archive 1",
    category: "Health",
    date: "2023-09-01",
    content: "Content of Archive 1",
    image: "/news/img.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 8,
    title: "Archive 2",
    category: "Education",
    date: "2023-08-01",
    content: "Content of Archive 2",
    image: "/news/img1.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 9,
    title: "Archive 3",
    category: "Sports",
    date: "2023-08-01",
    content: "Content of Archive 3",
    image: "/news/img2.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 10,
    title: "Archive 4",
    category: "Education",
    date: "2023-08-01",
    content: "Content of Archive 4",
    image: "/news/img3.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 11,
    title: "Archive 5",
    category: "Technology",
    date: "2023-08-01",
    content: "Content of Archive 5",
    image: "/news/img4.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 12,
    title: "Archive 6",
    category: "Sports",
    date: "2023-08-01",
    content: "Content of Archive 6",
    image: "/news/img.jpg",
    mehr: "/news_one/page.tsx",
  },
  {
    id: 13,
    title: "Archive 7",
    category: "Education",
    date: "2023-08-01",
    content: "Content of Archive 7",
    image: "/news/img1.jpg",
    mehr: "/news_one/page.tsx",
  },
];

export const categories: Category[] = [
  { id: 1, name: "Sports" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Health" },
  { id: 4, name: "Education" },
];
